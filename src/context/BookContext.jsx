import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchBooks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.items) {
        setBooks(data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || ['Unknown Author'],
          description: item.volumeInfo.description || 'No description available',
          image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200?text=No+Cover',
          rating: item.volumeInfo.averageRating || 0,
          publishedDate: item.volumeInfo.publishedDate,
          pageCount: item.volumeInfo.pageCount,
        })));
      } else {
        setBooks([]);
      }
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (book) => {
    if (!favorites.find(fav => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (bookId) => {
    setFavorites(favorites.filter(book => book.id !== bookId));
  };

  const isFavorite = (bookId) => {
    return favorites.some(book => book.id === bookId);
  };

  return (
    <BookContext.Provider value={{
      books,
      favorites,
      loading,
      error,
      searchBooks,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
    }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
}; 
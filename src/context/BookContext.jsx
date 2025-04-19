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
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (err) {
        console.error('Error loading favorites:', err);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error('Error saving favorites:', err);
    }
  }, [favorites]);

  const searchBooks = async (query) => {
    // Input validation
    if (!query || query.trim().length < 2) {
      setError('Please enter at least 2 characters to search');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_GOOGLE_BOOKS_API_URL;
      const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
      
      if (!apiUrl || !apiKey) {
        throw new Error('API configuration is missing');
      }

      const response = await fetch(
        `${apiUrl}?q=${encodeURIComponent(query)}&key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

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
        setError('No books found matching your search');
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch books. Please try again later.');
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
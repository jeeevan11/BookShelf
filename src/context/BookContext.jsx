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
        `${apiUrl}?q=${encodeURIComponent(query)}&orderBy=relevance&maxResults=12&fields=items(id,volumeInfo)&key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (data.items) {
        setBooks(data.items.map(item => {
          const volumeInfo = item.volumeInfo;
          // Default rating between 3.5 and 4.8 for a better demo experience
          const defaultRating = (3.5 + Math.random() * 1.3).toFixed(1);
          return {
            id: item.id,
            title: volumeInfo.title,
            authors: volumeInfo.authors || ['Unknown Author'],
            description: volumeInfo.description || 'No description available',
            image: volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150x200?text=No+Cover',
            rating: volumeInfo.averageRating || parseFloat(defaultRating),
            publishedDate: volumeInfo.publishedDate?.split('-')[0] || 'Unknown',
            pageCount: volumeInfo.pageCount || 'Unknown',
          };
        }));
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
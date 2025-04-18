import { useBookContext } from '../context/BookContext';

const BookCard = ({ book }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useBookContext();
  const isFav = isFavorite(book.id);

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFromFavorites(book.id);
    } else {
      addToFavorites(book);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-secondary-900 mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-sm text-secondary-500 mb-3">by {book.authors.join(', ')}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-secondary-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-secondary-500 ml-1">({book.rating.toFixed(1)})</span>
          </div>
          <span className="text-xs text-secondary-400">
            {book.publishedDate} • {book.pageCount} pages
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard; 
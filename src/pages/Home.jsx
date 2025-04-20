import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useBookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const Home = () => {
  const { books, searchBooks } = useBookContext();

  useEffect(() => {
    // Fetch popular and highly rated books
    searchBooks('subject:fiction orderBy:relevance');
  }, [searchBooks]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0f1929] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Find, rate, and review books. Create your personal reading list and share your thoughts with the community.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-[#b08d57] hover:bg-[#9a7a49] transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white">Popular books you might like</h2>
              <p className="text-gray-400">Discover new reads</p>
            </div>
            <Link
              to="/search"
              className="text-sm font-medium text-[#b08d57] hover:text-[#9a7a49] transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.slice(0, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
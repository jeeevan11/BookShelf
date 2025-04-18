import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg text-secondary-600 mb-8">
            Find, rate, and review books. Create your personal reading list and share your thoughts with the community.
          </p>
          <Link
            to="/search"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Featured Books Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-900">Featured Books</h2>
            <p className="text-secondary-500">Popular books you might like</p>
          </div>
          <Link
            to="/search"
            className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for featured books */}
          <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-200 overflow-hidden">
            <div className="h-64 bg-secondary-100"></div>
            <div className="p-4">
              <h3 className="font-medium text-secondary-900 mb-1">Book Title</h3>
              <p className="text-sm text-secondary-500 mb-3">Author Name</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-secondary-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-secondary-500 ml-1">(4.2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
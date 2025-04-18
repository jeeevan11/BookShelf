import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary-50">
      <nav className="bg-white border-b border-secondary-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-primary-600">
              BookDB
            </Link>
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-primary-600'
                    : 'text-secondary-500 hover:text-primary-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/search"
                className={`text-sm font-medium transition-colors ${
                  isActive('/search')
                    ? 'text-primary-600'
                    : 'text-secondary-500 hover:text-primary-600'
                }`}
              >
                Search
              </Link>
              <Link
                to="/favorites"
                className={`text-sm font-medium transition-colors ${
                  isActive('/favorites')
                    ? 'text-primary-600'
                    : 'text-secondary-500 hover:text-primary-600'
                }`}
              >
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-secondary-200 py-6">
        <div className="container mx-auto px-4 text-center text-secondary-500 text-sm">
          <p>© 2024 BookDB - Your Ultimate Book Discovery Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
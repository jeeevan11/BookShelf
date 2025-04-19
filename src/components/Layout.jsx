import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1324]">
      <nav className="bg-[#1a2537]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-[#b08d57]">
              BookDB
            </Link>
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-[#b08d57]'
                    : 'text-gray-300 hover:text-[#b08d57]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/search"
                className={`text-sm font-medium transition-colors ${
                  isActive('/search')
                    ? 'text-[#b08d57]'
                    : 'text-gray-300 hover:text-[#b08d57]'
                }`}
              >
                Search
              </Link>
              <Link
                to="/favorites"
                className={`text-sm font-medium transition-colors ${
                  isActive('/favorites')
                    ? 'text-[#b08d57]'
                    : 'text-gray-300 hover:text-[#b08d57]'
                }`}
              >
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-[#1a2537] py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 BookDB - Your Ultimate Book Discovery Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
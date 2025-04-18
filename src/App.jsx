import { Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import './App.css'

function App() {
  return (
    <BookProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BookProvider>
  );
}

export default App;

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import MyListPage from './pages/MyListPage/MyListPage';
import SearchPage from './pages/SearchPage/SearchPage';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate('/search');
    }
  }, [navigate]);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tv-shows" element={<BrowsePage title="TV Shows" filterGenre="" />} />
          <Route path="/movies" element={<BrowsePage title="Movies" filterGenre="" />} />
          <Route path="/new-popular" element={<BrowsePage title="New & Popular" filterGenre="" />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="/search" element={<SearchPage initialQuery={searchQuery} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

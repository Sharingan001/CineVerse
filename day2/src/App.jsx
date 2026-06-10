import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import { useState, useCallback } from 'react';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <>
      <ThreeBackground />
      <Navbar onSearch={handleSearch} />
      <main>
        <AppRoutes searchQuery={searchQuery} />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

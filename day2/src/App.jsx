import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useState, useCallback } from 'react';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <>
      {!isLoginPage && <Navbar onSearch={handleSearch} />}
      <main>
        <AppRoutes searchQuery={searchQuery} />
      </main>
      {!isLoginPage && <Footer />}
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

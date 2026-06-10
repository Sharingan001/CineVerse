import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BrowsePage from '../pages/BrowsePage/BrowsePage';
import MyListPage from '../pages/MyListPage/MyListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import BookingPage from '../pages/BookingPage/BookingPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

export default function AppRoutes({ searchQuery }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/tv-shows" element={<ProtectedRoute><BrowsePage title="TV Shows" filterGenre="" /></ProtectedRoute>} />
      <Route path="/movies" element={<ProtectedRoute><BrowsePage title="Movies" filterGenre="" /></ProtectedRoute>} />
      <Route path="/new-popular" element={<ProtectedRoute><BrowsePage title="New & Popular" filterGenre="" /></ProtectedRoute>} />
      <Route path="/my-list" element={<ProtectedRoute><MyListPage /></ProtectedRoute>} />
      <Route path="/search" element={<ProtectedRoute><SearchPage initialQuery={searchQuery} /></ProtectedRoute>} />
      <Route path="/booking/:id" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
    </Routes>
  );
}

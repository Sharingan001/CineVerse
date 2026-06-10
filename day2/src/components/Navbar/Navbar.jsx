import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'TV Shows', path: '/tv-shows' },
  { label: 'Movies', path: '/movies' },
  { label: 'New & Popular', path: '/new-popular' },
  { label: 'My List', path: '/my-list' },
];

export default function Navbar({ onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, user, role } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__left">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo">
          <span className="navbar__logo-text">CINEVERSE</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="navbar__links" id="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className="navbar__right">
        {/* Search */}
        <form
          className={`navbar__search ${searchOpen ? 'navbar__search--open' : ''}`}
          onSubmit={handleSearchSubmit}
          id="nav-search"
        >
          <button
            type="button"
            className="navbar__search-icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <FiSearch />
          </button>
          <input
            ref={searchRef}
            type="text"
            className="navbar__search-input"
            placeholder="Titles, people, genres"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
            onBlur={() => {
              if (!searchQuery) setSearchOpen(false);
            }}
          />
        </form>

        {isAuthenticated ? (
          <>
            {/* Notifications */}
            <button className="navbar__icon-btn" id="nav-notifications" aria-label="Notifications">
              <FiBell />
              <span className="navbar__notification-badge">3</span>
            </button>

            {/* Profile */}
            <div
              className="navbar__profile"
              id="nav-profile"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <div className="navbar__avatar">
                <div className="navbar__avatar-img">{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
                <FiChevronDown className={`navbar__caret ${profileOpen ? 'navbar__caret--open' : ''}`} />
              </div>
              {profileOpen && (
                <div className="navbar__profile-dropdown">
                  <div className="navbar__profile-item">
                    <div className="navbar__profile-avatar-sm">{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
                    <span>{user?.name || 'User'} ({role})</span>
                  </div>
                  <div className="navbar__profile-divider" />
                  <button className="navbar__profile-item" onClick={() => { logout(); navigate('/login'); }}>
                    Sign out of Cineverse
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <button className="navbar__icon-btn" onClick={() => navigate('/login')} style={{ width: 'auto', padding: '0 15px' }}>
            <FiLogIn style={{ marginRight: '8px' }} /> Sign In
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

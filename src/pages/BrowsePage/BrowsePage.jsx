import { useState, useMemo, useCallback } from 'react';
import { categories } from '../../data/movies';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import { FiGrid, FiList } from 'react-icons/fi';
import './BrowsePage.css';

export default function BrowsePage({ title, filterGenre }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState('grid');

  const allMovies = useMemo(() => {
    const movieMap = new Map();
    categories.forEach((cat) => {
      cat.movies.forEach((m) => {
        if (!movieMap.has(m.id)) {
          movieMap.set(m.id, m);
        }
      });
    });
    let movies = Array.from(movieMap.values());

    if (filterGenre) {
      movies = movies.filter((m) =>
        m.genres.some((g) => g.toLowerCase().includes(filterGenre.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'year':
        movies.sort((a, b) => b.year - a.year);
        break;
      case 'match':
        movies.sort((a, b) => parseInt(b.match) - parseInt(a.match));
        break;
      default:
        movies.sort((a, b) => a.title.localeCompare(b.title));
    }

    return movies;
  }, [filterGenre, sortBy]);

  const handleCloseModal = useCallback(() => setSelectedMovie(null), []);

  return (
    <div className="browse-page" id="browse-page">
      <div className="browse-page__header">
        <h1 className="browse-page__title">{title}</h1>
        <div className="browse-page__controls">
          <select
            className="browse-page__sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            id="browse-sort"
          >
            <option value="title">Sort by Title</option>
            <option value="year">Sort by Year</option>
            <option value="match">Sort by Match</option>
          </select>
          <div className="browse-page__view-toggle">
            <button
              className={`browse-page__view-btn ${viewMode === 'grid' ? 'browse-page__view-btn--active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FiGrid />
            </button>
            <button
              className={`browse-page__view-btn ${viewMode === 'list' ? 'browse-page__view-btn--active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FiList />
            </button>
          </div>
        </div>
      </div>

      <div className={`browse-page__grid browse-page__grid--${viewMode}`}>
        {allMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            index={index}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {allMovies.length === 0 && (
        <div className="browse-page__empty">
          <span className="browse-page__empty-icon">🎬</span>
          <p>No titles found</p>
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

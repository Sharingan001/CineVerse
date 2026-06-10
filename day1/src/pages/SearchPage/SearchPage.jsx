import { useState, useMemo, useCallback } from 'react';
import { categories } from '../../data/movies';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import { FiSearch } from 'react-icons/fi';
import './SearchPage.css';

export default function SearchPage({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleCloseModal = useCallback(() => setSelectedMovie(null), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const movieMap = new Map();
    categories.forEach((cat) => {
      cat.movies.forEach((m) => {
        if (
          !movieMap.has(m.id) &&
          (m.title.toLowerCase().includes(q) ||
            m.genres.some((g) => g.toLowerCase().includes(q)) ||
            m.description.toLowerCase().includes(q))
        ) {
          movieMap.set(m.id, m);
        }
      });
    });
    return Array.from(movieMap.values());
  }, [query]);

  return (
    <div className="search-page" id="search-page">
      <div className="search-page__bar">
        <FiSearch className="search-page__bar-icon" />
        <input
          type="text"
          className="search-page__input"
          placeholder="Search for movies, genres, actors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          id="search-input"
        />
      </div>

      {query.trim() && (
        <p className="search-page__results-count">
          {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
        </p>
      )}

      {results.length > 0 ? (
        <div className="search-page__grid">
          {results.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      ) : query.trim() ? (
        <div className="search-page__empty">
          <span className="search-page__empty-icon">🔍</span>
          <h2>No results found</h2>
          <p>Try searching for something else</p>
        </div>
      ) : (
        <div className="search-page__empty">
          <span className="search-page__empty-icon">🎬</span>
          <h2>Search Cineverse</h2>
          <p>Find your favorite movies and TV shows</p>
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

import { useState, useRef } from 'react';
import { FiPlay, FiPlus, FiThumbsUp, FiChevronDown } from 'react-icons/fi';
import './MovieCard.css';

export default function MovieCard({ movie, index, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      className="movie-card"
      ref={cardRef}
      style={{ '--card-index': index }}
      id={`card-${movie.id}`}
      onClick={onClick}
    >
      {/* Poster */}
      <div className="movie-card__poster">
        {!imgLoaded && !imgError && (
          <div className="movie-card__skeleton skeleton" />
        )}
        {!imgError ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className={`movie-card__img ${imgLoaded ? 'movie-card__img--loaded' : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="movie-card__fallback">
            <span className="movie-card__fallback-icon">🎬</span>
            <span className="movie-card__fallback-title">{movie.title}</span>
          </div>
        )}

        {/* Number overlay for top 10 */}
        {index < 10 && (
          <div className="movie-card__rank">
            <span className="movie-card__rank-number">{index + 1}</span>
          </div>
        )}
      </div>

      {/* Hover Card */}
      <div className="movie-card__hover">
        <div className="movie-card__hover-poster">
          {!imgError ? (
            <img src={movie.poster} alt={movie.title} />
          ) : (
            <div className="movie-card__fallback">
              <span className="movie-card__fallback-icon">🎬</span>
            </div>
          )}
          <div className="movie-card__hover-gradient" />
        </div>

        <div className="movie-card__hover-info">
          <div className="movie-card__hover-actions">
            <button className="movie-card__action-btn movie-card__action-btn--play" aria-label="Play">
              <FiPlay />
            </button>
            <button className="movie-card__action-btn" aria-label="Add to list">
              <FiPlus />
            </button>
            <button className="movie-card__action-btn" aria-label="Like">
              <FiThumbsUp />
            </button>
            <button
              className="movie-card__action-btn movie-card__action-btn--expand"
              aria-label="More info"
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            >
              <FiChevronDown />
            </button>
          </div>

          <div className="movie-card__hover-meta">
            <span className="movie-card__hover-match">{movie.match} Match</span>
            <span className="movie-card__hover-rating">{movie.rating}</span>
            <span className="movie-card__hover-duration">{movie.duration}</span>
          </div>

          <div className="movie-card__hover-genres">
            {movie.genres.slice(0, 3).map((g, i) => (
              <span key={g}>
                {g}
                {i < Math.min(movie.genres.length, 3) - 1 && <span className="movie-card__genre-dot">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

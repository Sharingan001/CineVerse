import { useEffect, useRef } from 'react';
import { FiPlay, FiPlus, FiThumbsUp, FiX, FiVolume2 } from 'react-icons/fi';
import './MovieModal.css';

export default function MovieModal({ movie, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!movie) return null;

  return (
    <div
      className="modal-backdrop"
      ref={modalRef}
      onClick={handleBackdropClick}
      id="movie-modal"
    >
      <div className="modal" role="dialog" aria-modal="true">
        {/* Close Button */}
        <button className="modal__close" onClick={onClose} aria-label="Close" id="modal-close">
          <FiX />
        </button>

        {/* Hero Section */}
        <div className="modal__hero">
          <img
            src={movie.poster}
            alt={movie.title}
            className="modal__hero-img"
          />
          <div className="modal__hero-gradient" />

          <div className="modal__hero-content">
            <h2 className="modal__title">{movie.title}</h2>
            <div className="modal__hero-actions">
              <button className="modal__btn modal__btn--play">
                <FiPlay /> Play
              </button>
              <button className="modal__circle-btn" aria-label="Add to list">
                <FiPlus />
              </button>
              <button className="modal__circle-btn" aria-label="Like">
                <FiThumbsUp />
              </button>
              <button className="modal__circle-btn modal__circle-btn--right" aria-label="Volume">
                <FiVolume2 />
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="modal__body">
          <div className="modal__info-grid">
            <div className="modal__info-main">
              <div className="modal__meta">
                <span className="modal__match">{movie.match} Match</span>
                <span className="modal__year">{movie.year}</span>
                <span className="modal__rating-badge">{movie.rating}</span>
                <span className="modal__duration">{movie.duration}</span>
                <span className="modal__hd-badge">HD</span>
              </div>
              <p className="modal__description">{movie.description}</p>
            </div>

            <div className="modal__info-side">
              {movie.cast && (
                <div className="modal__detail">
                  <span className="modal__detail-label">Cast: </span>
                  <span className="modal__detail-value">{movie.cast?.join(', ') || 'N/A'}</span>
                </div>
              )}
              <div className="modal__detail">
                <span className="modal__detail-label">Genres: </span>
                <span className="modal__detail-value">{movie.genres.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Similar Section */}
          <div className="modal__section">
            <h3 className="modal__section-title">About {movie.title}</h3>
            <div className="modal__about-grid">
              <div className="modal__about-item">
                <span className="modal__about-label">Director:</span>
                <span className="modal__about-value">Not Available</span>
              </div>
              <div className="modal__about-item">
                <span className="modal__about-label">Genres:</span>
                <span className="modal__about-value">{movie.genres.join(', ')}</span>
              </div>
              <div className="modal__about-item">
                <span className="modal__about-label">Maturity Rating:</span>
                <span className="modal__about-value">
                  <span className="modal__rating-badge">{movie.rating}</span>
                  Recommended for ages {movie.rating === 'R' ? '17+' : movie.rating === 'PG-13' ? '13+' : '10+'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

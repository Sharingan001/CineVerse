import { useState, useEffect } from 'react';
import { FiPlay, FiInfo } from 'react-icons/fi';
import './HeroBanner.css';

export default function HeroBanner({ movie, onMoreInfo }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = movie.backdrop;
    img.onload = () => setLoaded(true);
  }, [movie.backdrop]);

  return (
    <section className={`hero ${loaded ? 'hero--loaded' : ''}`} id="hero-banner">
      {/* Background Image */}
      <div className="hero__backdrop">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="hero__backdrop-img"
        />
        <div className="hero__gradient-bottom" />
        <div className="hero__gradient-left" />
        <div className="hero__vignette" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__meta-top">
          <span className="hero__badge">CINEVERSE ORIGINAL</span>
        </div>

        <h1 className="hero__title">{movie.title}</h1>

        <div className="hero__meta">
          <span className="hero__match">{movie.match} Match</span>
          <span className="hero__year">{movie.year}</span>
          <span className="hero__rating-badge">{movie.rating}</span>
          <span className="hero__duration">{movie.duration}</span>
        </div>

        <p className="hero__description">{movie.description}</p>

        <div className="hero__genres">
          {movie.genres.map((g, i) => (
            <span key={g}>
              {g}
              {i < movie.genres.length - 1 && <span className="hero__genre-dot">•</span>}
            </span>
          ))}
        </div>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--play" id="hero-play-btn">
            <FiPlay className="hero__btn-icon" />
            <span>Play</span>
          </button>
          <button
            className="hero__btn hero__btn--info"
            id="hero-info-btn"
            onClick={() => onMoreInfo && onMoreInfo(movie)}
          >
            <FiInfo className="hero__btn-icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}

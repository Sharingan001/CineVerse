import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MovieCard from '../MovieCard/MovieCard';
import './ContentRow.css';

export default function ContentRow({ title, movies, onMovieClick }) {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 20);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  const scroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(updateArrows, 400);
  };

  return (
    <section className="content-row" id={`row-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h2 className="content-row__title">
        {title}
        <span className="content-row__explore">
          Explore All <FiChevronRight />
        </span>
      </h2>

      <div className="content-row__slider-container">
        {/* Left Arrow */}
        {showLeft && (
          <button
            className="content-row__arrow content-row__arrow--left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <FiChevronLeft />
          </button>
        )}

        {/* Slider */}
        <div
          className="content-row__slider"
          ref={sliderRef}
          onScroll={updateArrows}
        >
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              onClick={() => onMovieClick && onMovieClick(movie)}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {showRight && (
          <button
            className="content-row__arrow content-row__arrow--right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <FiChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}

import { useState, useCallback } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ContentRow from '../../components/ContentRow/ContentRow';
import MovieModal from '../../components/MovieModal/MovieModal';
import { FEATURED, categories } from '../../data/movies';
import './HomePage.css';

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  return (
    <div className="home-page" id="home-page">
      <HeroBanner movie={FEATURED} onMoreInfo={handleMovieClick} />

      <div className="home-page__content">
        {categories.map((category) => (
          <ContentRow
            key={category.id}
            title={category.title}
            movies={category.movies}
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

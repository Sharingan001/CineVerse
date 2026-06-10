import { useState, useCallback } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import { myList } from '../../data/movies';
import './MyListPage.css';

export default function MyListPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleCloseModal = useCallback(() => setSelectedMovie(null), []);

  return (
    <div className="mylist-page" id="mylist-page">
      <h1 className="mylist-page__title">My List</h1>
      <p className="mylist-page__subtitle">
        {myList.length} title{myList.length !== 1 ? 's' : ''}
      </p>

      {myList.length > 0 ? (
        <div className="mylist-page__grid">
          {myList.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      ) : (
        <div className="mylist-page__empty">
          <div className="mylist-page__empty-icon">+</div>
          <h2>Your list is empty</h2>
          <p>Add movies and TV shows to keep track of what you want to watch.</p>
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

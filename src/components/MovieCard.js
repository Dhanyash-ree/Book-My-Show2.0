import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const getButton = (status) => {
    switch (status) {
      case 'Book Now':
        return <button className="btn btn-primary">Book Now</button>;
      case 'Watch Trailer':
        return <button className="btn btn-secondary">Watch Trailer</button>;
      case 'Coming Soon':
        return <button className="btn btn-disabled" disabled>Coming Soon</button>;
      default:
        return null;
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h5 className="movie-title">{movie.title}</h5>
        <p className="movie-rating">⭐ {movie.rating}</p>
        {getButton(movie.status)}
      </div>
    </div>
  );
};

export default MovieCard;

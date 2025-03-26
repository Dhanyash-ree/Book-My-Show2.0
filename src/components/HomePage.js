import React from 'react';
import HeroCarousel from './HeroCarousel';
import MovieCard from './MovieCard'; // A new component for individual movie cards
import './HomePage.css'; // Ensure you create and style this CSS file

const movies = [
  // Sample movie data
  {
    title: 'Dune: Part Two',
    image: 'path_to_dune_image.jpg',
    rating: 8.9,
    status: 'Book Now',
  },
  {
    title: 'Kung Fu Panda 4',
    image: 'path_to_kfp4_image.jpg',
    rating: 7.5,
    status: 'Watch Trailer',
  },
  {
    title: 'Avengers: Secret Wars',
    image: 'path_to_avengers_image.jpg',
    rating: 9.0,
    status: 'Coming Soon',
  },
  // Add more movies as needed
];

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="movies-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import "./MoviesPage.css";
const moviesData = [
    {
      title: "Dune: Part Two",
      genre: "Sci-Fi",
      release: "2025-03-15",
      rating: 8.9,
      price: 250,
      poster: "/images/Dune.jpg",
    },
    {
      title: "Kung Fu Panda 4",
      genre: "Animation",
      release: "2025-04-05",
      rating: 7.5,
      price: 200,
      poster: "/images/Kung_fu.jpg",
    },
    {
      title: "Godzilla x Kong: The New Empire",
      genre: "Action",
      release: "2025-05-12",
      rating: 7.8,
      price: 300,
      poster: "/images/Godzilla-Kong.jpeg",
    },
    {
      title: "Deadpool & Wolverine",
      genre: "Superhero",
      release: "2025-07-26",
      rating: 9.1,
      price: 350,
      poster: "/images/DPandWol.jpg",
    },
    {
      title: "Avengers: Secret Wars",
      genre: "Superhero",
      release: "2025-11-06",
      rating: 9.0,
      price: 400,
      poster: "/images/Avengers.jpg",
    },
    {
      title: "John Wick 5",
      genre: "Action",
      release: "2026-03-20",
      rating: 8.7,
      price: 320,
      poster: "/images/JW5.jpg",
    },
    {
      title: "Final Destination: Bloodlines",
      genre: "Horror",
      release: "2025-10-31",
      rating: 7.2,
      price: 280,
      poster: "/images/Bloodlines.jpg",
    },
    {
      title: "The Electric State",
      genre: "Sci-Fi",
      release: "2025-03-14",
      rating: 8.5,
      price: 260,
      poster: "/images/The Electric State.jpg",
    },
    {
      title: "The Mandalorian and Grogu",
      genre: "Sci-Fi",
      release: "2026-05-22",
      rating: 8.8,
      price: 300,
      poster: "/images/The Mandalorian and Grogu.jpg",
    },
    {
      title: "Masters of the Universe",
      genre: "Adventure",
      release: "2026-06-05",
      rating: 7.9,
      price: 270,
      poster: "/images/MOU.jpg",
    },
    {
      title: "Toy Story 5",
      genre: "Animation",
      release: "2026-06-20",
      rating: 8.3,
      price: 220,
      poster: "/images/TS5.jpg",
    },
    {
      title: "Super Mario World Movie 2",
      genre: "Family",
      release: "2026-04-03",
      rating: 7.6,
      price: 210,
      poster: "/images/SM.jpg",
    },
    
  ];
  

// Get unique genres
const genres = ["All", ...new Set(moviesData.map((movie) => movie.genre))];

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // Filter movies based on genre
  const filteredMovies = moviesData.filter(
    (movie) => selectedGenre === "All" || movie.genre === selectedGenre
  );

  // Sort movies by rating or price
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  return (
    <div className="movies-page-container">
      <h2>🎬 Movies Now Showing</h2>

      {/* Filter & Sort Controls */}
      <div className="filters">
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="rating">⭐ Rating</option>
          <option value="price">💲 Price (Low to High)</option>
        </select>
      </div>

      {/* Movie Cards Grid */}
      <div className="movies-grid">
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p className="genre-tag">{movie.genre}</p>
                <div className="details">
                  <p>📅 {movie.release}</p>
                  <p>⭐ {movie.rating}</p>
                  <p>🎟️ ₹{movie.price}</p>
                </div>
                <button className="btn btn-danger">Book Now</button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="no-movies">No movies found!</h3>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;

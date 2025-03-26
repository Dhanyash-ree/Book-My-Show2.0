import React, { useState } from "react";
import "./Movie.css";

// Sample movie data
const moviesData = [
  { title: "Dune: Part Two", genre: "Sci-Fi", release: "2025-03-15", rating: 8.9, price: 250 },
  { title: "Kung Fu Panda 4", genre: "Animation", release: "2025-04-05", rating: 7.5, price: 200 },
  { title: "Godzilla x Kong: The New Empire", genre: "Action", release: "2025-05-12", rating: 7.8, price: 300 },
  { title: "Deadpool & Wolverine", genre: "Superhero", release: "2025-07-26", rating: 9.1, price: 350 },
  { title: "Avengers: Secret Wars", genre: "Superhero", release: "2025-11-06", rating: 9.0, price: 400 },
  { title: "John Wick 5", genre: "Action", release: "2026-03-20", rating: 8.7, price: 320 },
  { title: "The Batman: Part II", genre: "Superhero", release: "2025-10-18", rating: 8.5, price: 310 },
  { title: "The Flash 2", genre: "Superhero", release: "2025-09-10", rating: 7.4, price: 280 },
  { title: "Mission: Impossible 8", genre: "Action", release: "2026-07-23", rating: 8.9, price: 400 },
  { title: "Oppenheimer", genre: "Drama", release: "2023-07-21", rating: 9.2, price: 250 },
  { title: "Joker: Folie à Deux", genre: "Thriller", release: "2025-12-15", rating: 9.3, price: 350 },
  { title: "Aquaman: The Lost Kingdom", genre: "Superhero", release: "2025-12-25", rating: 7.8, price: 270 },
  // Add more movies as needed
];

// Extract unique genres for filtering
const genres = ["All", ...new Set(moviesData.map((movie) => movie.genre))];

const Movie= () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // Filter movies based on selected genre
  const filteredMovies = moviesData.filter(
    (movie) => selectedGenre === "All" || movie.genre === selectedGenre
  );

  // Sort movies based on selected criteria
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  return (
    <div className="movies-page-container">
      <h2>🎬 Movies Listing</h2>

      {/* Filter and Sort Controls */}
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

      {/* Movies Table */}
      <table className="movies-table">
        <thead>
          <tr>
            <th>Movie Name 🎬</th>
            <th>Genre 🔥</th>
            <th>Release Date 📅</th>
            <th>Rating ⭐</th>
            <th>Ticket Price 🎟️</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.length > 0 ? (
            sortedMovies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.release}</td>
                <td>{movie.rating}</td>
                <td>₹{movie.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No movies found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Movie;

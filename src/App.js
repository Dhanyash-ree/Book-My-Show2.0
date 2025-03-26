import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookMyShowNavbar from './components/BookMyShowNavbar';
import MoviesPage from './components/MoviesPage';
import Movie from './components/Movie';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  
  return (
    <Router>
      <div>
        <BookMyShowNavbar />
        <Routes>
        <Route path="/" element={<HomePage />} /> 
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie" element={<Movie/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

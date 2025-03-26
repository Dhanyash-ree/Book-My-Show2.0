import React from 'react';
import { Link } from 'react-router-dom';
import './BookMyShowNavbar.css';

const BookMyShowNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://assets-in.bmscdn.com/webin/common/icons/logo.svg"
            alt="BookMyShow Logo"
            width="150"
            height="40"
          />
        </Link>

        {/* City Selector */}
        <div className="d-flex align-items-center me-auto city-selector">
          <span className="text-light fw-bold me-1">Mangalore</span>
          <i className="bi bi-chevron-down text-light" aria-hidden="true"></i>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/movie">Movie</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/plays">Plays</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/offers">Offers</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="d-flex search-bar" role="search">
          <label htmlFor="navbar-search" className="visually-hidden">Search</label>
          <input
            id="navbar-search"
            className="form-control me-2"
            type="search"
            placeholder="Search for Movies, Events, Plays..."
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit" aria-label="Search">
            🔍
          </button>
        </form>

        {/* Sign In Button */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-light ms-3" to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BookMyShowNavbar;

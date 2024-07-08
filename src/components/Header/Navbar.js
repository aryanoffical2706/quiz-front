
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          QuizEase
        </Link>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create-quiz" className="nav-link">Create Quiz</Link>
          <Link to="/quiz-list" className="nav-link">Quiz List</Link>
          <Link to="/quiz/help" className="helper">Help</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

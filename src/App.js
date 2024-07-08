
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateQuiz from './components/Quiz/createQuiz';
import QuizList from './components/Quiz/QuizList';
import TakeQuiz from './components/Quiz/TakeQuiz';
import QuizResult from './components/Quiz/QuizResult';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import Help from './components/Help/Help';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/quiz-list" element={<QuizList />} />
            <Route path="/quiz/:id" element={<TakeQuiz />} />
            <Route path="/quiz/:id/result" element={<QuizResult />} />
            <Route path="/quiz/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

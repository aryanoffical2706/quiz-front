
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function QuizResult() {
  const location = useLocation();
  const { score, total } = location.state;

  const getEmoji = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return '😄';
    if (percentage >= 50) return '😊';
    return '😢';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Quiz Result</h2>
      <p style={styles.score}>Your score: {score}/{total} {getEmoji(score, total)}</p>
      <Link to="/" style={styles.button}>Go to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  score: {
    fontSize: '20px',
    marginBottom: '40px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default QuizResult;

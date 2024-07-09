
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('https://quizmaker-aryan.onrender.com/api/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '80%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '20px' }}>Quiz_Zone</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {quizzes.map((quiz) => (
            <li key={quiz._id} style={{ margin: '20px 0', fontSize: '1.5em' }}>
              <Link 
                to={`/quiz/${quiz._id}`} 
                style={{
                  textDecoration: 'none',
                  padding: '10px 20px',
                  display: 'inline-block',
                  border: '2px solid #000',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  color: '#000',
                  backgroundColor: '#fff'
                }}
              >
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuizList;

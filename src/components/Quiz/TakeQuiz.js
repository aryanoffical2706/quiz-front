
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`https://quizmaker-aryan.onrender.com/api/quizzes/${id}`);
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(''));
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://quizmaker-aryan.onrender.com/api/quizzes/submit', { quizId: id, answers });
      setScore(response.data.score);
      navigate(`/quiz/${id}/result`, { state: { score: response.data.score, total: quiz.questions.length } });
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>{quiz.title}</h2>
      {quiz.questions.map((question, index) => (
        <div key={index} style={styles.questionContainer}>
          <p style={styles.questionText}>{question.questionText}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} style={styles.optionContainer}>
              <label style={styles.optionLabel}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={optionIndex}
                  onChange={(e) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = parseInt(e.target.value, 10);
                    setAnswers(newAnswers);
                  }}
                  style={styles.radioInput}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit" style={styles.button}>Submit Quiz</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
  },
  questionContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  },
  optionContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  optionLabel: {
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  radioInput: {
    marginRight: '10px',
    transform: 'scale(1.5)',
  },
  button: {
    padding: '10px 20px',
    margin: '20px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default TakeQuiz;

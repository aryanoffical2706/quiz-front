
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateQuiz.css';

function CreateQuiz() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizCreated, setQuizCreated] = useState(false);
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...questions];
    const { name, value } = event.target;
    const [field, optionIndex] = name.split('.');

    if (field === 'options') {
      values[index].options[optionIndex] = value;
    } else {
      values[index][field] = value;
    }

    setQuestions(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://quizmaker-aryan.onrender.com/api/quizzes/create', { title, questions });
      console.log('Quiz created:', response.data);
      setQuizCreated(true);
      alert('Quiz created successfully!');
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };

  const handleCreateAnotherQuiz = () => {
    setTitle('');
    setQuestions([]);
    setQuizCreated(false);
  };

  return (
    <div className="create-quiz-container">
      {quizCreated ? (
        <div className="success-container">
          <h2>Quiz created successfully!</h2>
          <button onClick={handleCreateAnotherQuiz} className="create-quiz-button">Create Another Quiz</button>
          <button onClick={() => navigate('/')} className="create-quiz-button">Go to Home</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="create-quiz-form">
          <h2>Create a Quiz</h2>
          <input
            type="text"
            placeholder="Quiz Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="create-quiz-input"
          />
          {questions.map((question, index) => (
            <div key={index} className="question-container">
              <input
                type="text"
                placeholder="Question Text"
                name="questionText"
                value={question.questionText}
                onChange={(e) => handleInputChange(index, e)}
                className="create-quiz-input"
              />
              {question.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  name={`options.${optionIndex}`}
                  value={option}
                  onChange={(e) => handleInputChange(index, e)}
                  className="create-quiz-input"
                />
              ))}
              <input
                type="number"
                placeholder="Correct Answer (index)"
                name="correctAnswer"
                value={question.correctAnswer}
                onChange={(e) => handleInputChange(index, e)}
                className="create-quiz-input"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion} className="create-quiz-button">Add Question</button>
          <button type="submit" className="create-quiz-button">Create Quiz</button>
        </form>
      )}
    </div>
  );
}

export default CreateQuiz;

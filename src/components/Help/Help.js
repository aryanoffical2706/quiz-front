
import React from 'react';
import "./help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h2 className="help-title">How to Use Our Website</h2>
      <div className="steps-grid">
        <div className="step-box">
          <span>Create a Quiz</span>
          <div className="arrow">↓</div>
          <span>Set Title & Questions</span>
          <div className="arrow">↓</div>
          <span>Set Time</span>
        </div>
        <div className="step-box">
          <span>Take a Quiz</span>
          <div className="arrow">↓</div>
          <span>Select Quiz</span>
          <div className="arrow">↓</div>
          <span>Answer Questions</span>
        </div>
        <div className="step-box">
          <span>View Results</span>
          <div className="arrow">↓</div>
          <span>See Score</span>
          <div className="arrow">↓</div>
          <span>Track Progress</span>
        </div>
      </div>
    </div>
  );
}

export default Help;

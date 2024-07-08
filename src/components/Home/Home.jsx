
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Start your Journey</h1>
      <div className="button-grid">
        <Link to="/create-quiz" className="home-button">Create Quiz</Link>
        <Link to="/quiz-list" className="home-button">Take Quiz</Link>
      </div>
      <div className="about-section">
        <h2>Why You Should Give Quizzes</h2>
        <ul className="benefits-list">
          <li>Active Learning: Quizzes engage learners actively, requiring them to recall information, apply concepts, and think critically.</li>
          <li>Retrieval Practice: Taking quizzes involves retrieving information from memory, which reinforces learning and strengthens neural pathways.</li>
          <li>Identifying Gaps: Quizzes help identify knowledge gaps, guiding learners to focus on specific areas needing further study or clarification.</li>
          <li>Immediate Feedback: Quizzes provide instant feedback, allowing learners to gauge their understanding and learn from mistakes.</li>
          <li>Preparation for Assessments: Regular quizzing prepares learners for larger assessments, reducing anxiety and improving exam performance.</li>
          <li>Motivation and Engagement: Quizzes motivate learners with immediate feedback and the opportunity to track progress, enhancing engagement.</li>
        </ul>
      </div>
      <div className="why-use-section">
        <h2>Why You Should Use Our Website</h2>
        <ul className="benefits-list">
          <li>Privacy-Focused: We prioritize user privacy and do not collect unnecessary data.</li>
          <li>User-Friendly Interface: Our website offers an intuitive interface for creating, taking, and managing quizzes.</li>
          <li>Customization Options: Customize quizzes with various question types, time limits, and scoring options.</li>
          <li>Accessibility: Access quizzes anytime, anywhere, from any device with internet access.</li>
          <li>Enhanced Learning Experience: Utilize quizzes to enhance learning retention and knowledge application.</li>
          <li>Community Engagement: Engage with a community of learners, educators, and quiz enthusiasts.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

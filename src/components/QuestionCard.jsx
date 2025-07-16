import React from 'react';

function QuestionCard({ question, options, onAnswer }) {
  return (
    <div className="card shadow-lg p-4 mb-4" style={{ maxWidth: 500, width: '100%' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4 display-6">{question}</h2>
        <ul className="list-unstyled">
          {options.map(option => (
            <li key={option} className="mb-3">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => onAnswer(option)}
                style={{ transition: '0.2s' }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard; 
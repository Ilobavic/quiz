import React from 'react';

function Score({ score, total, missedQuestions }) {
  return (
    <div className="alert alert-success text-center mt-5" role="alert" style={{ maxWidth: 400 }}>
      <h1 className="display-4 mb-3">
        <span role="img" aria-label="trophy">🏆</span>
      </h1>
      <h2>Your score:</h2>
      <span className="badge bg-success fs-3">{score} / {total}</span>
      {missedQuestions && missedQuestions.length > 0 && (
        <div className="mt-4 text-start">
          <h4>Questions you missed:</h4>
          <ul>
            {missedQuestions.map((q, idx) => (
              <li key={idx} className="mb-3">
                <strong>Q:</strong> {q.question}<br />
                <span style={{ color: 'red' }}><strong>Your answer:</strong> {q.userAnswer}</span><br />
                <span style={{ color: 'green' }}><strong>Correct answer:</strong> {q.correctAnswer}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Score; 
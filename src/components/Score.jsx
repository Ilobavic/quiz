import React from 'react';

function Score({ score, total }) {
  return (
    <div className="alert alert-success text-center mt-5" role="alert" style={{ maxWidth: 400 }}>
      <h1 className="display-4 mb-3">
        <span role="img" aria-label="trophy">🏆</span>
      </h1>
      <h2>Your score:</h2>
      <span className="badge bg-success fs-3">{score} / {total}</span>
    </div>
  );
}

export default Score; 
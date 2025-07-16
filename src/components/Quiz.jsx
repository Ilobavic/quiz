import React, { useState } from 'react';
import questions from './Questions.jsx';
import QuestionCard from './QuestionCard';
import Score from './Score';

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' }}
    >
      <div className="w-100 d-flex flex-column align-items-center">
        {finished ? (
          <Score score={score} total={questions.length} />
        ) : (
          <QuestionCard
            question={questions[current].question}
            options={questions[current].options}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz; 
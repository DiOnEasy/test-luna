import React from 'react';

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {total}.
      </p>
    </div>
  );
};

export default Result;

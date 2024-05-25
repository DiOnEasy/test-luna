import React from "react";
import { Link } from "react-router-dom";

interface ResultProps {
  score: number;
  total: number;
  time: string | null;
}

const Result: React.FC<ResultProps> = ({ time, score, total }) => {
  return (
    <div className="flex items-center justify-center pt-40 flex-col py-3">
      <h1 className="text-3xl">Quiz Complete!</h1>
      <p className="text-2xl">
        You scored {score} out of {total}.
      </p>
      <p className="text-xl">Time of passing the quiz - {time}</p>
      <Link to='/' className="hover:text-onHoverLink mt-10">Home page</Link>
    </div>
  );
};

export default Result;

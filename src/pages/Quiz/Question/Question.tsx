import React from 'react';
import { IQuestion } from '../../../models/Quiz';

interface QuestionProps {
  question: IQuestion;
  onAnswer: (selectedOption: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option) => (
          <li key={option}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

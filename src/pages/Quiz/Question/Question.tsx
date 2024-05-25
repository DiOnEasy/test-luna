import React from "react";
import { IQuestion } from "../../../models/Quiz";

interface QuestionProps {
  question: IQuestion;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div>
      <h2 className="text-xl mb-3">{question.question}</h2>
      {question.options.map((option, index) => (
        <div className="bg-bgColor p-3 mb-1" key={index}>
          <label className="w-full flex gap-3 block hover:cursor-pointer">
            <input
              type="checkbox"
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
            />
            <span>{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;

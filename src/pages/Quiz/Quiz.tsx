import React, { useEffect, useState } from "react";
import { IQuestion, IQuiz } from "../../models/Quiz";
import Result from "./Result/Result";
import Question from "./Question/Question";
import { getQuizList } from "../../utils/getQuizList";
import { useParams } from "react-router-dom";
import { Stopwatch } from "../../components/Stopwatch/Stopwatch";

export const Quiz: React.FC = () => {
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { id } = useParams();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    getQuizList("quizList")
      .then((data) => {
        if (data) {
          const quiz = data?.find((item) => item.id === id) || null;
          setQuiz(quiz);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleQuizComplete = (score: number) => {
    setTotalScore(score);
  };

  const handleSubmit = () => {
    if (selectedOption === quiz?.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (quiz?.questions && nextQuestionIndex < quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
    } else {
      handleQuizComplete(score);
    }
  };

  return (
    <div>
      {totalScore === null && quiz ? (
        <>
          <h1 className="text-3xl mb-5">Quiz: {quiz.title}</h1>
          <h2>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </h2>
          <Question
            question={quiz.questions[currentQuestionIndex]}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
          />
          <div className="flex justify-between px-5">
            <button
              className="bg-green px-4 py-2 rounded-lg mt-1 hover:cursor-pointer"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit
            </button>
            <Stopwatch setTime={setTime} />
          </div>
        </>
      ) : totalScore === null && !quiz ? (
        <div>Loading...</div>
      ) : (
        quiz && <Result time={time} score={score} total={quiz.questions.length} />
      )}
    </div>
  );
};

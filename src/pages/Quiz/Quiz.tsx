import React, { useEffect, useState } from "react";
import { IQuestion, IQuiz } from "../../models/Quiz";
import Result from "./Result/Result";
import Question from "./Question/Question";
import { getQuizList } from "../../utils/getQuizList";
import { useParams } from "react-router-dom";

export const Quiz: React.FC = () => {
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const { id } = useParams();

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
  }, []);

  const handleQuizComplete = (score: number) => {
    setTotalScore(score);
  };

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quiz?.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (quiz?.questions && nextQuestionIndex < quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      handleQuizComplete(score);
    }
  };

  return (
    <div>
      {totalScore === null && quiz ? (
        <>
          <h1>{quiz.title}</h1>
          <Question
            question={quiz.questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      ) : totalScore === null && !quiz ? (<div>Loading...</div>) : (
        quiz && <Result score={score} total={quiz.questions.length} />
      )}
    </div>
  );
};

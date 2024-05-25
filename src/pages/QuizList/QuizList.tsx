import React, { useEffect, useState } from "react";
import { IQuiz } from "../../models/Quiz";
import { Link } from "react-router-dom";
import { getQuizList } from "../../utils/getQuizList";

export const QuizList: React.FC = () => {
  const [quizList, setQuizList] = useState<IQuiz[] | null>(null);
  // const quizList: IQuiz[] = [
  //   {
  //     title: "fsdlkjfsldfj",
  //     questions: [
  //       {
  //         question: "What is the capital of France?",
  //         options: ["Paris", "London", "Rome", "Berlin"],
  //         answer: "Paris",
  //       },
  //       {
  //         question: "What is 2 + 2?",
  //         options: ["3", "4", "5", "6"],
  //         answer: "4",
  //       },
  //     ],
  //     id: "123",
  //   },
  //   {
  //     title: "fsdlkjfsldfj",
  //     questions: [
  //       {
  //         question: "What is the capital of France?",
  //         options: ["Parasdis", "Londasdon", "Rodasme", "Berdsalin"],
  //         answer: "Rodasme",
  //       },
  //       {
  //         question: "What is 2 + 2?",
  //         options: ["3", "4", "5", "6"],
  //         answer: "4",
  //       },
  //     ],
  //     id: "123312",
  //   },
  // ];

  useEffect(() => {
    getQuizList("quizList")
      .then((data) => {
        setQuizList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        {quizList ? (
          quizList.map((quiz, index) => {
            return <Link to={`quiz/${quiz.id}`}>{quiz.title}</Link>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

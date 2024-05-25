import React, { useEffect, useState } from "react";
import { IQuiz } from "../../models/Quiz";
import { Link } from "react-router-dom";
import { getQuizList } from "../../utils/getQuizList";

export const QuizList: React.FC = () => {
  const [quizList, setQuizList] = useState<IQuiz[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    getQuizList("quizList")
      .then((data) => {
        setQuizList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" p-5">
      <h1 className="text-xl text-center mb-3">All quizes</h1>
      <div className="grid grid-cols-3 gap-5 justify-around	">
        {!loading && quizList ? (
          quizList.map((quiz, index) => {
            return (
              <div className=" bg-bgColor rounded-md flex justify-between gap-5 items-center p-5">
                <Link
                  className="w-full hover:text-onHoverLink"
                  to={`quiz/${quiz.id}`}
                >
                  {quiz.title}
                </Link>
                <Link
                  className="flex items-center gap-1 hover:text-onHoverLink"
                  to={`/edit-quiz/${quiz.id}`}
                >
                  <span>Edit</span>
                  <img className="h-4" src="/edit-icon.svg" alt="" />
                </Link>
              </div>
            );
          })
        ) : !loading && !quizList ? (
          <div>No quizzes found</div>
        ) : <div>Loading...</div>}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { IQuiz } from "../../models/Quiz";
import { Link } from "react-router-dom";
import { getQuizList } from "../../utils/getQuizList";

export const QuizList: React.FC = () => {
  const [quizList, setQuizList] = useState<IQuiz[] | null>(null);

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
            return (
              <div>
                <Link style={{ margin: "10px" }} to={`quiz/${quiz.id}`}>
                  {quiz.title}
                </Link>
                <Link to={`/edit-quiz/${quiz.id}`}>
                  <img style={{ width: "30px" }} src="/edit-icon.svg" alt="" />
                </Link>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

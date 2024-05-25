import { IQuiz } from "../models/Quiz";

export const getQuizList = (key: string): Promise<IQuiz[] | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = localStorage.getItem(key);
        if (data) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`No data found for key: ${key}`));
        }
      }, 500);
    });
  };
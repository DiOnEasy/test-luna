export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IQuiz {
  title: string;
  questions: IQuestion[];
  id: string;
}

// export interface IQuizList {
//   quizList: IQuiz[];
// }

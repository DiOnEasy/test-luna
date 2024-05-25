import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IQuestion, IQuiz } from "../../models/Quiz";

export const ManageQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    if (id) {
      const savedQuizzes = localStorage.getItem("quizList");
      if (savedQuizzes) {
        const quizzes: IQuiz[] = JSON.parse(savedQuizzes);
        const quizToEdit = quizzes.find((quiz) => quiz.id === id);
        if (quizToEdit) {
          setTitle(quizToEdit.title);
          setQuestions(quizToEdit.questions);
        }
      }
    }
  }, [id]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", options: [""], answer: "" }]);
  };

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = questions.map((q, qIndex) =>
      qIndex === index ? { ...q, question: value } : q
    );
    setQuestions(newQuestions);
  };

  const handleOptionChange = (
    qIndex: number,
    optIndex: number,
    value: string
  ) => {
    const newQuestions = questions.map((q, questionIndex) =>
      questionIndex === qIndex
        ? {
            ...q,
            options: q.options.map((opt, optionIndex) =>
              optionIndex === optIndex ? value : opt
            ),
          }
        : q
    );
    setQuestions(newQuestions);
  };

  const handleAddOption = (qIndex: number) => {
    const newQuestions = questions.map((q, questionIndex) =>
      questionIndex === qIndex ? { ...q, options: [...q.options, ""] } : q
    );
    setQuestions(newQuestions);
  };

  const handleRemoveOption = (qIndex: number, optIndex: number) => {
    const newQuestions = questions.map((q, questionIndex) =>
      questionIndex === qIndex
        ? {
            ...q,
            options: q.options.filter(
              (_, optionIndex) => optionIndex !== optIndex
            ),
          }
        : q
    );
    setQuestions(newQuestions);
  };

  const handleSaveQuiz = () => {
    const savedQuizzes = localStorage.getItem("quizList");
    let quizzes: IQuiz[] = savedQuizzes ? JSON.parse(savedQuizzes) : [];

    if (id) {
      // Update existing quiz
      quizzes = quizzes.map((quiz) =>
        quiz.id === id ? { ...quiz, title, questions } : quiz
      );
    } else {
      // Add new quiz
      const newQuiz: IQuiz = { id: Date.now().toString(), title, questions };
      quizzes.push(newQuiz);
    }

    localStorage.setItem("quizList", JSON.stringify(quizzes));
    alert("Quiz saved successfully!");
    navigate("/");
  };

  const handleDeleteQuiz = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (confirmDelete && id) {
      const savedQuizzes = localStorage.getItem("quizList");
      if (savedQuizzes) {
        const quizzes: IQuiz[] = JSON.parse(savedQuizzes);
        const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
        localStorage.setItem("quizList", JSON.stringify(updatedQuizzes));
        alert("Quiz deleted successfully!");
        navigate("/");
      }
    }
  };
  const handleAnswerSelect = (qIndex: number, optIndex: number) => {
    const newQuestions = questions.map((q, questionIndex) =>
      questionIndex === qIndex ? { ...q, answer: q.options[optIndex] } : q
    );
    setQuestions(newQuestions);
  };

  return (
    <div className="flex flex-col items-center pb-5 ">
      <h1 className="text-center text-xl">
        {id ? "Edit Quiz" : "Add New Quiz"}
      </h1>
      <div className="flex items-center gap-3 mb-3">
        <label>Title:</label>
        <input
          className="border-black border-b-2"
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {questions.map((q, qIndex) => (
        <div className="p-3" key={qIndex}>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Question:</label>
            <input
              className="border-black border-2"
              type="text"
              placeholder="Enter question"
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            />
            <button
              className="text-onHoverLink"
              onClick={() => handleRemoveQuestion(qIndex)}
            >
              Remove Question
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Options</h3>
            {q.options.map((option, optIndex) => (
              <div className="flex justify-between g" key={optIndex}>
                <input
                  className="border-gray border-2 m-1"
                  type="text"
                  placeholder={`Option ${optIndex + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(qIndex, optIndex, e.target.value)
                  }
                />
                <input
                  type="radio"
                  name={`answer-${qIndex}`}
                  checked={q.answer === option}
                  onChange={() => handleAnswerSelect(qIndex, optIndex)}
                />
                <button
                  className="bg-onHoverLink p-1 rounded-lg"
                  onClick={() => handleRemoveOption(qIndex, optIndex)}
                >
                  Remove Option
                </button>
              </div>
            ))}
            <button
              className="bg-bgColor"
              onClick={() => handleAddOption(qIndex)}
            >
              Add Option
            </button>
          </div>

          <hr />
        </div>
      ))}
      <div className="flex flex-col gap-1 mt-3 text-xl">
        <button onClick={handleAddQuestion}>Add Question</button>
        <button onClick={handleSaveQuiz}>
          {id ? "Save Changes" : "Save Quiz"}
        </button>
        {id && (
          <button onClick={handleDeleteQuiz} style={{ color: "red" }}>
            Delete Quiz
          </button>
        )}
      </div>
    </div>
  );
};

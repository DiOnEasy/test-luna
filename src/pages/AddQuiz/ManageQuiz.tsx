import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IQuestion, IQuiz } from '../../models/Quiz';


export const ManageQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    if (id) {
      const savedQuizzes = localStorage.getItem('quizList');
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
    setQuestions([...questions, { question: '', options: [''], answer: '' }]);
  };

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = questions.map((q, qIndex) => (
      qIndex === index ? { ...q, question: value } : q
    ));
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex: number, optIndex: number, value: string) => {
    const newQuestions = questions.map((q, questionIndex) => (
      questionIndex === qIndex
        ? { ...q, options: q.options.map((opt, optionIndex) => (
            optionIndex === optIndex ? value : opt
          )) }
        : q
    ));
    setQuestions(newQuestions);
  };

  const handleAddOption = (qIndex: number) => {
    const newQuestions = questions.map((q, questionIndex) => (
      questionIndex === qIndex ? { ...q, options: [...q.options, ''] } : q
    ));
    setQuestions(newQuestions);
  };

  const handleRemoveOption = (qIndex: number, optIndex: number) => {
    const newQuestions = questions.map((q, questionIndex) => (
      questionIndex === qIndex ? { ...q, options: q.options.filter((_, optionIndex) => optionIndex !== optIndex) } : q
    ));
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (qIndex: number, value: string) => {
    const newQuestions = questions.map((q, questionIndex) => (
      questionIndex === qIndex ? { ...q, answer: value } : q
    ));
    setQuestions(newQuestions);
  };

  const handleSaveQuiz = () => {
    const savedQuizzes = localStorage.getItem('quizList');
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

    localStorage.setItem('quizList', JSON.stringify(quizzes));
    alert('Quiz saved successfully!');
    navigate('/');
  };

  const handleDeleteQuiz = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this quiz?');
    if (confirmDelete && id) {
      const savedQuizzes = localStorage.getItem('quizList');
      if (savedQuizzes) {
        const quizzes: IQuiz[] = JSON.parse(savedQuizzes);
        const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
        localStorage.setItem('quizList', JSON.stringify(updatedQuizzes));
        alert('Quiz deleted successfully!');
        navigate('/');
      }
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Quiz' : 'Add New Quiz'}</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {questions.map((q, qIndex) => (
        <div key={qIndex}>
          <input
            type="text"
            placeholder="Enter question"
            value={q.question}
            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
          />
          <button onClick={() => handleRemoveQuestion(qIndex)}>Remove Question</button>
          <div>
            <h3>Options</h3>
            {q.options.map((option, optIndex) => (
              <div key={optIndex}>
                <input
                  type="text"
                  placeholder={`Option ${optIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                />
                <button onClick={() => handleRemoveOption(qIndex, optIndex)}>Remove Option</button>
              </div>
            ))}
            <button onClick={() => handleAddOption(qIndex)}>Add Option</button>
          </div>
          <div>
            <label>Answer: </label>
            <input
              type="text"
              placeholder="Enter answer"
              value={q.answer}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
            />
          </div>
          <hr />
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSaveQuiz}>{id ? 'Save Changes' : 'Save Quiz'}</button>
      {id && <button onClick={handleDeleteQuiz} style={{ color: 'red' }}>Delete Quiz</button>}
    </div>
  );
};


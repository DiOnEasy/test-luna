import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizList } from "./pages/QuizList/QuizList";
import { ManageQuiz } from "./pages/ManageQuiz/ManageQuiz";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/new-quiz" element={<ManageQuiz />} />
          <Route path="/edit-quiz/:id" element={<ManageQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

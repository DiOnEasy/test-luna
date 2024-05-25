import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizList } from "./pages/QuizList/QuizList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:id" element={<Quiz />} />

      </Routes>
    </Router>
  );
}

export default App;

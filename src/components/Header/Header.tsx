import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div>
      <div>
        <Link to="/">Home page</Link>
        <Link to="/new-quiz">Add new quiz</Link>
      </div>
    </div>
  );
};

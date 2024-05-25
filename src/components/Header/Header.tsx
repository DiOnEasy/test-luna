import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center align-center gap-5 text-xl py-5 bg-bgColor">
        <Link className="hover:text-onHoverLink" to="/">Home page</Link>
        <Link className="hover:text-onHoverLink" to="/new-quiz">Add new quiz</Link>
      </div>
    </div>
  );
};

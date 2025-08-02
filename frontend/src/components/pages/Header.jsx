import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-accent text-success-content py-2 px-4 shadow-md">
      <div className="text-3xl font-bold">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Application
        </Link>
      </div>
    
    </div>
  );
};

export default Header;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("jwt");
        navigate("/");
    };

    return (
         <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="max-w-xl mx-auto p-8 bg-base-100 rounded-xl shadow-lg">
            <h1 
            className="text-3xl font-bold mb-4 text-accent text-center"
            >Welcome to the Home Page!</h1>
            <p
            className="text-lg mb-6 text-center text-base-content"
            >You are logged in.</p>
             <div className="flex justify-center gap-4">
            <Link to="/demo">
                <button className="btn btn-accent">Go to Demo Page</button>
            </Link>
            <button onClick={logout} className="btn btn-warning">Logout</button>
            </div>
        </div>
        </div>
    );
};

export default HomePage;
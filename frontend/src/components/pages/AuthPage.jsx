import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';        
    

const AuthPage = () => {
     const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSuccess = (token) => {
    localStorage.setItem("jwt", token);
    navigate("/home");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
      <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? "Login" : "Register"}</h2>
      {isLogin ? (
        <Login onSuccess={handleSuccess} />
      ) : (
        <Register onSuccess={handleSuccess} />
      )}
       <div className="mt-4 text-center">
      <p className="text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>
        <button 
        className="btn btn-accent btn-sm mt-2"
        onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </button>
      
       </div>
        </div>
    </div>
  </div>
  )
}

export default AuthPage

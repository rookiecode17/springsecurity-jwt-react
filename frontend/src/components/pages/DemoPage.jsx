import React, { useEffect, useState } from "react";
import api from '../../service/AuthService';
import { useNavigate } from "react-router-dom";


const DemoPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/demo")
      .then(res => setMessage(res.data))
      .catch(err => {
        if (err.response?.status === 401) {
          navigate("/"); // 如果未授权，跳回登录页
        } else {
          setError("Failed to load demo data.");
        }
      });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
        <div className="bg-base-200 rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Demo Page (Protected)</h2>
      {message && <p className="text-success text-center mb-2">{message}</p>}
      {error && <p className="text-error text-center">{error}</p>}
      </div>
    </div>
  );
};

export default DemoPage;

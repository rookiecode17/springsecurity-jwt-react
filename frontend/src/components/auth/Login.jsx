import React from 'react'
import api from '../../service/AuthService';
import { useState } from 'react';

const Login = ({ onSuccess }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/authenticate", formData);
      onSuccess(res.data.token);
      setError("");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
      className="input input-bordered w-full"
      name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
      <input 
      className="input input-bordered w-full"
      name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br />
      <button 
      className="btn btn-accent w-full"
      type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Login

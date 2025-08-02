import React from 'react'
import { useState } from 'react';
import api from '../../service/AuthService';

const Register = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: ""
  });
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
      const res = await api.post("/api/auth/register", formData);
      console.log("Registration successfully with token: ", res.data.token);
      onSuccess(res.data.token);
      setError("");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
      className="input input-bordered w-full"
      name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} required /><br />
      <input
      className="input input-bordered w-full"
      name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required /><br />
      <input
      className="input input-bordered w-full"
      name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
      <input 
      className="input input-bordered w-full"
      name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br />
      <button 
      className="btn btn-accent w-full"
      type="submit">Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}

export default Register

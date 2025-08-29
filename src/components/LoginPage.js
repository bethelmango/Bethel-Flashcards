import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add actual login logic later
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1>Welcome to FlashSmart</h1>
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
};

export default LoginPage;

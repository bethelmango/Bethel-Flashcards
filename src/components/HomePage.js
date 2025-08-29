import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Flashcard Dashboard</h1>
      <button onClick={() => navigate("/edit")}>Edit Mode</button>
      <button onClick={() => navigate("/study")}>Study Mode</button>
      <button onClick={() => navigate("/quiz")}>Quiz Mode</button>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import "./QuizMode.css";

const QuizMode = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch("/api/flashcards")
      .then((res) => res.json())
      .then((data) => setFlashcards(data));
  }, []);

  const handleNext = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  if (!flashcards.length) return <div>Loading...</div>;

  const current = flashcards[index];

  return (
    <div className="quiz-container">
      <h2>Quiz Mode</h2>
      <p>Question: {current.question}</p>
      {showAnswer && <p>Answer: {current.answer}</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide" : "Show"} Answer
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuizMode;

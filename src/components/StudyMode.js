import React, { useEffect, useState } from "react";
import Flashcard from "./Deck/Flashcard";
import "./StudyMode.css";

const StudyMode = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch("/api/flashcards")
      .then((res) => res.json())
      .then((data) => setFlashcards(data));
  }, []);

  return (
    <div className="study-container">
      <h2>Study Mode</h2>
      {flashcards.map((card) => (
        <Flashcard key={card.id} flashcard={card} />
      ))}
    </div>
  );
};

export default StudyMode;

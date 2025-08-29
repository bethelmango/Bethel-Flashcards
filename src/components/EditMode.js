import React, { useState } from "react";
import "./EditMode.css";

const EditMode = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = async () => {
    await fetch("/api/flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });

    setQuestion("");
    setAnswer("");
    // Optionally update UI or fetch list again
  };

  return (
    <div className="edit-container">
      <h2>Edit Flashcards</h2>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleAdd}>Add Flashcard</button>
    </div>
  );
};

export default EditMode;

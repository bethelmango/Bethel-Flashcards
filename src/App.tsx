import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import EditMode from "./components/EditMode";
import StudyMode from "./components/StudyMode";
import QuizMode from "./components/QuizMode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/edit" element={<EditMode />} />
        <Route path="/study" element={<StudyMode />} />
        <Route path="/quiz" element={<QuizMode />} />
      </Routes>
    </Router>
  );
}

export default App;

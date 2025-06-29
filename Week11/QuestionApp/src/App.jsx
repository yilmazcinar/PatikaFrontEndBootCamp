import React, { useState } from "react";
import Welcome from "./Components/Welcome";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import questions from "./Components/Qustions";
import "./App.css";

function App() {
  const [appState, setAppState] = useState("welcome");
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setAppState("quiz");
  };

  const handleComplete = (finalAnswers) => {
    setAnswers(finalAnswers);
    setAppState("results");
  };

  return (
    <div className="App">
      {appState === "welcome" && <Welcome onStart={handleStart} />}
      {appState === "quiz" && <Quiz onComplete={handleComplete} />}
      {appState === "results" && (
        <Results answers={answers} questions={questions} />
      )}
    </div>
  );
}

export default App;

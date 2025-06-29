import React, { useState, useEffect } from "react";
import questions from "./Qustions";

const Quiz = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  useEffect(() => {
    setShowOptions(false);
    const timeout = setTimeout(() => {
      setShowOptions(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion(null);
    }
  }, [timer]);

  const handleNextQuestion = (answer) => {
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    setAnswers([
      ...answers,
      { question: questions[currentQuestionIndex].question, answer, isCorrect },
    ]);
    setTimer(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Soru {currentQuestionIndex + 1}</h2>
      <img src={`/images/${currentQuestion.media}`} alt="Question Image" />
      <p>{currentQuestion.question}</p>
      <div className="options-container">
        {showOptions &&
          currentQuestion.options.map((option) => (
            <button key={option} onClick={() => handleNextQuestion(option)}>
              {option}
            </button>
          ))}
      </div>
      <div className="timer">Kalan Süre: {timer}s</div>
    </div>
  );
};

export default Quiz;

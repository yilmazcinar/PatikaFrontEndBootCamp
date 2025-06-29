import React from "react";

const Results = ({ answers, questions }) => {
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const incorrectAnswers = answers.filter(
    (answer) => !answer.isCorrect && answer.answer !== null
  ).length;
  const emptyAnswers = answers.filter(
    (answer) => answer.answer === null
  ).length;

  return (
    <div className="results-container">
      <h2>Test Sonuçları</h2>
      <p>Doğru Cevaplar: {correctAnswers}</p>
      <p>Yanlış Cevaplar: {incorrectAnswers}</p>
      <p>Boş Bırakılanlar: {emptyAnswers}</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <p>
              <strong>Soru:</strong> {answer.question}
            </p>
            <p>
              <strong>Sizin Cevabınız:</strong> {answer.answer || "Boş"}
            </p>
            <p>
              <strong>Doğru Cevap:</strong> {questions[index].answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

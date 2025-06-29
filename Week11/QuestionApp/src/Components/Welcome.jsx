import React from "react";

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1>Bilgi Yarışmasına Hoş Geldiniz!</h1>
      <p>
        Bu testte 10 soru bulunmaktadır. Her soru için 30 saniyeniz var. İlk 4
        saniye cevap şıkları görünmeyecektir. Hazır olduğunuzda teste
        başlayabilirsiniz.
      </p>
      <button onClick={onStart}>Teste Başla</button>
    </div>
  );
};

export default Welcome;

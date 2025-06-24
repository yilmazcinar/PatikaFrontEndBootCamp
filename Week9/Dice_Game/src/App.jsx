import { useState } from "react";
import "./App.css";

// Zar resimlerini import ediyoruz
import dice1 from "./images/images/dice1.png";
import dice2 from "./images/images/dice2.png";
import dice3 from "./images/images/dice3.png";
import dice4 from "./images/images/dice4.png";
import dice5 from "./images/images/dice5.png";
import dice6 from "./images/images/dice6.png";

function App() {
  // State tanımlamaları - React Hook'ları
  const [playerName, setPlayerName] = useState("Player 1"); // Oyuncu adı
  const [isEditing, setIsEditing] = useState(false); // İsim düzenleme modu açık/kapalı
  const [tempName, setTempName] = useState(""); // Geçici isim (düzenleme sırasında)
  const [player1Dice, setPlayer1Dice] = useState(1); // Oyuncu zarının değeri (1-6)
  const [player2Dice, setPlayer2Dice] = useState(1); // PC zarının değeri (1-6)
  const [isRolling, setIsRolling] = useState(false); // Zar atılma durumu (animasyon kontrolü)
  const [gameResult, setGameResult] = useState(""); // Oyun sonucu mesajı
  const [gameStats, setGameStats] = useState({
    wins: 0, // Kazanma sayısı
    losses: 0, // Kaybetme sayısı
    draws: 0, // Berabere sayısı
  });

  // Zar resimlerini dizi halinde saklıyoruz (indeks 0-5, değer 1-6)
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  // Ana zar atma fonksiyonu
  const rollDice = () => {
    // Eğer zaten zar atılıyorsa, tekrar atmayı engelle
    if (isRolling) return;

    // Zar atma durumunu başlat ve önceki sonucu temizle
    setIsRolling(true);
    setGameResult("");

    // 3 saniye boyunca zarları sürekli değiştir (animasyon efekti)
    // Her 100ms'de bir rastgele zar değeri göster
    const interval = setInterval(() => {
      setPlayer1Dice(Math.floor(Math.random() * 6) + 1);
      setPlayer2Dice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // 3 saniye sonra final sonuçları belirle
    setTimeout(() => {
      clearInterval(interval); // Animasyonu durdur

      // Final zar değerlerini rastgele belirle
      const finalPlayer1 = Math.floor(Math.random() * 6) + 1;
      const finalPlayer2 = Math.floor(Math.random() * 6) + 1;

      // Son değerleri state'e kaydet
      setPlayer1Dice(finalPlayer1);
      setPlayer2Dice(finalPlayer2);

      // Sonucu karşılaştır ve kazananı belirle
      let result = "";
      if (finalPlayer1 > finalPlayer2) {
        result = "Kazandınız! 🎉";
        setGameStats((prev) => ({ ...prev, wins: prev.wins + 1 }));
      } else if (finalPlayer1 < finalPlayer2) {
        result = "Kaybettiniz! 😔";
        setGameStats((prev) => ({ ...prev, losses: prev.losses + 1 }));
      } else {
        result = "Berabere! 🤝";
        setGameStats((prev) => ({ ...prev, draws: prev.draws + 1 }));
      }

      setGameResult(result);
      setIsRolling(false); // Zar atma işlemini sonlandır
    }, 3000); // 3 saniye bekle
  };

  // Oyuncu ismini düzenleme fonksiyonu
  const handleNameEdit = () => {
    if (isEditing) {
      // Düzenleme modundaysa, ismi kaydet
      if (tempName.trim()) {
        // Boş değilse
        setPlayerName(tempName.trim()); // Başındaki/sonundaki boşlukları temizle
      }
      setIsEditing(false); // Düzenleme modundan çık
      setTempName(""); // Geçici ismi temizle
    } else {
      // Düzenleme moduna geç
      setIsEditing(true);
      setTempName(playerName); // Mevcut ismi geçici alana kopyala
    }
  };

  // Oyunu sıfırlama fonksiyonu - tüm istatistikleri ve değerleri başa döndür
  const resetGame = () => {
    setGameStats({ wins: 0, losses: 0, draws: 0 }); // İstatistikleri sıfırla
    setGameResult(""); // Sonuç mesajını temizle
    setPlayer1Dice(1); // Zarları başlangıç değerine döndür
    setPlayer2Dice(1);
  };

  return (
    <div className="game-container">
      {/* Oyun başlığı */}
      <h1 className="game-title">🎲 Zar Oyunu 🎲</h1>

      {/* İstatistik gösterimi - kazanma/kaybetme/berabere sayıları */}
      <div className="stats-container">
        <div className="stat">
          <span className="stat-label">Galibiyet:</span>
          <span className="stat-value wins">{gameStats.wins}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Mağlubiyet:</span>
          <span className="stat-value losses">{gameStats.losses}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Berabere:</span>
          <span className="stat-value draws">{gameStats.draws}</span>
        </div>
      </div>

      {/* Ana oyuncu alanı - iki oyuncu karşılıklı */}
      <div className="players-container">
        {/* Oyuncu 1 (Kullanıcı) */}
        <div className="player">
          <div className="player-name-container">
            {/* İsim düzenleme: input veya text gösterimi */}
            {isEditing ? (
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleNameEdit()} // Enter'a basılınca kaydet
                className="name-input"
                autoFocus // Otomatik odaklan
              />
            ) : (
              <h2 className="player-name">{playerName}</h2>
            )}
            {/* Düzenleme butonu - zar atılırken devre dışı */}
            <button
              onClick={handleNameEdit}
              className="edit-btn"
              disabled={isRolling}
            >
              {isEditing ? "✓" : "✏️"}
            </button>
          </div>
          {/* Oyuncu 1'in zarı */}
          <div className="dice-container">
            <img
              src={diceImages[player1Dice - 1]} // Dizi 0 tabanlı, zar 1-6 arası
              alt={`Dice ${player1Dice}`}
              className={`dice ${isRolling ? "rolling" : ""}`} // Animasyon için CSS sınıfı
            />
          </div>
          <div className="dice-value">{player1Dice}</div>
        </div>

        {/* VS yazısı */}
        <div className="vs-container">
          <span className="vs-text">VS</span>
        </div>

        {/* Oyuncu 2 (PC) */}
        <div className="player">
          <h2 className="player-name">PC (Bilgisayar)</h2>
          {/* PC'nin zarı */}
          <div className="dice-container">
            <img
              src={diceImages[player2Dice - 1]}
              alt={`Dice ${player2Dice}`}
              className={`dice ${isRolling ? "rolling" : ""}`}
            />
          </div>
          <div className="dice-value">{player2Dice}</div>
        </div>
      </div>

      {/* Oyun sonucu gösterimi - sadece oyun bittiğinde görünür */}
      {gameResult && (
        <div
          className={`result ${
            gameResult.includes("Kazandınız")
              ? "win" // Kazanma durumu için yeşil stil
              : gameResult.includes("Kaybettiniz")
              ? "lose" // Kaybetme durumu için kırmızı stil
              : "draw" // Berabere durumu için sarı stil
          }`}
        >
          {gameResult}
        </div>
      )}

      {/* Kontrol butonları */}
      <div className="button-container">
        {/* Ana zar atma butonu */}
        <button
          onClick={rollDice}
          disabled={isRolling} // Zar atılırken devre dışı
          className={`roll-btn ${isRolling ? "rolling" : ""}`}
        >
          {isRolling ? "Zarlar Atılıyor..." : "Zar At!"}
        </button>

        {/* Sıfırlama butonu */}
        <button onClick={resetGame} className="reset-btn" disabled={isRolling}>
          Sıfırla
        </button>
      </div>
    </div>
  );
}

export default App;

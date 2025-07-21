import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ffeb3b");
  const [searchTerm, setSearchTerm] = useState("");

  const colors = [
    { name: "Sarı", value: "#ffeb3b" },
    { name: "Mavi", value: "#2196f3" },
    { name: "Yeşil", value: "#4caf50" },
    { name: "Pembe", value: "#e91e63" },
    { name: "Turuncu", value: "#ff9800" },
    { name: "Mor", value: "#9c27b0" },
  ];

  const addNote = () => {
    if (newNote.trim() !== "") {
      const note = {
        id: Date.now(),
        text: newNote,
        color: selectedColor,
        date: new Date().toLocaleDateString("tr-TR"),
      };
      setNotes([...notes, note]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Not Uygulaması</h1>

      <div className="note-form">
        <div className="color-selector">
          <label>Renk Seçin:</label>
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`color-btn ${
                  selectedColor === color.value ? "selected" : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Notunuzu buraya yazın..."
          className="note-textarea"
          style={{ borderColor: selectedColor }}
        />

        <button onClick={addNote} className="add-btn">
          Not Ekle
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Notlarda ara..."
          className="search-input"
        />
      </div>

      <div className="notes-container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="note-item"
              style={{ backgroundColor: note.color }}
            >
              <div className="note-content">
                <p>{note.text}</p>
                <small className="note-date">{note.date}</small>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="delete-btn"
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p className="no-notes">
            {searchTerm
              ? "Arama kriterine uygun not bulunamadı."
              : "Henüz not eklenmemiş."}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

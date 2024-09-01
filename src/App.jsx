import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function saveElement(note) {
    setNotes( (prev) => {
      return [...prev, note] ;
    });
    }

  return (
    <div>
      <Header />
      <CreateArea onSave={saveElement} />
      {notes.map((note, index) => {
        return <Note title={note.title} content={note.content} id={index} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
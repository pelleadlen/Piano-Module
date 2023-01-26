import "./Piano.css";
import * as Tone from "tone";
import { useEffect, useState } from "react";

const notes = [
  { note: "C4", class: "white-key", keyCode: 65 },
  { note: "C#4", class: "black-key", keyCode: 87 },
  { note: "D4", class: "white-key", keyCode: 83 },
  { note: "D#4", class: "black-key", keyCode: 69 },
  { note: "E4", class: "white-key", keyCode: 68 },
  { note: "F4", class: "white-key", keyCode: 70 },
  { note: "F#4", class: "black-key", keyCode: 84 },
  { note: "G4", class: "white-key", keyCode: 71 },
  { note: "G#4", class: "black-key", keyCode: 89 },
  { note: "A4", class: "white-key", keyCode: 72 },
  { note: "A#4", class: "black-key", keyCode: 85 },
  { note: "B4", class: "white-key", keyCode: 74 },
  { note: "C5", class: "white-key", keyCode: 75 },
];

const Piano = () => {
  const [activeNote, setActiveNote] = useState("");

  const pianos = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    // Release is the amount of time it takes for the sound to fade out after the note is released
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  function play(note) {
    setActiveNote(note);
    Tone.loaded().then(() => {
      // Use the triggerAttackRelease method to play the sound
      pianos.triggerAttackRelease(`${note}`, 4);
    });
    console.log(note);
  }

  useEffect(() => {
    // Listen for keydown events on the document
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function handleKeyPress(e) {
    // Find the note that matches the keyCode
    const note = notes.find((n) => n.keyCode === e.keyCode);
    if (note) {
      play(note.note);
    }
  }

  return (
    <>
      <div className="piano">
        {notes.map((note, index) => (
          <div
            key={index}
            onClick={() => play(note.note)}
            className={`${note.class} ${
              note.note === activeNote ? "active" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Piano;

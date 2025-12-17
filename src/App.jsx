import { useState } from "react";
import "./App.css";
import LetterContent from "./components/LetterContent";
import QRGenerator from "./components/QRGenerator";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="app-container">
      {!showLetter ? (
        <div className="landing-page">
          <div className="content-wrapper">
            <div className="header">
              <h1 className="title">Cosas que nunca te dije</h1>
              <p className="subtitle">Una carta guardada en el corazón</p>
            </div>

            <div className="decorative-element"></div>

            <div className="intro-section">
              <p className="intro-text">
                Hay momentos en la vida donde las palabras se quedan atrapadas
                en el pecho. Esta "carta" es un intento de liberar esos
                sentimientos. Porque siento que mereces entender que no fuiste
                un error en mi vida.
              </p>
            </div>

            <button className="cta-button" onClick={() => setShowLetter(true)}>
              Leer la carta
            </button>

            <div className="decorative-footer">
              <span className="flower">✿</span>
              <span className="flower">❀</span>
              <span className="flower">✿</span>
            </div>
          </div>
        </div>
      ) : (
        <LetterContent onClose={() => setShowLetter(false)} />
      )}
      <QRGenerator />
    </div>
  );
}

export default App;

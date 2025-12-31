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
              <h1 className="title">¡Lo que te amo!</h1>
              <p className="subtitle">Una carta guardadadita en el corazón</p>
            </div>

            <div className="decorative-element"></div>

            <div className="intro-section">
              <p className="intro-text">
                Hola Maura, antes de que abras esta carta, quiero que sepas que
                te amo. Eres una de las personas mas importantes en mi vida y
                cada momento que hemos compartido este año, es increible para
                mi. Te atesoro en mi corazon y con ello todas las experiencias
                que nos han llevado a ser quienes somos. Con mucho amor y
                dedicacion, espero que disfrutes estas palabras y este viaje a
                traves de nuestros recuerdos juntos.
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

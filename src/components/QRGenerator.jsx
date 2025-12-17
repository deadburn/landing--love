import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const QRGenerator = () => {
  const [showQR, setShowQR] = useState(false);
  const currentURL = window.location.origin;

  const downloadQR = () => {
    const svg = document.querySelector(".qr-code svg");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "codigo-qr.png";
      link.click();
    };

    image.src = "data:image/svg+xml;base64," + btoa(svg.outerHTML);
  };

  return (
    <div className="qr-container">
      <button
        className="qr-toggle-btn"
        onClick={() => setShowQR(!showQR)}
        title="Mostrar código QR"
      >
        📱 QR
      </button>

      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="qr-close" onClick={() => setShowQR(false)}>
              ✕
            </button>

            <h3>Escanea este código</h3>
            <div className="qr-code">
              <QRCodeSVG
                value={currentURL}
                size={280}
                level="H"
                includeMargin={true}
                fgColor="#5C4033"
                bgColor="#FFF8F0"
              />
            </div>

            <p className="qr-url">{currentURL}</p>

            <button className="qr-download-btn" onClick={downloadQR}>
              ⬇️ Descargar QR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;

import { useState } from "react";
import PhotoCarousel from "./PhotoCarousel";

const LetterContent = ({ onClose }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const letterText = `Dear Maura,

Desde el amor que tengo por ti, me atrevo a decir que eres la mas bonita coincidencia que la vida nos ha concedido.
A pesar que se que hay mucho por solucionar, y mucho por hablar, hoy prefiero hacerme de oidos sordos y ojos ciegos, para 
ver hacia atras y darnos cuenta que no solo en este año sino de mucho antes, hemos estado constuyendo de a pasitos, la vida 
que creemos merecer. Lo cual nos involucra a uno en la vida del otro. Te amo, y espero que este sea el fin del año, 
y el inicio de muchos mas juntos.`;

  // AQUÍ VAS A PONER LAS RUTAS DE TUS FOTOS CON COMENTARIOS
  const photos = [
    {
      url: "/photos/imagen1.jpg",
      comment: "Una de las tantas veces que te he visto ser ganadora",
    },
    {
      url: "/photos/imagen2.jpg",
      comment: "Uno de esos viajes que nos recuperaron",
    },
    {
      url: "/photos/imagen3.jpg",
      comment:
        "Un viaje muy loco en el que te pude mostrar la tierrita que me vio crecer y ser muy felices",
    },
    {
      url: "/photos/imagen4.jpg",
      comment: "Una noche inolvidable por la intimidad que logramos",
    },
    {
      url: "/photos/imagen5.jpg",
      comment:
        "Una de esas noches de risas interminables (Fuimos a lokillo jaja)",
    },
    {
      url: "/photos/imagen6.jpg",
      comment:
        "Uno de los cumpleaños en los que me senti mas querido gracias a ti",
    },
    {
      url: "/photos/imagen7.jpg",
      comment:
        "No es la mejor foto, pero la espontaneidad de ese momento no la podemos comparar",
    },
    {
      url: "/photos/imagen8.jpg",
      comment:
        "No hay palabras suficientes que me ayuden a describir todo lo que logro este viaje en mi y en nosotros",
    },
    {
      url: "/photos/imagen9.jpg",
      comment:
        "Una foto que me recuerda que desde el inicio nos unio el movimiento, lo cual nos ha definido toda nuestra relacion",
    },
    {
      url: "/photos/imagen10.jpg",
      comment: "Nunca...",
    },
    {
      url: "/photos/imagen11.jpg",
      comment: " Pares...",
    },
    {
      url: "/photos/imagen12.jpg",
      comment:
        "De correr y perseguir tus metas.. Eres una mujer tan fuerte y capaz que nada te queda grande. NADA. Y esta foto me dice que siempre estaré a tu lado en tus locuras",
    },
    {
      url: "/photos/imagen13.jpg",
      comment: "Una foto del entorno que nos vio nacer como pareja (El gym)",
    },
    {
      url: "/photos/imagen14.jpg",
      comment:
        "El dia que conocimos el que se convertiria en mi sitio de brunch favorito",
    },
    {
      url: "/photos/imagen15.jpg",
      comment:
        "Uno de esos tantos dias que te segui la cuerda y me animaste a salir de mi zona de confort",
    },
    {
      url: "/photos/imagen16.jpg",
      comment:
        "Por ultimo pero no menos importante.. Feliz Navidad, mi cielo. Feliz termino de año que nos vio caer tanto y rezo por que nuestro inicio de año sea brillante de la mano del amor que nos tenemos.",
    },
    // Agrega más fotos siguiendo este formato
  ];

  return (
    <>
      <div className="letter-container">
        <div className="letter-header">
          <button className="back-button" onClick={onClose}>
            ← Atrás
          </button>
          <h2 className="letter-title">Tu Carta</h2>
          <div style={{ width: "100px" }}></div>
        </div>

        <div className="letter-content-wrapper">
          <div className="letter-box">
            <p className="letter-text">{letterText}</p>
            <div className="letter-signature">— Con amor infinito, Gabriel</div>

            {photos.length > 0 && (
              <button
                className="photo-button"
                onClick={() => setShowCarousel(true)}
              >
                Ver Momentos Juntos
              </button>
            )}
          </div>
        </div>
      </div>

      <PhotoCarousel
        isOpen={showCarousel}
        onClose={() => setShowCarousel(false)}
        photos={photos}
      />
    </>
  );
};

export default LetterContent;

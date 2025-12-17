import { useState } from "react";
import PhotoCarousel from "./PhotoCarousel";

const LetterContent = ({ onClose }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const letterText = `Dear Maura,

Hola, se que es extraño que llegues a recibir esto de mi, como dijiste hoy 16/12/2025 no tiene sentido
que hagamos cosas ahora que nunca nos atrevimos a hacer cuando eramos pareja. Sin embargo siento que es
mi deber aclarar y poner en tu mente un poco de calma, pues en mi vida fuiste mucho mas que solo
lo malo que pasamos. El simple hecho de que recibas esto es una prueba de que tu fuiste un motor en mi vida.
Lamento muchisimo que lo nuestro no haya resultado como ninguno de los dos esperaba. 

No tienes idea del amor que siento por ti, siento que entre todo buscamos tantas formas de amarnos que hay muchas de estas que aun persisten.
Me duele muchisimo tener que decir adios a una relacion en la que trabajamos mutuamente tanto tiempo y que evolucionó de tal manera.Tengo en 
este momento muchisimo por sanar, y se que en ti deje muchisimas mas cicatrices de las que puedes ver ahora y lo siento, esto nunca se trato de quien 
hizo a daño a quien o de buscar culpables. Como yo lo veo se nos acabo el amor para buscarnos y elegirnos cada dia. Quiero que hagamos un recuento de lo que vivimos y aunque 
probablemete esto evoque muchas lagrimas como las que tengo en estos momentos en los ojos, quiero hacerte ver el bien que eres capaz de causar. Y espero que puedas tomar este
como mi cuadrito el que nunca terminé porque no termine de conectar con mi parte artistica `;

  // AQUÍ VAS A PONER LAS RUTAS DE TUS FOTOS CON COMENTARIOS
  const photos = [
    {
      url: "/public/imagen1.jpg",
      comment: "Una de las tantas veces que te he visto ser ganadora",
    },
    {
      url: "/public/imagen2.jpg",
      comment: "Uno de esos viajes que nos recuperaron",
    },
    {
      url: "/public/imagen3.jpg",
      comment:
        "Un viaje muy loco en el que te pude mostrar la tierrita que me vio crecer",
    },
    {
      url: "/public/imagen4.jpg",
      comment: "Una noche inolvidable por la intimidad que logramos",
    },
    {
      url: "/public/imagen5.jpg",
      comment:
        "Una de esas noches de risas interminables (Fuimos a lokillo jaja)",
    },
    {
      url: "/public/imagen6.jpg",
      comment:
        "Uno de los cumpleaños en los que me senti mas querido gracias a ti",
    },
    {
      url: "/public/imagen7.jpg",
      comment:
        "No es la mejor foto, pero la espontaneidad de ese momento no la podemos comparar",
    },
    {
      url: "/public/imagen8.jpg",
      comment:
        "No hay palabras suficientes que me ayuden a describir todo lo que logro este viaje en mi y en nosotros",
    },
    {
      url: "/public/imagen9.jpg",
      comment:
        "Una foto que me recuerda que desde el inicio nos unio el movimiento, lo cual nos definio por gran parte de la relacion",
    },
    {
      url: "/public/imagen10.jpg",
      comment: "Nunca...",
    },
    {
      url: "/public/imagen11.jpg",
      comment: " Pares...",
    },
    {
      url: "/public/imagen12.jpg",
      comment:
        "De correr y perseguir tus metas.. Eres una mujer tan fuerte y capaz que nada te queda grande. NADA",
    },
    {
      url: "/public/imagen13.jpg",
      comment: "Una foto del entorno que nos vio nacer como pareja (El gym)",
    },
    {
      url: "/public/imagen14.jpg",
      comment:
        "El dia que conocimos el que se convertiria en mi sitio de brunch favorito (Se que ya no sera igual)",
    },
    {
      url: "/public/imagen15.jpg",
      comment:
        "Uno de esos tantos dias que te segui la cuerda y termine amandolo",
    },
    {
      url: "/public/imagen16.jpg",
      comment:
        "Por ultimo pero no menos importante.. Feliz Navidad Maura. Gracias por todo lo que me diste y enseñaste. Te deseo lo mejor del mundo.",
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
                📸 Ver Momentos Juntos
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

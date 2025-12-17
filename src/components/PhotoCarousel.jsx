import { useState } from "react";

const PhotoCarousel = ({ isOpen, onClose, photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || photos.length === 0) return null;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentIndex(index);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="carousel-overlay" onClick={onClose}>
      <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="carousel-close" onClick={onClose}>
          ✕
        </button>

        {/* Main Photo Display */}
        <div className="carousel-main">
          <div className="carousel-image-wrapper">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.url || photo}
                alt={`Foto ${index + 1}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          {photos.length > 1 && (
            <>
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={prevPhoto}
              >
                ‹
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={nextPhoto}
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Photo Comment */}
        {currentPhoto && (currentPhoto.comment || currentPhoto.caption) && (
          <div className="carousel-comment">
            <p>{currentPhoto.comment || currentPhoto.caption}</p>
          </div>
        )}

        {/* Photo Counter */}
        {photos.length > 1 && (
          <div className="carousel-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        )}

        {/* Thumbnails/Dots */}
        {photos.length > 1 && (
          <div className="carousel-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToPhoto(index)}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoCarousel;

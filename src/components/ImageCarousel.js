import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={true} // Display thumbnails (can set to false)
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status (e.g., "1/5")
        infiniteLoop={true} // Enable infinite scrolling
        autoPlay={true} // Enable autoplay
        interval={3000} // Set autoplay interval (ms)
        stopOnHover={true} // Pause on hover
        dynamicHeight={true} // Adjust height dynamically
        swipeable={true} // Enable swipe gestures
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <p className="legend">Slide {index + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

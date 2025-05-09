import React, { useState, useEffect } from 'react';
import '../styles/HeroSlider.scss';

// Mock images (in a real project, these would be in the assets folder)
const sliderImages = [
  'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  'https://images.unsplash.com/photo-1571266828278-1a0d54df378c'
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {sliderImages.map((image, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image}?auto=format&fit=crop&w=1920&q=80)`
          }}
        />
      ))}
    </div>
  );
};

export default HeroSlider; 
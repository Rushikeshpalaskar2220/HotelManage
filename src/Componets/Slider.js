import React, { useState, useEffect } from 'react';
import './Slider.css';
import chiken from './7.png';
import chiken1 from './8.png';
import chiken2 from './9.png';

const images = [
  {
    id: 1,
    src: chiken,
    alt: 'Image 1'
  },
  {
    id: 2,
    src: chiken1,
    alt: 'Image 2'
  },
  {
    id: 3,
    src: chiken2,
    alt: 'Image 3'
  },
  {
    id: 4,
    src: chiken1,
    alt: 'Image 4'
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the next image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image) => (
          <div key={image.id} className="slider-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="slider-prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="slider-next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;

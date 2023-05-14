import React from "react";
import "./ImageCarousel.css";
import Images from "../utils/Images";
import { useState, useMemo } from "react";

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const MemonizeImages = useMemo(() => Images, []);
  console.log(MemonizeImages);

  console.log(ImageCarousel);
  const nextSlide = () => {
    setCurrent(current === MemonizeImages.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? MemonizeImages.length - 1 : current - 1);
  };

  return (
    <div>
      <h2>React Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={previousSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {MemonizeImages.map(
          (item, index) =>
            current === index && (
              <div key={item} className="slide">
                <img src={item} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;

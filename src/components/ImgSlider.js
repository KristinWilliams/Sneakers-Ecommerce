import React, { useState, useEffect } from "react";
import ProductImgs from "./ProductImgs.js";

const ImgSlider = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const imgSrc = `./images/image-product-${currentImg}.jpg`;

  const incrementImg = () => {
    if (currentImg >= 1 && currentImg <= 3) {
      setCurrentImg(currentImg + 1);
      console.log(imgSrc);
    } else if (currentImg >= 4) {
      setCurrentImg(currentImg + 1);
    }
  };
  const decrementImg = () => {
    if (currentImg >= 1 && currentImg <= 4) {
      setCurrentImg(currentImg - 1);
      console.log(imgSrc);
    }
  };

  return (
    <div>
      <img className="product-img-1" src="./images/image-product-1.jpg" />
      <div className="prev-btn">
        <img src="./images/icon-previous.svg" />
      </div>
      <div className="next-btn">
        <img src="./images/icon-next.svg" />
      </div>
    </div>
  );
};

export default ImgSlider;

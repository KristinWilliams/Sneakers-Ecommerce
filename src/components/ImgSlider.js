import React, { useState } from "react";

const ImgSlider = ({
  imgSrc,
  decrementImg,
  incrementImg,
  onThumbnailClick,
  openModal,
}) => {
  return (
    <div>
      <img
        className="product-img-1"
        src={imgSrc}
        onClick={() => openModal(true)}
      />
      <div className="prev-btn mobile-hidden" onClick={decrementImg}>
        <img src="./images/icon-previous.svg" />
      </div>
      <div className="next-btn mobile-hidden" onClick={incrementImg}>
        <img src="./images/icon-next.svg" />
      </div>
      <div className="desktop-thumbnails">
        <ul>
          <li>
            <img
              src="./images/image-product-1-thumbnail.jpg"
              id="1"
              onClick={onThumbnailClick}
            />
          </li>
          <li>
            <img
              src="./images/image-product-2-thumbnail.jpg"
              id="2"
              onClick={onThumbnailClick}
            />
          </li>
          <li>
            <img
              src="./images/image-product-3-thumbnail.jpg"
              id="3"
              onClick={onThumbnailClick}
            />
          </li>
          <li>
            <img
              src="./images/image-product-4-thumbnail.jpg"
              id="4"
              onClick={onThumbnailClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImgSlider;

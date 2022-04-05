import React, { useState } from "react";

const ImageModal = ({
  imgSrc,
  decrementImg,
  incrementImg,
  onThumbnailClick,
  closeModal,
}) => {
  return (
    <>
      <div className="overlay-img-modal"></div>
      <div className="slideshow-modal">
        <div className="close-modal">
          <img
            src="./images/icon-close.svg"
            onClick={() => closeModal(false)}
          />
        </div>
        <img className="product-img-1 modal-img-large" src={imgSrc} />
        <div className="prev-btn-modal" onClick={decrementImg}>
          <img src="./images/icon-previous.svg" />
        </div>
        <div className="next-btn-modal" onClick={incrementImg}>
          <img src="./images/icon-next.svg" />
        </div>
        <div className="desktop-thumbnails modal-thumbnails">
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
    </>
  );
};

export default ImageModal;

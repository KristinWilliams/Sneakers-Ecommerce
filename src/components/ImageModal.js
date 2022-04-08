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
          <svg
            className="close"
            onClick={() => closeModal(false)}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="modal-img-arrows">
          <img className="product-img-1 modal-img-large" src={imgSrc} />
          <div className="prev-btn-modal" onClick={decrementImg}>
            <img src="./images/icon-previous.svg" />
          </div>
          <div className="next-btn-modal" onClick={incrementImg}>
            <img src="./images/icon-next.svg" />
          </div>
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

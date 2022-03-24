import React, { useState } from "react";
import style from "./style.css";
import MenuPopup from "./MenuPopup";
import ImgSlider from "./ImgSlider";

const App = function () {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="container">
      {openMenu ? <MenuPopup closeMenu={setOpenMenu} /> : null}

      <div className="mobile-nav">
        <div className="menu-logo">
          <img
            className="mobile-menu-open"
            src="./images/icon-menu.svg"
            onClick={() => setOpenMenu(true)}
          />
          <h1 className="logo">sneakers</h1>
        </div>

        <div className="cart-avatar">
          <img className="cart" src="./images/icon-cart.svg" />
          <img className="avatar" src="./images/image-avatar.png" />
        </div>
      </div>

      <div className="product-img-container">
        <img className="product-img-1" src="./images/image-product-1.jpg" />
        <div className="prev-btn">
          <img src="./images/icon-previous.svg" />
        </div>
        <div className="next-btn">
          <img src="./images/icon-next.svg" />
        </div>
      </div>

      <div className="product-content">
        <h2 className="subheader">sneaker company</h2>
        <h1 className="product-title">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-container">
          <div className="price-discount">
            <h1>$125.00</h1>
            <div className="discount">
              <h5>50%</h5>
            </div>
          </div>
          <h2>$250.00</h2>
        </div>
      </div>

      <div className="product-quantity">
        <img className="decrease-btn" src="./images/icon-minus.svg" />
        <h5>0</h5>
        <img className="increase-btn" src="./images/icon-plus.svg" />
      </div>

      <div className="add-cart-btn">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#fffff"
            fillRule="nonzero"
          />
        </svg>
        <h5>Add to cart</h5>
      </div>
    </div>
  );
};

export default App;

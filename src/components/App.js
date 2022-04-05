import React, { useState, useEffect } from "react";
import style from "./style.css";
import MenuPopup from "./MenuPopup";
import ImgSlider from "./ImgSlider";
import ProductContent from "./ProductContent";
import CartIconNum from "./CartIconNum";
import CartFilled from "./CartFilled";
import CartEmpty from "./CartEmpty";
import ImageModal from "./ImageModal";

const App = function () {
  //Open and close Mobile Menu
  const [openMenu, setOpenMenu] = useState(false);

  const [itemNum, setItemNum] = useState(0);
  let displayQuantity = itemNum;

  //Increase and decrese number of products ordered
  const increaseItem = () => {
    if (itemNum >= 0 && itemNum < 20) {
      setItemNum(itemNum + 1);
    } else if (itemNum > 20) {
      displayQuantity = 20;
    }
  };

  const decreaseItem = () => {
    if (itemNum === 0) {
      displayQuantity = 0;
    } else if (itemNum > 0 && itemNum <= 20) {
      setItemNum(itemNum - 1);
    }
  };

  //Update cart icon to reflect number of products ordered
  const [iconStatus, setIconStatus] = useState(false);

  const UpdateCartIcon = () => {
    if (displayQuantity > 0 && !iconStatus) {
      setIconStatus(true);
    }
  };

  if (displayQuantity <= 0 && iconStatus) {
    setIconStatus(false);
  }

  //Determine if cart is full or empty
  const [cartFull, setCartFull] = useState(false);
  const [cartBlank, setCartBlank] = useState(false);

  const cartFullOrEmpty = () => {
    if (displayQuantity > 0) {
      setCartFull(true);
    } else if (displayQuantity <= 0) {
      setCartBlank(true);
    }
    if (cartBlank) {
      setCartBlank(false);
    }
    if (cartFull) {
      setCartFull(false);
    }
  };

  // Slideshow functions

  const [currentImg, setCurrentImg] = useState(1);
  let imgSrc = `./images/image-product-${currentImg}.jpg`;

  const incrementImg = () => {
    if (currentImg >= 1 && currentImg <= 3) {
      setCurrentImg(currentImg + 1);
    } else if (currentImg >= 4) {
      setCurrentImg(1);
    }
  };
  const decrementImg = () => {
    if (currentImg === 1) {
      setCurrentImg(4);
    } else if (currentImg >= 1 && currentImg <= 4) {
      setCurrentImg(currentImg - 1);
    }
  };

  const onThumbnailClick = (e) => {
    setCurrentImg(e.target.id);
  };

  //Open Image Modal

  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      {modal ? (
        <ImageModal
          imgSrc={imgSrc}
          decrementImg={decrementImg}
          incrementImg={incrementImg}
          onThumbnailClick={onThumbnailClick}
          closeModal={setModal}
        />
      ) : null}

      {openMenu ? <MenuPopup closeMenu={setOpenMenu} /> : null}
      <div className="mobile-nav">
        <div className="menu-logo">
          <img
            className="mobile-menu-open mobile-hidden"
            src="./images/icon-menu.svg"
            onClick={() => setOpenMenu(true)}
          />
          <h1 className="logo">sneakers</h1>

          <div className="desktop-nav">
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="cart-avatar">
          {iconStatus ? <CartIconNum cartNum={displayQuantity} /> : null}
          <img
            className="cart"
            src="./images/icon-cart.svg"
            onClick={cartFullOrEmpty}
          />
          ;
          <img className="avatar" src="./images/image-avatar.png" />
        </div>
      </div>

      <div className="hero-container">
        <div className="product-img-container">
          {cartBlank ? <CartEmpty /> : null}
          {cartFull ? (
            <CartFilled
              itemNum={displayQuantity}
              trashcan={setItemNum}
              cartResetEmpty={setCartBlank}
              cartResetFull={setCartFull}
            />
          ) : null}
          <ImgSlider
            imgSrc={imgSrc}
            decrementImg={decrementImg}
            incrementImg={incrementImg}
            onThumbnailClick={onThumbnailClick}
            openModal={setModal}
          />
        </div>

        <div className="hero-details">
          <div className="product-content">
            <ProductContent />
          </div>

          <div className="quantity-and-add-btn">
            <div className="product-quantity">
              <img
                className="decrease-btn"
                src="./images/icon-minus.svg"
                onClick={decreaseItem}
              />
              <h5>{displayQuantity}</h5>
              <img
                className="increase-btn"
                src="./images/icon-plus.svg"
                onClick={increaseItem}
              />
            </div>

            <div className="add-cart-btn" onClick={UpdateCartIcon}>
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
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";

const CartFilled = ({ itemNum, trashcan, cartResetEmpty, cartResetFull }) => {
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-details">
        <img
          className="cart-thumbnail"
          src="../images/image-product-1-thumbnail.jpg"
        />
        <p className="name-price">
          Autumn Limited Edition... <br />
          $125.00 x {itemNum} <span>${itemNum * 125.0}.00</span>
        </p>
        <img
          className="cart-delete"
          src="../images/icon-delete.svg"
          onClick={() => {
            trashcan(0);
            cartResetEmpty(true);
            cartResetFull(false);
          }}
        />
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartFilled;

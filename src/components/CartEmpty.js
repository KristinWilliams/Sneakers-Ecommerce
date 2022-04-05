import React from "react";

const CartEmpty = () => {
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-empty">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default CartEmpty;

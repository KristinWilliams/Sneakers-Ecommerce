import React from "react";

const CartIconNum = ({ cartNum }) => {
  return (
    <>
      <div className="cart-quantity">
        <h5>{cartNum}</h5>
      </div>
    </>
  );
};

export default CartIconNum;

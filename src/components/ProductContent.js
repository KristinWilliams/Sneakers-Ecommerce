import React from "react";

const ProductContent = () => {
  return (
    <div>
      <h2 className="subheader">sneaker company</h2>
      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <div className="price-discount">
          <h1>$125.00</h1>
          <div className="discount">
            <h5>50%</h5>
          </div>
        </div>
        <div>
          <h2>$250.00</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;

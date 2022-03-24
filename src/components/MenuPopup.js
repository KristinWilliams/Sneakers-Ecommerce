import React from "react";

const MenuPopup = ({ closeMenu }) => {
  return (
    <>
      <div className="overlay hidden"></div>
      <div className="mobile-menu-popup hidden">
        <ul>
          <li>
            <img
              className="close-menu-btn"
              src="./images/icon-close.svg"
              onClick={() => closeMenu(false)}
            />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default MenuPopup;

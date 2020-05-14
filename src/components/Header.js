import React from "react";
import Logo from "../assets/logomarvel.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo Marvel" />
        </div>
      </div>
    </>
  );
};

export default Header;

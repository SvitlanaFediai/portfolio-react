import React from "react";
import "./header.css";
import Logo from "../logo/logo";
import Socials from "../socials/socials";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

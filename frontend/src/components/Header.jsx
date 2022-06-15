import React from "react";
import Logo from "../images/logo.png";
import Nav from "./Nav";
import Register from "./Register";
import Button from "./Button";
import buttonData from "../data/buttonData";
import "../style/Header.css";
import "../style/Logo.css";

function Header() {
  return (
    <section className="header-container">
      <img className="logo" src={Logo} alt="logo" />
      <Nav />
      <div className="button-container">
        <Button buttonData={buttonData[0]} />
      </div>
      <Register />
    </section>
  );
}

export default Header;

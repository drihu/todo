import React from "react";
import logo from "../images/todoisnt-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} className="header__logo" alt="logo" />
      </div>
    </header>
  );
}

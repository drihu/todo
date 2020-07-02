import React from 'react';
import logo from "../images/todoisnt-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="todoisnt-logo" />
    </header>
  );
}

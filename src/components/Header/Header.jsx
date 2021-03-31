import "./Header.css";
import React from "react";

function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={props.logo} alt="logo" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;

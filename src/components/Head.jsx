import React from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

import darkModeLogo from "../assets/images/dark.svg";

import "../styles/Head.css";

function Head({ mode, onSetMode }) {
  function handleMode() {
    onSetMode((prevMode) => !prevMode);
  }
  return (
    <div
      className={`headExtension ${mode ? "headMode_light" : "headMode_dark"}`}
    >
      <div className="logo">
        {mode ? (
          <img src={logo} alt="logo" />
        ) : (
          <img src={darkModeLogo} alt="logo" />
        )}
      </div>
      <button
        className={`mode ${mode ? "light-mode" : "dark-mode"}`}
        onClick={handleMode}
      >
        {mode ? (
          <img src={moon} alt="enter darkMode" />
        ) : (
          <img src={sun} alt="enter lightMode" />
        )}
      </button>
    </div>
  );
}

export default Head;

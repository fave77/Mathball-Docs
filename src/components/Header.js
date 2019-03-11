import React, { Component } from "react";
import logo from "../logo.png";
import "../stylesheets/header.css";
import "../stylesheets/App.css";

class Header extends Component {
  render() {
    return (
        <div className="container-fluid header-container">
              <img src={logo} className="App-logo" alt="logo" />
              <h1> Mathball </h1>
              <p>A JavaScript Library for competitive programming.</p>
              <div className = "Wrapper">
                <a href = "#mainContent" className = "start smooth-scroll"> Get Started</a>
                <a href = "#Tutorial" className = "tutorial" target = "_blank" rel = "noopener noreferrer">Take the Tutorial <i class="fas fa-angle-right"></i></a>
              </div>
        </div>
    );
  }
}

export default Header;

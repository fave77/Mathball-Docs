import React, { Component } from "react";
import "../stylesheets/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className = "footer-container">
        <div className = "container-fluid">
          <div className = "footer-links">
              <a href = "#About" target = "_blank" rel = "noopener noreferrer">Examples</a>
              <a href = "#About" target = "_blank" rel = "noopener noreferrer">About</a>
          </div>
          <div className = "para-links">
              <p>MIT License 2019 - <a href = "https://github.com/pbiswas101" target = "_blank" rel = "noopener noreferrer">Priyabrata Biswas. </a> </p>
              <p>Made with <span style= {{color:"red"}}> &hearts; </span> and JavaScript by the Mathball team!</p>
            </div>
          </div>
      </footer>
    );
  }
}
  export default Footer;

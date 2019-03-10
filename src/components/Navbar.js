import React, { Component } from 'react';
import logo from '../logo.png';
import '../stylesheets/navbar.css';

const styles= {
  searchBar: {
    position: "absolute",
    zIndex: "2",
    display: "block",
    width: "2.375rem",
    height: "2.375rem",
    lineHeight: "2.375rem",
    textAlign: "center",
    pointerEvents: "none",
    color: "#aaa",
  },
  addPadding: {
    paddingLeft: "2.375rem",
  },
};

class Navbar extends Component {
  render() {
    return (
      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} className="Header-App-logo d-none d-sm-none d-md-none d-lg-block" alt="header_logo" />
        <a className = "navbar-brand" href="../public/index.html"> Mathball </a>
      <button className = " navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
      </button>

      <div className = "collapse navbar-collapse" id="navbarSupportedContent">
        <ul className = "navbar-nav mr-auto">
          <li className = "nav-item">
            <a className = "nav-link" href="#Documentation"> Docs </a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href="#Tutorial"> Tutorial </a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href="#Blog"> Blog </a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href="#Community"> Community </a>
          </li>
          <li className = "nav-item">
          <div className="main d-none d-sm-none d-md-none d-lg-block">
              <div className="form-group has-search" style = {[styles.searchBar, styles.addPadding]}>
                <span className="fa fa-search form-control-feedback" style = {styles.searchBar}></span>
                <input type="text" className="form-control" placeholder="Search" style = {styles.addPadding}/>
              </div>
          </div>
      </li>
    </ul>
    <ul className = "navbar-nav mr-auto justify-content-end">
      <li className = "nav-item">
        <a className = "nav-link" href="#Version"> Version </a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="#Languages"> Languages </a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="https://github.com/pbiswas101/Mathball" target = "_blank" rel = "noopener noreferrer"> Github  <i class="fas fa-external-link-alt"></i></a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./Main-Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">

    <ErrorBoundary>
        <Navbar/>
    </ErrorBoundary>

    <ErrorBoundary>
        <Header/>
    </ErrorBoundary>

    <ErrorBoundary>
        <MainContent/>
    </ErrorBoundary>

    <ErrorBoundary>
        <Footer/>
    </ErrorBoundary>

      </div>
    );
  }
}

export default App;

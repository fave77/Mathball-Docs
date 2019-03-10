import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainContent from './Main-Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;

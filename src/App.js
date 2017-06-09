import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero'
import Footer from './footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;

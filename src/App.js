import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero'
import Content from './content/Content'
import Footer from './footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

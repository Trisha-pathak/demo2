import React, { Component } from 'react';
import Home from'./Introduction/Home.js';
import Intro from'./Introduction/Intro.js';
import Skills from'./Introduction/Skills.js';


class App extends Component {
  render() {
    return (
      <div>
        
        <Home />
        <Intro />
        <Skills />
       
      </div>
    );
  }
}

export default App;

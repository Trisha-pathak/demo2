import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <header>
        <div class="navbar">
          <div class="bg">
            <div class="border">
              <a>HOME</a>
              <a>ABOUT ME</a>
              <a>SKILLS</a>
              <a>EXPERIENCE</a>
              <a>EDUCATION</a>
              <a>CONTACT</a>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Intro;
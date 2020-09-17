import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <section>
        <div class="inner">
          <div class="header">
            <h1>Skills</h1>  
          </div>  
          <div class="skill">
            <div class="skill-box">
              <div class="skill-title">
                <div class="img">
                  <img src="images/html2.png" class="skill-icon"/>
                </div>
                <h3>HTML</h3>
              </div>    
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="img">
                  <img src="images/cssss.png" class="skill-icon"/>
                </div>
                <h3>CSS</h3>
              </div>    
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="img">
                  <img src="images/react.png" class="skill-icon"/>
                </div>
                <h3>REACT</h3>
              </div>    
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="img">
                  <img src="images/javascript1.png" class="skill-icon"/>
                </div>
                <h3>JavaScript</h3>
              </div>    
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="img">
                  <img src="images/git.png" class="skill-icon"/>
                </div>
                <h3>GIT</h3>
              </div>    
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>  
          </div>
        </div>
        </section>

    );
  }
}

export default Skills;
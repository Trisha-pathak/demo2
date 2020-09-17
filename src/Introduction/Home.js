import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div id="home" class="banner">
		    <div class="banner-info">
			    <div class="container">
				    <div class="col-md-4 header-left">
					    <img src="./images/pic.jpeg.jpg" alt="" class="image" />
				    </div>

				    <div class="col-md-8 header-right">
					    <h2>Hello</h2>
					    <h1>I'm TRISHA PATHAK</h1>
					    <h6>WEB DESIGNER</h6>
					    <p>This is for demo purpose only. I have created this using react.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

    );
  }
}

export default Home;
import React, { Component } from 'react';

// ________STYLING________
import './Home.css';

import HomeCarousel from './HomeCarousel';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  //Track number of hits
  // Needs to be easy to change/update banners and articles.
  render() {
    return (
      <div className="HOME">
        <div className="HOME__WELCOME">
          <h1 className="HOME__WELCOMETEXT">Welcome to Calvary Baptist Church<br/>of Monaca, Pennsylvania</h1><br/>
          <h2 className="HOME__TAGLINE">Growing a Community of Grace</h2>
        </div>
        <div className="HOME__CAROUSEL">
          <HomeCarousel />
        </div>
        <div className="HOME__INFO">
          <h5>Schedule</h5><h6>Sunday</h6><p>Sunday School: 9:45 a.m.<br/>Worship: 10:50 a.m.<br/>LIFE Groups: 6:00 p.m.</p>
          <h5>Address</h5><p>999 McClelland St<br/> Monaca, PA  15061</p>
        </div>
      </div>
    )
  }
};

export default Home;
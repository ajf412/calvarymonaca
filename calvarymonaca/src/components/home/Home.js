import React, { Component } from 'react';

// ________STYLING________
import './Home.css';

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
        <h1 className="HOME__WELCOME">Welcome to Calvary Baptist Church<br/>of Monaca, Pennsylvania</h1><br/>
        <h2 className="HOME__TAGLINE">Growing a Community of Grace</h2>
      </div>
    )
  }
};

export default Home;
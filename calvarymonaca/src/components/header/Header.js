// ________MODULES________
import React, { Component } from 'react';

// ________COMPONENTS________
import NAVBAR from '../nav-bar/NavBar';

// ________STYLING________
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="HEADER">
          <h2 className="HEADER__TITLE">Calvary Baptist Church of Monaca</h2>
          <NAVBAR/>
      </div>
    );
  }
}

export default Header;
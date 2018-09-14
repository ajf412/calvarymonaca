// ________MODULES________
import React, { Component } from 'react';

// ________COMPONENTS________
import NAVBAR from '../nav-bar/NavBar';

// ________IMAGES________
import LOGO from '../../images/logo.jpg';

// ________STYLING________
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="HEADER">
          <img className="HEADER__LOGO" src={LOGO} alt="LOGO"/>
          <NAVBAR/>
      </div>
    );
  }
}

export default Header;
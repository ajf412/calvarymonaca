import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="FOOTER">
        <div className="FOOTER__INFO">
          <p>Calvary Baptist Church<br/>999 McClelland St<br/> Monaca, PA  15061</p>
          <p>Sunday School: 9:45 a.m.<br/>Worship: 10:50 a.m.<br/>LIFE Groups: 6:00 p.m.</p>
        </div>
        <p className="FOOTER__CREATEDBY">Website Created by AJF Designs 2018</p>
        <div className="FOOTER__LOGIN">
          <p className="FOOTER__MEMBERLOGIN">Member<br/>Login</p>
          <h1>/</h1>
          <p className="FOOTER__ADMINLOGIN">Admin<br/>Login</p>
        </div>
      </div>
    );
  }
}

export default Footer;
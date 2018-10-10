import React, { Component } from 'react';
import './Footer.css';

import AdminLogin from '../admin/AdminLogin';

class Footer extends Component {
  render() {
    return (
      <div className="FOOTER">
        <div className="FOOTER__INFO">
          <p>Calvary Baptist Church<br/>999 McClelland St<br/> Monaca, PA  15061</p>
          <p>Sunday School: 9:45 a.m.<br/>Worship: 10:50 a.m.<br/>LIFE Groups: 6:00 p.m.</p>
        </div>
        <div className="FOOTER__LOGIN">
          <AdminLogin buttonLabel={"Admin Login"}/>
        </div>
      </div>
    );
  }
}

export default Footer;
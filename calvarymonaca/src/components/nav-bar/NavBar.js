import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './NavBar.css';

import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return(
      <div>
        <Navbar color="faded" light expand="sm">
          <NavbarBrand className="NAVBAR__BRAND" href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-sm" isOpen={!this.state.collapsed} navbar>
            <Nav className="sm-auto NAVBAR__NAV" navbar>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/about/">About Us</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/news/">News & Events</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/outreach/">Outreach</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/sermons/">Sermons</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/resources/">Resources</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/bible/">Bible</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink className="NAVBAR__LINK" href="/member/">Members</NavLink>
               </NavItem>
             </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
};

export default NavBar;
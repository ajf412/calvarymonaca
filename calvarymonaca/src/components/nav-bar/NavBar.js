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
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="NAVBAR">
        <Navbar className="NAVBAR__BAR" expand="md">
          <NavbarBrand className="NAVBAR__BRAND" href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto NAVBAR__NAV" navbar>
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
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/news/">News & Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/outreach/">Outreach</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sermons/">Sermons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources/">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bible/">Bible</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/member/">Members</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
};

export default NavBar;
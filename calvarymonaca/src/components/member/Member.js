import React, { Component } from 'react';

import './Member.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Member extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      activeTab: '1',
    }
  }

  toggle = (tab) => {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    if(this.state.loggedIn === false) {
    return (
      <div className="MEMBER__TABS">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Register
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Member Login</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>New Member Registration</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
    }
    else{
      return (


        <h1>MEMBER APP WILL GO HERE</h1>
        // if not logged in, put up login/reg modal
        // else show page
      )
    }
  }
};

export default Member;
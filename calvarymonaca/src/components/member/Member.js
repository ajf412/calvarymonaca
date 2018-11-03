import React, { Component } from 'react';

import './Member.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';

import MemberSignUp from './member-sign-up/MemberSignUp';

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
            <Row>
              <Col sm="6">
                <h4>Member Login</h4>
                <div>
                  <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input type="username" name="username" id="memberUsername" placeholder="username" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                    <Button color="info">Submit</Button>
                  </Form>
                </div>
              </Col>
            </Row>
            <br/>
            <MemberSignUp />

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
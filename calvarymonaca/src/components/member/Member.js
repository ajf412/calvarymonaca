import React, { Component } from 'react';

import './Member.css';
import { Button, Row, Col, Form, FormGroup, Input } from 'reactstrap';

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
      <div className="MEMBER">
            <Row>
              <Col>
                <h4>Member Login</h4>
                <div>
                  <Form inline>
                    <FormGroup>
                      <Input type="username" name="username" id="memberUsername" placeholder="username" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                    <div className="MEMBER__BUTTONS">
                      <Button color="info">Submit</Button><br/>
                      <MemberSignUp />
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
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
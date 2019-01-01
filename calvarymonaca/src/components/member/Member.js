import React, { Component } from 'react';

import './Member.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

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

  handleSubmit = () => {
    console.log("Submitting Login Info");
  }

  render() {
    if(this.state.loggedIn === false) {
    return (
      <div className="MEMBER">
        <h4>Member Login</h4>
        <div className="MEMBER__FORM">
          <Form inline className="MEMBER__INPUTS">
            <FormGroup>
              <Input type="username" name="username" id="memberUsername" placeholder="username" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
          </Form>
        </div>
        <div className="MEMBER__BUTTONS">
          <Button color="info" onClick={this.handleSubmit}>Submit</Button><br/>
          <MemberSignUp />
        </div>
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
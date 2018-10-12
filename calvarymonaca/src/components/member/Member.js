import React, { Component } from 'react';

import './Member.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
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
                    <Button>Submit</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>New Member Registration</h4>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="username" name="username" id="memberUsername" placeholder="username" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="password" name="password" id="memberPassword" placeholder="password" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="passwordConfirm" name="passwordConfirm" id="memberPasswordConfirm" placeholder="Confirm Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="firstName" name="firstName" id="memberFirstName" placeholder="First Name" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="lastName" name="lastName" id="memberLastName" placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Address eg. 1234 Main St"/>
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Address Line 2"/>
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="text" name="city" id="exampleCity" placeholder="City"/>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Input type="text" name="state" id="exampleState" placeholder="State"/>
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Input type="text" name="zip" id="exampleZip" placeholder="Zip Code"/>
                      </FormGroup>  
                    </Col>
                  </Row>
                  <FormGroup tag="fieldset" row>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="memberType" />{' '}
                        I attend Calvary Baptist Church in person.
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="memberType" />{' '}
                        I attend Calvary Baptist Church online.
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                  <Button>Submit</Button>
                </Form>
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
import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';

require('dotenv').config();

class MemberSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        userUsername: '',
        userEmail: '',
        userPassword: '',
        userPassword2: '',
        userFirstName: '',
        userLastName: '',
        userAddress1: '',
        userAddress2: '',
        userCity: '',
        userState: '',
        userZipCode: '',
        userMembership: '',
        userIsSeenByOnline: false,
        authenticated: false,
    };
    this.storage = window.localStorage;
  }
  
  componentDidMount() {
    
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  handleCheck = (e) => {
    this.setState({[e.target.name]: e.target.checked })
  }

  registerUser = () => {
    axios.post('http://localhost:4000/member/register', this.state)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    this.setState({
        modal: false,
        userUsername: '',
        userEmail: '',
        userPassword: '',
        userPassword2: '',
        userFirstName: '',
        userLastName: '',
        userAddress1: '',
        userAddress2: '',
        userCity: '',
        userState: '',
        userZipCode: '',
        userMembership: '',
        userIsSeenByOnline: false,
        authenticated: false,
      })
  }

  render() {
    return (
      <div className="MEMBER__REGISTER">
        <Button color="info" onClick={this.toggle}>New Member Registration</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Member Registration</ModalHeader>
          <ModalBody>
          <Row>
              <Col sm="12">
                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="text" name="userUsername" id="REGISTER__USERNAME" placeholder="username" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="email" name="userEmail" id="REGISTER__EMAIL" placeholder="Email" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="password" name="userPassword" id="REGISTER__PASSWORD1" placeholder="password" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="password" name="userPassword2" id="REGISTER__PASSWORD2" placeholder="Confirm Password" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="text" name="userFirstName" id="REGISTER__FIRSTNAME" placeholder="First Name" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="text" name="userLastName" id="REGISTER__LASTNAME" placeholder="Last Name" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="userAddress1" id="REGISTER__ADDRESS1" placeholder="Address eg. 1234 Main St" onChange={this.handleInput} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="userAddress2" id="REGISTER__ADDRESS2" placeholder="Address Line 2" onChange={this.handleInput} />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input type="text" name="userCity" id="REGISTER__CITY" placeholder="City" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Input type="text" name="userState" id="REGISTER__STATE" placeholder="State" onChange={this.handleInput} />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Input type="text" name="userZipCode" id="REGISTER__ZIPCODE" placeholder="Zip Code" onChange={this.handleInput} />
                      </FormGroup>  
                    </Col>
                  </Row>
                  <FormGroup tag="fieldset" row>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="userMembership" value="physical" onChange={this.handleInput} />{' '}
                        I attend Calvary Baptist Church in person.
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="userMembership" value="online" onChange={this.handleInput} />{' '}
                        I attend Calvary Baptist Church online.
                      </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="userIsSeenByOnline" checked={this.state.userIsSeenByOnline} onChange={this.handleCheck} />{' '}
                        Let my information be seen by online members.
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                </Form>
              </Col>
            </Row>
            <h5>Site administration must accept your membership to complete activation.</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.registerUser}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MemberSignUp;
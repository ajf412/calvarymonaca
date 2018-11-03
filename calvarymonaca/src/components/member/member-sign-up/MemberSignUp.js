import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class MemberSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="MEMBER__REGISTER">
        <Button color="info" onClick={this.toggle}>New Member Registeration</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Member Registration</ModalHeader>
          <ModalBody>
          <Row>
              <Col sm="12">
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
                    <Col md={3}>
                      <FormGroup>
                        <Input type="text" name="state" id="exampleState" placeholder="State"/>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
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
                    <br/>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                        Let me be seen by online members.
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
            <Button color="info" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MemberSignUp;
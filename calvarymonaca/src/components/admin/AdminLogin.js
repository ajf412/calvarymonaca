import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input } from 'reactstrap';

require('dotenv').config();

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  checkAdmin = (e) => {
    if(this.state.username === process.env.ADMINUSERNAME && this.state.password === process.env.ADMINPASSWORD){
      this.props.adminSignIn(true);
    }
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Administrator Login</ModalHeader>
            <ModalBody>
                <div>
                    <InputGroup>
                        <Input placeholder="username" />
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="password" type="password" />
                    </InputGroup>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.checkAdmin}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminLogin;
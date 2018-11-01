import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SermonUpload extends Component {
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
        <div className="STAFF__UPLOAD">
            <Button color="info" onClick={this.toggle}>Add Staff</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Create New Staff Member</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="staffName" sm={2}>Title</Label>
                            <Col sm={10}>
                            <Input type="text" name="name" id="staffName" placeholder="Staff's Name (First and Last)" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="bioList" sm={2}>Series</Label>
                            <Col sm={10}>
                            <Input type="text" name="bioList" id="bioListElement" placeholder="Something about this person...." />
                            </Col>
                            <Button>+</Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="staffPicture">Picture of staff member (JPG)</Label>
                            <Input type="file" name="file" id="staffPicture" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={this.toggle}>Submit</Button>{' '}
                    <Button color="info" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
};

export default SermonUpload;
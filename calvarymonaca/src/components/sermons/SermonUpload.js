import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Sermons.css';

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
        <div className="SERMON__UPLOAD">
            <Button color="info" onClick={this.toggle}>Upload Sermon</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Upload a sermon</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="sermonTitle" sm={2}>Title</Label>
                            <Col sm={10}>
                            <Input type="text" name="title" id="sermonTitle" placeholder="Sermon's Title" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="sermonSeries" sm={2}>Series</Label>
                            <Col sm={10}>
                            <Input type="text" name="series" id="sermonSeries" placeholder="Sermon Series" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="furtherInfo" sm={2}>Further Info</Label>
                            <Col sm={10}>
                            <Input type="textarea" name="text" id="furtherInfo" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="sermonAudio">Sermon MP3 File</Label>
                            <Input type="file" name="file" id="sermonAudio" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sermonOutline">Sermon Notes and Outline</Label>
                            <Input type="file" name="file" id="sermonOutline" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sermonSlides">Sermon Slides</Label>
                            <Input type="file" name="file" id="sermonSlides" />
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
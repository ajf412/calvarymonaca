import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Sermons.css';

class SermonUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            sermonTitle: '',
            sermonSeries: '',
            furtherInfo: '',
            sermonAudio: File,
            sermonOutline: File,
            sermonSlides: File,
            sermonDate: Date,
        };
    }
    
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value}, () =>{
            console.log(this.state);
        })
    }

    handleDate = (e) => {
        this.setState({[e.target.name]: e.target.date})
    }

    handleFile = (e) => {
        // const file = e.target.value;
        this.setState({[e.target.name]: e.target.files[0]})
    }

    uploadSermon = () => {
        console.log("Upload the sermon!");
        this.toggle();
    }

    render() {
        if(this.props.admin){
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
                                <Input type="text" name="sermonTitle" value={this.state.sermonTitle} required={true} placeholder="Sermon's Title" onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="sermonSeries" sm={2}>Series</Label>
                                <Col sm={10}>
                                <Input type="text" name="sermonSeries" value={this.state.sermonSeries} placeholder="Sermon Series" onChange={this.handleInput}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="furtherInfo" sm={2}>Further Info</Label>
                                <Col sm={10}>
                                <Input type="textarea" name="furtherInfo" value={this.state.furtherInfo} onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="sermonDate" sm={2}>Date of Sermon</Label>
                                <Col sm={10}>
                                <Input type="date" name="sermonDate" onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sermonAudio">Sermon MP3 File</Label>
                                <Input type="file" name="sermonAudio" multiple={false} required={true} ref="sermonAudio" defaultValue={this.state.sermonAudio} onChange={this.state.handleFile}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sermonOutline">Sermon Notes and Outline</Label>
                                <Input type="file" name="sermonOutline" multiple={false} ref="sermonOutline" defaultValue={this.state.sermonOutline} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="sermonSlides">Sermon Slides</Label>
                                <Input type="file" name="sermonSlides" multiple={false} ref="sermonSlides" defaultValue={this.state.sermonSlides} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.uploadSermon}>Submit</Button>{' '}
                        <Button color="info" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            )
        } else {
            return null;
        }
    }
};

export default SermonUpload;
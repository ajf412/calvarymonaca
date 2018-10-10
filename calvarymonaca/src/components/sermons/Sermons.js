import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Sermons.css';

class SermonList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="SERMON__UPLOAD">
        <h1>Upload a sermon</h1>
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
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
};

export default SermonList;
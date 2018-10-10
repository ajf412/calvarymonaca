import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SermonList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>SermonList</h1>
        <Form>
          <FormGroup>
            <Label for="sermonAudio">File</Label>
            <Input type="sermonAudio" name="sermonAudio" id="sermonAudio" />
            <FormText color="muted">
              Sermon MP3 file.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="sermonOutline">File</Label>
            <Input type="sermonOutline" name="sermonOutline" id="sermonOutline" />
            <FormText color="muted">
              Sermon Outline.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="sermonSlides">File</Label>
            <Input type="sermonSlides" name="sermonSlides" id="sermonSlides" />
            <FormText color="muted">
              Sermon Slides.
            </FormText>
          </FormGroup>
        </Form>
      </div>
    )
  }
};

export default SermonList;
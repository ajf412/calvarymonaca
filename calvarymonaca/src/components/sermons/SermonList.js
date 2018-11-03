import React, { Component } from 'react';

import { Button, ListGroup, ListGroupItem, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './SermonList.css';

class SermonList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Filter
        <Col xs="12">
          <Row>
            <Col  xs="12" md="6" >
            <InputGroup>
              <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
              <Input />
            </InputGroup>
            </Col>
            <Col xs="12" md="6">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Series</InputGroupAddon>
              <Input />
            </InputGroup>
            </Col>
          </Row>
        </Col>
        <br/>
        <ListGroup>
          <ListGroupItem>
            <Row className="SERMONLIST__SERMONHEADER">
              <h5 className="SERMONLIST__TITLE">Short Sermon Title</h5><p className="SERMONLIST__SERIES">Short series</p><p className="SERMONLIST__DATE">11/4/2018</p>
            </Row>
            <p className="SERMONLIST__SCRIPTURE">Scripture reference 1</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 2</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 3</p>
          </ListGroupItem>
          <ListGroupItem>
            <Row className="SERMONLIST__SERMONHEADER">
              <h5 className="SERMONLIST__TITLE">A Medium Length Sermon Title</h5><p className="SERMONLIST__SERIES">This is a medium series name.</p><p className="SERMONLIST__DATE">11/11/2018</p>
            </Row>
            <p className="SERMONLIST__SCRIPTURE">Scripture reference 1</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 2</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 3</p>         </ListGroupItem>
          <ListGroupItem>
            <Row className="SERMONLIST__SERMONHEADER">
              <h5 className="SERMONLIST__TITLE">This is a Very Long Sermon Title to Test Site Adaptability</h5><p className="SERMONLIST__SERIES">This is a long series name to test site adaptability.</p><p className="SERMONLIST__DATE">11/18/2018</p>
            </Row>
            <p className="SERMONLIST__SCRIPTURE">Scripture reference 1</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 2</p><p className="SERMONLIST__SCRIPTURE">Scripture reference 3</p>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
};

export default SermonList;
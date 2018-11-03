import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class GlobalOutreach extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="GLOBAL">
         <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Missionary Family #1</CardTitle>
                <CardText>Some basic information on this particular missionary family.  Click button below to go there.</CardText>
                <Button color="info">Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Missionary Family #2</CardTitle>
                <CardText>Some basic information on this particular missionary family.  Click button below to go there.</CardText>
                <Button color="info">Go somewhere</Button>
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
};

export default GlobalOutreach;
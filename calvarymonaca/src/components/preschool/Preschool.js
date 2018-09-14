import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Preschool extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="PRESCHOOL">
        <Row>
          <Col sm="12">
          <p>Our Preschool prepares children for kindergarten while teaching them about the love of Christ.</p>
          <p>Preschool Facebook page:<br/>
          <a href ='https://www.facebook.com/Calvary-Baptist-Preschool-593046277509378/'>https://www.facebook.com/Calvary-Baptist-Preschool-593046277509378/</a></p>
          </Col>
        </Row>
      </div>
    )
  }
};

export default Preschool;
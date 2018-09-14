import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Awana extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="AWANA">
        <Row>
          <Col sm="12">
            <h6>Cubbies</h6>
            <p>Cubbies celebrates the spiritual potential of preschoolers (3 to 5 year olds) by helping them develop respect for God, His Son and His Word.</p>
            <h6>Sparks</h6>
            <p>Sparks (Grades K-2nd) ignites the curiosity of early elementary-age kids to learn about the people and events of the Bible, building a foundation of wisdom for knowing Christ.</p>
            <h6>Truth & Training</h6>
            <p>Truth & Training engages 3rd - 6th graders by answering their questions about God and the Bible, guiding them through this pivotal life stage to grow in Christ's grace.</p>
            <h6>Trek</h6>
            <p>Trek challenges middle school students to consider their destiny in Christ and pursue it through life application of God's Word.</p>
          </Col>
        </Row>
      </div>
    )
  }
};

export default Awana;
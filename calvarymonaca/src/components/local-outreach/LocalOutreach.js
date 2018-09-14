import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class LocalOutreach extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="LOCAL">
        <Row>
          <Col sm="12">
            <h6>Deacon's Fund</h6>
            <p>The Deacon's Fund is used to help those in need both in the congregation and within the community.  If you are in need of assistance, contact the church office for more information.
            <br/><br/>office@calvarymonaca.com
            <br/>Office  (724)775-6538</p>
            <h6>5 Day Club</h6>
            <p>The 5 Day Club is led by Child Evangelism Fellowship at Calvary.  It is held during the summer months and offers a unique opportunity for children to interact with teenagers who receive training in the Christian Youth in Action program.</p>
            <h6>AWANA Clubs</h6>
            <p>Our Awana Clubs meet Monday evenings from 6:30 to 8:30 September through May. For more details view our Calendar located under the News and Events tab in the banner.</p>
            <h6>CBC Preschool</h6>
            <p>Our Preschool prepares children for kindergarten while teaching them about the love of Christ</p>
            <h6>L.I.F.E. Group</h6>
            <p>L.I.F.E. Group meets approximately every other week depending upon the schedules of all involved. Current focus of our L.I.F.E. Group is "Forgotten God-Reversing our tragic neglect of the Holy Spirit". For more information, call the Church Office at (724) 775-6538. Leave your name and telephone number. Someone will get back to you as soon as possible.</p>
          </Col>
        </Row>
      </div>
    )
  }
};

export default LocalOutreach;
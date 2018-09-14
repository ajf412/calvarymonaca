import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Link } from 'reactstrap';
import classnames from 'classnames';

import './Outreach.css';

export default class Outreach extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="OUTREACH">
        <Nav tabs className="OUTREACH__TABS">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Local Outreach
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Global Outreach
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Awana Clubs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Preschool
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
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
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Missionary Family #1</CardTitle>
                  <CardText>Some basic information on this particular missionary family.  Click button below to go there.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Missionary Family #2</CardTitle>
                  <CardText>Some basic information on this particular missionary family.  Click button below to go there.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
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
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <p>Our Preschool prepares children for kindergarten while teaching them about the love of Christ.</p>
              <p>Preschool Facebook page:<br/>
              <a href ='https://www.facebook.com/Calvary-Baptist-Preschool-593046277509378/'>https://www.facebook.com/Calvary-Baptist-Preschool-593046277509378/</a></p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
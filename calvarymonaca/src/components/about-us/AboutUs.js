import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './AboutUs.css';

import StaffPage from './staff/StaffPage';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };
  }


  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="ABOUTUS">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              What to Expect
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Church Staff
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              What We Believe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Get Connected
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h5>About Us</h5>
                <p>Every one of us has two very important needs: the need for unconditional love (security) and the need for a sense of life purpose (significance).  We believe we find both of those needs met in the Lord Jesus Christ.  At Calvary Baptist Church we are His body here on Earth for such a time as this and we want every person regardless of where they are at in their life journey to know that unconditional love of God and to help them discover His purpose for their life. We invite you to join us and journey together.</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h5>What to Expect</h5>
                <h6>Worship Service</h6>
                <p>The morning worship service begins at 10:50am and is a blend of contemporary and traditional. A typical service includes worship music, communion (usually the first Sunday of each month) and preaching.<br/>Our services are casual and friendly so come as you are.</p>
                <h6>Sunday School, Nursery, and Children's Church</h6>
                <p>Nursery (birth through 3 years) is available during all services.<br/>Sunday school and Adult Bible Study begin at 9:45 with classes available for all age groups.<br/>Children’s church is open to children during the preaching portion of the worship service and is divided into two groups;<br/>Post-nursery to age 7 are studying the Noah's Park series and the children age 8 to 14 and studying Firm Foundations</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <StaffPage />
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h5>Contact Us</h5>
                <p>999 McClelland Street<br/>
                Monaca, PA  15061<br/>
                <br/>
                office@calvarymonaca.com<br/>
                <a href='https://www.facebook.com/CalvaryBaptistChurchMonacaPa'>Facebook</a><br/>
                <br/>
                Office  (724)775-6538</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <h5>What We Believe</h5>
                <p>The essence of a church is contained not in its building or its community presence, but in the body of its beliefs.</p>
                <h6>At Calvary Baptist Church we believe:</h6>
                <ul>
                  <li>In the word-by-word inspiration and divine authority of the Holy Scriptures.</li><br/>
                  <li>In one God eternally existing in three persons; Father, Son, and Holy Spirit.</li><br/>
                  <li>In the Lord Jesus Christ as true God and true man; His virgin birth, spotless humanity, vicarious death, bodily resurrection, present advocacy, and his personal bodily visible and imminent return for His Church.</li><br/>
                  <li>In the fall of man, resulting in his complete and universal separation from God and his need of salvation.</li><br/>
                  <li>That the Lord Jesus Christ shed His blood and died as a sacrifice for the sins of the whole world.</li><br/>
                  <li>That salvation is a free and everlasting gift of God, entirely apart from works, that every person is responsible to receive salvation by personal faith in the Lord Jesus Christ that a soul once truly saved can never be lost.</li><br/>
                  <li>That the Holy Spirit regenerates with divine life and personally indwells the believer upon his faith in Christ for salvation.</li><br/>
                  <li>In the bodily resurrection of both the saved and the unsaved.</li><br/>
                  <li>In the responsibility of each believer, motivated by the love of Christ and empowered by the Holy Spirit to witness for Christ and to live sacrificially for the proclamation of the Gospel to all the world.</li><br/>
                  <li>In the two ordinances of the church; believer’s baptism by immersion and the observance of the Lord’s Table (communion).</li><br/>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <h5>Get Connected</h5> 
                <h6>Explore the Bible</h6><p>Adult and children’s classes each Sunday morning include an in depth study of the Scriptures with an emphasis on the practical application of what is learned.</p><br/>
                <h6>L.I.F.E. Group Bible Studies</h6><p>These groups meet in various homes in the community and are opportunities to get better acquainted with one another in the relaxed atmosphere. The time frame is usually two hours and consists of study, prayer, refreshments and enjoying one another’s company.</p><br/>
                <h6>Prayer Connection</h6><p>This is a time to share requests and to pray for one another. This opportunity is from 9:30 am to 9:45 am on Sunday morning.</p><br/>
                <h6>Weekly Prayer Meeting</h6><p>Beginning Wednesday, February 1, 2017 at 7:00 pm we will be re-instituting Prayer meeting each Wednesday evening.It will consist of a short Bible study and prayer meeting to follow. It is great way to refresh yourself midway through the week and help you stay grounded. bring your Bible and your prayer requests.</p><br/>
                <h6>Praise Team</h6><p>Play a key role in leading our congregation in corporate worship.</p><br/>
                <h6>AWANA</h6><p>AWANA is a children's ministry that seeks to establish our kids on a solid biblical foundation to provide the direction that is needed for daily life.</p><br/>
                <h6>CBC Preschool</h6><p>Prepare children for kindergarten while teaching them about the love of Christ.</p><br/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
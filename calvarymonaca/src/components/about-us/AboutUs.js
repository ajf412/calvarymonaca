import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';

import './AboutUs.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
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
            <Row>
              <Col sm="12">
                <h5>Church Staff</h5>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/Jim.jpg" alt="Jim Heckman Photo" />
                      <CardBody>
                        <CardTitle>Jim Heckman - Pastor</CardTitle>
                        <CardText>
                          <ListGroup>
                            <ListGroupItem>Married to Mary for 39 years. We have four adult children and a growing number of grandchildren.</ListGroupItem>
                            <ListGroupItem>We reside in Mars Borough.</ListGroupItem>
                            <ListGroupItem>Served in a pastoral role since 1990.</ListGroupItem>
                            <ListGroupItem>Directed ministries for southeast Asia closed country with the focus on leadership training.</ListGroupItem>
                            <ListGroupItem> Transitioned back to pastoral work at Calvary in 2014.</ListGroupItem>
                          </ListGroup>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/David.jpg" alt="David Swisher Photo" />
                      <CardBody>
                        <CardTitle>David Swisher - Elder</CardTitle>
                        <CardText>
                          <ListGroup>
                            <ListGroupItem>Member of Calvary Baptist Church since 1997.</ListGroupItem>
                            <ListGroupItem>Married to Kim, for 28 years. We’re the parents of 2 grown children, ages 23 and 25.</ListGroupItem>
                            <ListGroupItem>We reside in Center Township.</ListGroupItem>
                            <ListGroupItem>Church Elder – serve as part of the team to lead / shepherd the congregation.</ListGroupItem>
                            <ListGroupItem>Missions committee – promote evangelism locally and abroad.</ListGroupItem>
                            <ListGroupItem>AWANA Leader – dedicated to reaching kids with the Gospel of Christ.</ListGroupItem>
                            <ListGroupItem>Host / Lead small group bible studies - facilitating group study aimed at developing deeper relationships with God and with each other.</ListGroupItem>
                          </ListGroup>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/Paul.jpg" alt="Paul Kuglar Photo" />
                      <CardBody>
                        <CardTitle>Paul Kuglar - Elder</CardTitle>
                        <CardText>
                          <ListGroup>
                            <ListGroupItem>Member of Calvary Baptist Church since 1981.</ListGroupItem>
                            <ListGroupItem>Married to Betsy for 32 years. We have one grown son named Ryan. </ListGroupItem>
                            <ListGroupItem>We reside in Raccoon Township.</ListGroupItem>
                            <ListGroupItem>Throughout the years, I have served on various committees and boards of the church.</ListGroupItem>
                            <ListGroupItem>Currently serve as Elder on our Leadership Team as well as Sunday School Teacher and AWANA worker.</ListGroupItem>
                          </ListGroup>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/Greg.jpg" alt="Greg DeLeonardis Photo" />
                      <CardBody>
                        <CardTitle>Greg DeLeonardis - Elder</CardTitle>
                        <CardText>
                          <ListGroup>
                            <ListGroupItem>Member of Calvary Baptist Church since 2002.</ListGroupItem>
                            <ListGroupItem>Married to my wife, Paula, for 18 years. We’re the parents of 3 children, ages 14, 11 and 7.</ListGroupItem>
                            <ListGroupItem>We reside in Saxonburg.</ListGroupItem>
                            <ListGroupItem>Serve as a Church Elder – serve as part of the team to lead / shepherd the congregation.</ListGroupItem>
                            <ListGroupItem>Praise Team Leader – Lead the congregation in Worship.</ListGroupItem>
                          </ListGroup>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
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
                <p><h6>Explore the Bible</h6>Adult and children’s classes each Sunday morning include an in depth study of the Scriptures with an emphasis on the practical application of what is learned.</p><br/>
                <p><h6>L.I.F.E. Group Bible Studies</h6>These groups meet in various homes in the community and are opportunities to get better acquainted with one another in the relaxed atmosphere. The time frame is usually two hours and consists of study, prayer, refreshments and enjoying one another’s company.</p><br/>
                <p><h6>Prayer Connection</h6>This is a time to share requests and to pray for one another. This opportunity is from 9:30 am to 9:45 am on Sunday morning.</p><br/>
                <p><h6>Weekly Prayer Meeting</h6>Beginning Wednesday, February 1, 2017 at 7:00 pm we will be re-instituting Prayer meeting each Wednesday evening.It will consist of a short Bible study and prayer meeting to follow. It is great way to refresh yourself midway through the week and help you stay grounded. bring your Bible and your prayer requests.</p><br/>
                <p><h6>Praise Team</h6>Play a key role in leading our congregation in corporate worship.</p><br/>
                <p><h6>AWANA</h6>AWANA is a children's ministry that seeks to establish our kids on a solid biblical foundation to provide the direction that is needed for daily life.</p><br/>
                <p><h6>CBC Preschool</h6>Prepare children for kindergarten while teaching them about the love of Christ.</p><br/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
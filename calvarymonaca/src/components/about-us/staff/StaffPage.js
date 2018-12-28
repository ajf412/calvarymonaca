import React, { Component } from 'react';
import { Button, Row, Col, Card, CardBody, CardTitle, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

// StaffUpload is a button to open a modal to add staff cards to page.
// import StaffUpload from './StaffUpload';

function IsAdmin(props){
    if(props.admin){
        return(
            <div>
                <Button>Edit</Button>
                <Button color="danger">Remove</Button>
            </div>
        )
    }else{
        return null;
    }
  }

class StaffPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isAdmin: false,
    }
  }

  render() {
    return (
        <div>
            <Row>
                <Col sm="12">
                <h5>Church Staff</h5>
                <Row>
                    <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/Jim.jpg" alt="Jim Heckman Photo" />
                        <CardBody>
                        <CardTitle>Jim Heckman - Pastor</CardTitle>
                        <ListGroup>
                            <ListGroupItem>Married to Mary for 39 years. We have four adult children and a growing number of grandchildren.</ListGroupItem>
                            <ListGroupItem>We reside in Mars Borough.</ListGroupItem>
                            <ListGroupItem>Served in a pastoral role since 1990.</ListGroupItem>
                            <ListGroupItem>Directed ministries for southeast Asia closed country with the focus on leadership training.</ListGroupItem>
                            <ListGroupItem>Transitioned back to pastoral work at Calvary in 2014.</ListGroupItem>
                        </ListGroup>
                        <IsAdmin admin={this.state.isAdmin} />
                        </CardBody>
                    </Card>
                    </Col>
                    <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/David.jpg" alt="David Swisher Photo" />
                        <CardBody>
                            <CardTitle>David Swisher - Elder</CardTitle>
                            <ListGroup>
                                <ListGroupItem>Member of Calvary Baptist Church since 1997.</ListGroupItem>
                                <ListGroupItem>Married to Kim, for 28 years. We’re the parents of 2 grown children, ages 23 and 25.</ListGroupItem>
                                <ListGroupItem>We reside in Center Township.</ListGroupItem>
                                <ListGroupItem>Church Elder – serve as part of the team to lead / shepherd the congregation.</ListGroupItem>
                                <ListGroupItem>Missions committee – promote evangelism locally and abroad.</ListGroupItem>
                                <ListGroupItem>AWANA Leader – dedicated to reaching kids with the Gospel of Christ.</ListGroupItem>
                                <ListGroupItem>Host / Lead small group bible studies - facilitating group study aimed at developing deeper relationships with God and with each other.</ListGroupItem>
                            </ListGroup>
                            <IsAdmin admin={this.state.isAdmin} />
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
                        <ListGroup>
                            <ListGroupItem>Member of Calvary Baptist Church since 1981.</ListGroupItem>
                            <ListGroupItem>Married to Betsy for 32 years. We have one grown son named Ryan.</ListGroupItem>
                            <ListGroupItem>We reside in Raccoon Township.</ListGroupItem>
                            <ListGroupItem>Throughout the years, I have served on various committees and boards of the church.</ListGroupItem>
                            <ListGroupItem>Currently serve as Elder on our Leadership Team as well as Sunday School Teacher and AWANA worker.</ListGroupItem>
                        </ListGroup>
                        <IsAdmin admin={this.state.isAdmin} />
                        </CardBody>
                    </Card>
                    </Col>
                    <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src="https://www.calvarymonaca.com/images/Staff_Images/Greg.jpg" alt="Greg DeLeonardis Photo" />
                        <CardBody>
                        <CardTitle>Greg DeLeonardis - Elder</CardTitle>
                        <ListGroup>
                            <ListGroupItem>Member of Calvary Baptist Church since 2002.</ListGroupItem>
                            <ListGroupItem>Married to my wife, Paula, for 18 years. We’re the parents of 3 children, ages 14, 11 and 7.</ListGroupItem>
                            <ListGroupItem>We reside in Saxonburg.</ListGroupItem>
                            <ListGroupItem>Serve as a Church Elder – serve as part of the team to lead / shepherd the congregation.</ListGroupItem>
                            <ListGroupItem>Praise Team Leader – Lead the congregation in Worship.</ListGroupItem>
                        </ListGroup>
                        <IsAdmin admin={this.state.isAdmin} />
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    )}
};

// TODO: Add admin rights to edit and remove staff members.
// TODO:  Add admin rights to add staff members.

export default StaffPage;
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Resources extends React.Component {
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Links
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Music
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <a href='#'>Calvary Baptist Church Facebook Page:</a><br/>
                <a href='#'>Preschool Facebook Page</a><br/>
                <a href='#'>Bible Hub:</a><br/>
                <a href='#'>PROLIFE Across AMERICA:</a><br/>
                <a href='#'>"Deliver Us From Evil" by Ravi Zacharias</a><br/>
                <a href='#'>"A Message on Relational Reality" by Bob Mumford</a><br/>
                <a href='#'>"None but the Huntry Heart" devotional by Miles Stanford</a><br/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                SPOTIFY GOES HERE
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
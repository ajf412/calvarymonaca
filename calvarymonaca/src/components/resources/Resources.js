import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import WorshipMusic from '../worship-music/WorshipMusic';

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
                <a href='https://www.facebook.com/CalvaryBaptistChurchMonacaPa/'>Calvary Baptist Church Facebook Page:</a><br/>
                <a href='https://www.facebook.com/Calvary-Baptist-Preschool-593046277509378/'>Preschool Facebook Page</a><br/>
                <a href='https://www.biblehub.com/'>Bible Hub:</a><br/>
                <a href='https://prolifeacrossamerica.org/'>PROLIFE Across AMERICA:</a><br/>
                <a href='https://www.bethinking.org/is-there-meaning-to-life/deliver-us-from-evil'>"Deliver Us From Evil" by Ravi Zacharias</a><br/>
                <a href='https://www.youtube.com/watch?v=4fnuDMJ2pw8&feature=youtu.be'>"A Message on Relational Reality" by Bob Mumford</a><br/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <WorshipMusic/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
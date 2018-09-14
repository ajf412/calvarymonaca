import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Awana from '../awana/Awana';
import GlobalOutreach from '../global-outreach/GlobalOutreach';
import LocalOutreach from '../local-outreach/LocalOutreach';
import Preschool from '../preschool/Preschool';

import './Outreach.css';

export default class Outreach extends Component {
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
            <LocalOutreach />
          </TabPane>
          <TabPane tabId="2">
           <GlobalOutreach />
          </TabPane>
          <TabPane tabId="3">
            <Awana/>
          </TabPane>
          <TabPane tabId="4">
            <Preschool />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
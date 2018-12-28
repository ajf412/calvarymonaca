import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import {
  AboutUs,
  Bible,
  Footer,
  Header,
  Home,
  Member,
  News,
  Outreach,
  Resources,
  Sermons,
  WorshipMusic,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <Header />
        </header>
        <div className="APP__BODY">
          <Router>
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route path = '/about' component={AboutUs} />
              <Route path = '/news' component={News} />
              <Route path = '/outreach' component={Outreach} />
              <Route path = '/sermons' component={Sermons} />
              <Route path = '/resources' component={Resources} />
              <Route path = '/music' component={WorshipMusic} />
              <Route path = '/bible' component={Bible} />
              <Route path = '/member' component={Member} />
            </Switch>
          </Router>

        </div>
        <footer className="APP__FOOTER">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;

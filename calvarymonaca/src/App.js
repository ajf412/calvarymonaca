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
  constructor(props){
    super(props)
    this.state={
      admin: false,
    }
  }

  adminSignIn = (signed) => {
    this.setState({admin: signed}, () => {
      console.log("Admin is signed in: " , this.state.admin);
    });
  }

  render() {
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <Header />
        </header>
        <div className="APP__BODY">
          <Router>
            <Switch>
              <Route exact path = '/' admin={this.state.admin} component={Home} />
              <Route path = '/about' render={(props) => <AboutUs {...props} admin={this.state.admin}/>} />
              <Route path = '/news' render={(props) => <News {...props} admin={this.state.admin}/>} />
              <Route path = '/outreach' render={(props) => <Outreach {...props} admin={this.state.admin}/>} />
              <Route path = '/sermons' render={(props) => <Sermons {...props} admin={this.state.admin}/>} />
              <Route path = '/resources' render={(props) => <Resources {...props} admin={this.state.admin}/>} />
              <Route path = '/music' render={(props) => <WorshipMusic {...props} admin={this.state.admin}/>} />
              <Route path = '/bible' render={(props) => <Bible {...props} admin={this.state.admin}/>} />
              <Route path = '/member' render={(props) => <Member {...props} admin={this.state.admin}/>} />
            </Switch>
          </Router>

        </div>
        <footer className="APP__FOOTER">
          <Footer  admin={this.state.admin} adminSignIn={this.adminSignIn} />
        </footer>
      </div>
    );
  }
}

export default App;

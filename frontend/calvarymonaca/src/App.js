import React, { Component } from 'react';
import './App.css';
import {
  // AboutUs,
  // Awana,
  // Bible,
  // DiscussionArea,
  Footer,
  // GlobalOutreach,
  Header,
  // Home,
  // Links,
  // LocalOutreach,
  // Member,
  // MemberDirectory,
  // MemberProfile,
  // MemberSignIn,
  // MemberSignUp,
  // MyProfile,
  NavBar,
  // News,
  // Preschool,
  // SermonList,
  // Sermons,
  // Visitor,
  // WorshipMusic,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <Header />
          <NavBar />
        </header>
        <body>
          <h1>BODY</h1>
          <h2>Welcome to Calvary Baptist Church!</h2>
        </body>
        <footer className="APP__FOOTER">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;

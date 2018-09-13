import React, { Component } from 'react';
import './App.css';
import {
  AboutUs,
  Awana,
  Bible,
  DiscussionArea,
  Footer,
  GlobalOutreach,
  Header,
  Home,
  Links,
  LocalOutreach,
  Member,
  MemberDirectory,
  MemberProfile,
  MemberSignIn,
  MemberSignUp,
  MyProfile,
  NavBar,
  News,
  Preschool,
  SermonList,
  Sermons,
  Visitor,
  WorshipMusic,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <Header />
          <NavBar />
        </header>
        <AboutUs />
        <Awana />
        <Bible />
        <DiscussionArea />
        <GlobalOutreach />
        <Home />
        <Links />
        <LocalOutreach />
        <Member />
        <MemberDirectory />
        <MemberProfile />
        <MemberSignIn />
        <MemberSignUp />
        <MyProfile />
        <News />
        <Preschool />
        <SermonList />
        <Sermons />
        <Visitor />
        <WorshipMusic />
        <div>
        <Footer/>
      </div>
      </div>
      
    );
  }
}

export default App;

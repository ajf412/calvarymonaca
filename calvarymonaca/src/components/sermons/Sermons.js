import React, { Component } from 'react';
import SermonUpload from './SermonUpload';
import SermonList from './SermonList';

import './Sermons.css';

class Sermons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdmin: true,
    }
  }

  render() {
    if(this.state.isAdmin === true){
      return (
        <div className="SERMONS">
          <SermonList /><br/>
          <SermonUpload />
        </div>
      )
    } else {
      return (
        <div className="SERMONS">
          <SermonList />
        </div>
      )
    }
  }
};

export default Sermons;
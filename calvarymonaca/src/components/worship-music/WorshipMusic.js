import React, { Component } from 'react';

class WorshipMusic extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/user/cbc1954/playlist/45qMX8UWuWAPCYRBzxr3yv"
        width="100%"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>
    )
  }
};

export default WorshipMusic;
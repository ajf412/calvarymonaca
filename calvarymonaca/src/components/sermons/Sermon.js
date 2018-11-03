import React, { Component } from 'react';

import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class Sermon extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    render() {
        return (
            <div>
                <h5>Sermon Title 1</h5><p>Sermon Series</p>
                <p>Futher info about the sermon.  Text about context, etc...  Stuff you want to say about it.</p>
                <p>Scripture reference 1, Scripture reference 2, Scripture reference 3...</p>
                <Button color="info">Download MP3</Button>
                <Button color="info">Download Notes & Outlines</Button>
                <Button color="info">Download Slides</Button>
            </div>
        )
    }
};

export default Sermon;
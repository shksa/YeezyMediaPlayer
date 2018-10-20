import React, { Component } from 'react';
import * as s from './style'
import Sidebar from '../components/Sidebar/Sidebar';
import MediaViewer from '../components/MediaViewer/MediaViewer'
import * as utils from '../utils';

class App extends Component {

  state = {videoURL: utils.DefaultVid}

  
  handleVideoURLChange = (videoURL) => {
    console.log("videoURL", videoURL)
    this.setState({videoURL})
  }

  render() {
    console.log("In render of App, state: ", this.state)
    const {videoURL} = this.state
    return (
      <s.App>
        <Sidebar handleVideoURLChange={this.handleVideoURLChange}/>
        <MediaViewer videoURL={videoURL} handleVideoURLChange={this.handleVideoURLChange} />
      </s.App>
    );
  }
}

export default App;

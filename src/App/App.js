import React, { Component } from 'react';
import * as s from './style'
import Sidebar from '../components/Sidebar/Sidebar';
import MediaViewer from '../components/MediaViewer/MediaViewer'
import * as utils from '../utils';

class App extends Component {

  state = {videoURL: utils.DefaultVid, showSidebar: true}

  
  handleVideoURLChange = (videoURL) => {
    console.log("videoURL", videoURL)
    this.setState({videoURL, showSidebar: false})
  }

  handleMediaListRevealer = () => {
    this.setState((state) => ({
      showSidebar: !state.showSidebar
    }))
  }

  render() {
    console.log("In render of App, state: ", this.state)
    const {videoURL, showSidebar} = this.state
    return (
      <s.App>
        <Sidebar showSidebar={showSidebar} handleVideoURLChange={this.handleVideoURLChange} handleMediaListRevealer={this.handleMediaListRevealer}/>
        <MediaViewer isSidebarOpen={showSidebar} videoURL={videoURL} handleVideoURLChange={this.handleVideoURLChange} handleMediaListRevealer={this.handleMediaListRevealer}  />
      </s.App>
    );
  }
}

export default App;

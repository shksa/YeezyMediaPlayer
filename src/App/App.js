import React, { Component } from 'react';
import * as s from './style'
import Sidebar from '../components/Sidebar/Sidebar';
import MediaViewer from '../components/MediaViewer/MediaViewer'
import * as utils from '../utils';

class App extends Component {

  state = {videoURL: utils.DefaultVid, showSidebar: true}

  
  handleVideoURLChange = (videoURL) => {
    console.log("videoURL", videoURL)
    this.setState({videoURL})
  }

  handleHamburgerClick = () => {
    this.setState((state) => ({
      showSidebar: !state.showSidebar
    }))
  }

  handleSidebarVisibilty = (boolean) => {
    this.setState({
      showSidebar: boolean
    })
  }

  render() {
    // console.log("In render of App, state: ", this.state)
    const {videoURL, showSidebar} = this.state
    return (
      <s.App>
        <Sidebar handleSidebarVisibilty={this.handleSidebarVisibilty} showSidebar={showSidebar} handleVideoURLChange={this.handleVideoURLChange} handleHamburgerClick={this.handleHamburgerClick}/>
        <MediaViewer isSidebarOpen={showSidebar} videoURL={videoURL} handleVideoURLChange={this.handleVideoURLChange} handleHamburgerClick={this.handleHamburgerClick}  />
      </s.App>
    );
  }
}

export default App;

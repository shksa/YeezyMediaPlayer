import React, { Component } from 'react';
import * as s from './style'
import Sidebar from '../components/Sidebar/Sidebar';
import MediaViewer from '../components/MediaViewer/MediaViewer'
import * as utils from '../utils';

class App extends Component {

  state = {mediaURL: utils.DefaultVid, showSidebar: true}

  
  handleMediaURLChange = (mediaURL) => {
    console.log("mediaURL", mediaURL)
    this.setState({mediaURL})
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
    const {mediaURL, showSidebar} = this.state
    return (
      <s.App>
        <Sidebar handleSidebarVisibilty={this.handleSidebarVisibilty} showSidebar={showSidebar} handleMediaURLChange={this.handleMediaURLChange} handleHamburgerClick={this.handleHamburgerClick}/>
        <MediaViewer isSidebarOpen={showSidebar} mediaURL={mediaURL} handleMediaURLChange={this.handleMediaURLChange} handleHamburgerClick={this.handleHamburgerClick}  />
      </s.App>
    );
  }
}

export default App;

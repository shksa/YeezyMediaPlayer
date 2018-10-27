import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
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

  toggleSidebarVisibility = () => {
    this.setState((state) => ({
      showSidebar: !state.showSidebar
    }))
  }

  closeSidebar = () => {this.setState({showSidebar: false})}

  render() {
    // console.log("In render of App, state: ", this.state)
    const {mediaURL, showSidebar} = this.state
    return (
      <s.App>
        <Sidebar 
          closeSidebar={this.closeSidebar} 
          showSidebar={showSidebar} 
          handleMediaURLChange={this.handleMediaURLChange} 
          toggleSidebarVisibility={this.toggleSidebarVisibility}
        />
        <MediaViewer 
          mediaURL={mediaURL} 
          handleMediaURLChange={this.handleMediaURLChange} 
          toggleSidebarVisibility={this.toggleSidebarVisibility}  
        />
      </s.App>
    );
  }
}

export default hot(module)(App);

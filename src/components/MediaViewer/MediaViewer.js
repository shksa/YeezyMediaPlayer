import React from 'react';
import HamburgerSVG from '../../assets/hamburger.svg'
import * as s from './style'
import * as common from '../common/common'

class MediaViewer extends React.Component {

  render() {
    const {videoURL, handleVideoURLChange, handleHamburgerClick, isSidebarOpen} = this.props
    return (
      <s.MediaViewerContainer isSidebarOpen={isSidebarOpen}>
        <s.VideoURLInputWrapper>
            <common.MenuIcon isSidebarOpen={isSidebarOpen} src={HamburgerSVG} onClick={handleHamburgerClick} />
            <s.VideoURLInput onChange={(event) => handleVideoURLChange(event.target.value)} placeholder="Enter video link here..." />
        </s.VideoURLInputWrapper>
        <s.VideoPlayerWrapper>
          <s.VideoPlayer autoPlay src={videoURL} controls />  
        </s.VideoPlayerWrapper>
      </s.MediaViewerContainer>
    );
  }
}

export default MediaViewer;
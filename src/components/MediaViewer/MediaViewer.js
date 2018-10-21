import React from 'react';
import HamburgerSVG from '../../assets/hamburger.svg'
import * as s from './style'
import * as common from '../common/comps'

class MediaViewer extends React.Component {

  render() {
    const {videoURL, handleVideoURLChange, handleMediaListRevealer, isSidebarOpen} = this.props
    return (
      <s.MediaViewerContainer>
        <s.VideoURLInputWrapper>
            <common.MediaListRevealer isSidebarOpen={isSidebarOpen} src={HamburgerSVG} onClick={handleMediaListRevealer} />
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
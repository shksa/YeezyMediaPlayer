import React from 'react';

import * as s from './style'

class MediaViewer extends React.Component {

  render() {
    const {videoURL, handleVideoURLChange} = this.props
    return (
      <s.MediaViewerContainer>
        <s.VideoURLInputWrapper>
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
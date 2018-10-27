import React from 'react';
import * as s from './style'
import * as common from '../common/common'

class MediaViewer extends React.Component {

  handleMediaURLInput = (event) => {
    if (event.keyCode === 13) {
      const mediaURL = event.target.value
      this.props.handleMediaURLChange(mediaURL)
    }
  }

  render() {
    const {mediaURL, toggleSidebarVisibility} = this.props
    return (
      <s.MediaViewerContainer>
        <s.MediaURLInputWrapper>
            <common.MenuIcon color="white" className="material-icons" onClick={toggleSidebarVisibility} >menu</common.MenuIcon>
            <s.MediaURLInput onKeyUp={this.handleMediaURLInput} placeholder="Or enter a video link here..." />
        </s.MediaURLInputWrapper>
        <s.MediaPlayerWrapper>
          {
            mediaURL.endsWith(".mp3") || mediaURL.endsWith(".wav") || mediaURL.endsWith(".ogg")
            ?
            <s.AudioPlayer autoPlay src={mediaURL} controls />
            :
            <s.VideoPlayer autoPlay src={mediaURL} controls />
          }
        </s.MediaPlayerWrapper>
      </s.MediaViewerContainer>
    );
  }
}

export default MediaViewer;
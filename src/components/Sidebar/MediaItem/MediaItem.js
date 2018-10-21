import React from 'react';
import * as s from './style'
import * as utils from '../../../utils'
import MediaList from '../MediaList/MediaList'
import Loader from '../../Loader/Loader'

class MediaItem extends React.Component {

  state = {children: null, showLoader: false}
  
  handleMediaItemClick = async() => {
    const itemURL = this.props.itemURL
    if (itemURL.charAt(itemURL.length - 1) !== '/') {
      const videoURL = itemURL.slice(utils.CORSProxy.length)
      if (window.screen.width < 768) {
        this.props.handleVideoURLChange(videoURL)
        this.props.handleSidebarVisibilty(false)
      } else {
        this.props.handleVideoURLChange(videoURL)
      }
      return
    }
    console.log('itemURL', itemURL, 'item ID', this.props.ID)
    this.setState({children: null, showLoader: true})
    let html
    try {
      console.log("fetching..", itemURL)
      html = await utils.FetchHtml(itemURL)
    } catch (error) {
      alert(error)
      return
    }
    const LinkNodes = utils.GetLinkNodes(html)
    this.setState({children: LinkNodes, showLoader: false})
  }

  render() {
    const {itemValue, itemURL, handleVideoURLChange, handleSidebarVisibilty} = this.props
    const {showLoader, children} = this.state
    console.log("children", children)
    return (
      <s.Li>
        <s.Item onClick={this.handleMediaItemClick} >{itemValue}</s.Item> {/*onClick CANNOT be on the li tag, becuase it will be called for its the children too*/}
        {children ? <MediaList handleSidebarVisibilty={handleSidebarVisibilty} mediaListNodes={children} baseURL={itemURL} handleVideoURLChange={handleVideoURLChange} /> : null}
        {showLoader ? <ul><Loader forComp="mediaItem"/></ul> : null}
      </s.Li> 
    );
  }
}

export default MediaItem;
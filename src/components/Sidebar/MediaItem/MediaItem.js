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
      const mediaURL = itemURL.slice(utils.CORSProxy.length)
      if (window.screen.width < 768) {
        this.props.handleMediaURLChange(mediaURL)
        this.props.handleSidebarVisibilty(false)
      } else {
        this.props.handleMediaURLChange(mediaURL)
      }
      return
    }
    // console.log('itemURL', itemURL)
    this.setState({children: null, showLoader: true})
    let html
    try {
      console.log("fetching..", itemURL)
      html = await utils.FetchHtml(itemURL)
    } catch (error) {
      if (error instanceof utils.HttpError){
        alert(error)
        return
      } else {
        alert(error)
        html = utils.SampleHTML
      }
    }
    const LinkNodes = utils.GetLinkNodes(html, itemURL)
    this.setState({children: LinkNodes, showLoader: false})
  }

  render() {
    const {itemValue, itemURL, handleMediaURLChange, handleSidebarVisibilty} = this.props
    const {showLoader, children} = this.state
    // console.log("children", children)
    const itemValueSanitized = itemValue.slice(0, itemValue.length-1)
    return (
      <s.Li>
        <s.Item onClick={this.handleMediaItemClick} >{itemValueSanitized}</s.Item> {/*onClick CANNOT be on the li tag, becuase it will be called for its the children too*/}
        {children && <MediaList handleSidebarVisibilty={handleSidebarVisibilty} mediaListNodesToShow={children} baseURL={itemURL} handleMediaURLChange={handleMediaURLChange} /> }
        {showLoader && <ul><Loader forComp="mediaItem"/></ul>}
      </s.Li> 
    );
  }
}

export default MediaItem;
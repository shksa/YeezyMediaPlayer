import React from 'react';
import * as s from './style'
import * as utils from '../../../utils'
import MediaList from '../MediaList/MediaList'
import Loader from '../../Loader/Loader'
import { blue } from 'ansi-colors';


class MediaItem extends React.Component {

  state = {
    showLoader: false,
    children: null, 
    childrenToShow: null, 
    showSearchBar: false, 
    showErrorMsg: false
  }
  
  handleMediaItemClick = async() => {
    this.props.setClickedItemID(this.props.itemID)
    const itemURL = this.props.itemURL
    if (itemURL.charAt(itemURL.length - 1) !== '/') {
      const mediaURL = itemURL.slice(utils.CORSProxy.length)
      this.props.handleMediaURLChange(mediaURL)
      if (window.screen.width < 768) {
        this.props.closeSidebar()
      }
      return
    }
    this.setState({showSearchBar: false, children: null, showLoader: true, showErrorMsg: false, childrenToShow: null})
    
    try {
      console.log("fetching..", itemURL)
      const html = await utils.FetchHtml(itemURL)
      console.log("parsing..")
      const mediaListNodes = utils.GetLinkNodes(html, itemURL)
      console.log("rendering..")
      // console.log("mediaListNodes: ", mediaListNodes)
      this.setState({showSearchBar: true, children: mediaListNodes, childrenToShow: mediaListNodes, showLoader: false, showErrorMsg: false})
    } catch (error) {
      if (error instanceof utils.HttpError){
        console.error(error)
      } else {
        console.error(error)
      }
      this.setState({showErrorMsg: true, showLoader: false})
    }
    
  }

  handleItemSearchBar = (event) => {
    const query = event.target.value
    const {children} = this.state
    if (query === "") {
      // console.log("query empty")
      this.setState({childrenToShow: children})
    } else {
      const childrenToShow = utils.filterList(query, children)
      this.setState({childrenToShow})
    }
  }

  render() {
    const {
      itemValue, 
      handleMediaURLChange, 
      closeSidebar, 
      itemID,  
      clickedItemID, 
      setClickedItemID,
    } = this.props
    
    const {childrenToShow, showSearchBar, showErrorMsg, showLoader} = this.state
    const itemValueSanitized = itemValue.slice(0, itemValue.length-1)
    return (
      <s.Li>
        <s.ItemAndSearchBarWrapper>
          <s.Item isClicked={clickedItemID === itemID} onClick={this.handleMediaItemClick} >{itemValueSanitized}</s.Item> {/*onClick CANNOT be on the li tag, becuase it will be called for its the children too*/}
          <s.ItemSearchBar showSearchBar={showSearchBar} onKeyUp={this.handleItemSearchBar} placeholder="search.."/>
        </s.ItemAndSearchBarWrapper>
        {showLoader && <ul><Loader forComp="mediaItem"/></ul>}
        {showErrorMsg && <p style={{color: "#1a73e8"}}>There seems to be a problem with the link, Check again at a later time.</p>}
        {childrenToShow !== null &&
          <MediaList
            mediaListNodesToShow={childrenToShow} 
            clickedItemID={clickedItemID} 
            setClickedItemID={setClickedItemID} 
            closeSidebar={closeSidebar} 
            handleMediaURLChange={handleMediaURLChange} 
          />}
      </s.Li> 
    );
  }
}

export default MediaItem;
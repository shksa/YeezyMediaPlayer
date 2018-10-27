import React from 'react';
import * as s from './style'
import * as utils from '../../../utils'
import MediaList from '../MediaList/MediaList'
import Loader from '../../Loader/Loader'


class MediaItem extends React.Component {

  state = {children: null, showLoader: false, childrenToShow: null, showSearchBar: false}
  
  handleMediaItemClick = async() => {
    this.props.setClickedItemID(this.props.itemID)
    const itemURL = this.props.itemURL
    if (itemURL.charAt(itemURL.length - 1) !== '/') {
      const mediaURL = itemURL.slice(utils.CORSProxy.length)
      if (window.screen.width < 768) {
        this.props.handleMediaURLChange(mediaURL)
        this.props.closeSidebar()
      } else {
        this.props.handleMediaURLChange(mediaURL)
      }
      return
    }
    this.setState({children: null, showLoader: true, childrenToShow: null})
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
    const LinkNodes = utils.GetLinkNodes(html)
    // console.log("LinkNodes before", LinkNodes)
    const mediaListNodes = utils.ProcessLinkNodes(LinkNodes, itemURL)
    // console.log("LinkNodes after", mediaListNodes)
    this.setState({showSearchBar: true, children: mediaListNodes, childrenToShow: mediaListNodes, showLoader: false})
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
    
    const {showLoader, children, childrenToShow, showSearchBar} = this.state
    // console.log("showSearchBar", showSearchBar)
    const itemValueSanitized = itemValue.slice(0, itemValue.length-1)
    return (
      <s.Li>
        <s.ItemAndSearchBarWrapper>
          <s.Item isClicked={clickedItemID === itemID} onClick={this.handleMediaItemClick} >{itemValueSanitized}</s.Item> {/*onClick CANNOT be on the li tag, becuase it will be called for its the children too*/}
          <s.ItemSearchBar showSearchBar={showSearchBar} onKeyUp={this.handleItemSearchBar} placeholder="search.."/>
        </s.ItemAndSearchBarWrapper>
        {children && 
        <MediaList
          mediaListNodesToShow={childrenToShow} 
          clickedItemID={clickedItemID} 
          setClickedItemID={setClickedItemID} 
          closeSidebar={closeSidebar} 
          handleMediaURLChange={handleMediaURLChange} 
        /> }
        {showLoader && <ul><Loader forComp="mediaItem"/></ul>}
      </s.Li> 
    );
  }
}

export default MediaItem;
import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'
import * as common from '../common/common'


class Sidebar extends React.Component {

  state = {mediaListNodes: null, mediaListNodesToShow: null, mediaSourceURL: null}

  getMedia = async(mediaSourceURL) => {
    this.setState({mediaListNodes: null, mediaListNodesToShow: null, mediaSourceURL})
    let html
    try {
      html = await utils.FetchHtml(mediaSourceURL, 0)
    } catch (error) {
      if (error instanceof utils.HttpError){
        alert(error)
        return
      } else {
        alert(error)
        html = utils.SampleHTML
      }
    }
    const mediaListNodes = utils.GetLinkNodes(html, mediaSourceURL)
    // console.log(mediaListNodes)
    this.setState({mediaListNodes, mediaListNodesToShow: mediaListNodes})
  }

  componentWillMount = () => {
    const defaultMediaURL = `${utils.CORSProxy}${utils.MediaSourceMap.video}`
    this.getMedia(defaultMediaURL)
  }

  handleMediaTypeOnClick = (event) => {
    const mediaType = event.target.value
    console.log(mediaType)
    const mediaSourceURL = `${utils.CORSProxy}${utils.MediaSourceMap[mediaType]}`
    this.getMedia(mediaSourceURL)
  }

  searchHandler = (event) => {
    // console.log(event)
    event.preventDefault()
    const query = event.target.value.toUpperCase()
    const {mediaListNodes} = this.state
    const relatedSearches = []
    for (let i = 0; i < mediaListNodes.length; i++) {
      const node = mediaListNodes[i]
      if (node.innerText.toUpperCase().indexOf(query) > -1) { // AnyString.indexOf("") always > -1
        relatedSearches.push(node)
      }
    }
    this.setState({mediaListNodesToShow: relatedSearches})
  }

  handleMediaSourceURLInput = (event) => {
    event.preventDefault()
    if (event.keyCode === 13) {
      const mediaSourceURL = `${utils.CORSProxy}${event.target.value}`
      this.getMedia(mediaSourceURL)
    }
  }

  render() {
    const {handleMediaURLChange, showSidebar, handleHamburgerClick, handleSidebarVisibilty} = this.props
    const {mediaListNodesToShow, mediaSourceURL} = this.state
    const showLoader = this.state.mediaListNodesToShow === null
    return (
      <s.MediaListContainer showSidebar={showSidebar}>
        <s.IconAndMediaTypeWrapper>
          <common.MenuIcon className="material-icons" onClick={handleHamburgerClick}>menu</common.MenuIcon>
          <s.MediaTypesContainer>
            <s.MediaTypeWrapper><s.MediaType onClick={this.handleMediaTypeOnClick} type="radio" name="mediaType" value="video" />Video</s.MediaTypeWrapper> 
            <s.MediaTypeWrapper><s.MediaType onClick={this.handleMediaTypeOnClick} type="radio" name="mediaType" value="audio"/> Audio</s.MediaTypeWrapper>
          </s.MediaTypesContainer>
        </s.IconAndMediaTypeWrapper>
        <s.MediaSourceURLInput onKeyUp={this.handleMediaSourceURLInput} placeholder="Or enter a media source URL..."/>
        <s.SearchBar onKeyUp={this.searchHandler} placeholder="Search here..."/>
        <s.MediaListWrapper showLoader={showLoader}>
          {showLoader
            ? <Loader />
            : <MediaList handleSidebarVisibilty={handleSidebarVisibilty} mediaListNodesToShow={mediaListNodesToShow} handleMediaURLChange={handleMediaURLChange} />
          }
        </s.MediaListWrapper>
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'
import * as common from '../common/common'


class Sidebar extends React.Component {

  state = {
    showErrorMsg: false,
    mediaListNodes: null, 
    mediaListNodesToShow: null, 
    clickedItemID: null, 
    mediaTypeToURLSourceMap: null, 
    mediaTypes: null, 
    defaultMediaTypeToShow: null 
  }

  constructor(props) {
    super(props)
    this.state.mediaTypeToURLSourceMap = utils.MediaTypeToURLSourceMap
    this.state.mediaTypes = Object.keys(utils.MediaTypeToURLSourceMap)
    this.state.defaultMediaTypeToShow = this.state.mediaTypes[0]
  }

  setClickedItemID = (clickedItemID) => {this.setState({clickedItemID})}

  getMedia = async(mediaSourceURL) => {
    this.setState({showLoader: true, mediaListNodes: null, mediaListNodesToShow: null})
    try {
      console.log("fetching..", mediaSourceURL)
      const html = await utils.FetchHtml(mediaSourceURL)
      console.log("parsing..")
      const mediaListNodes = utils.GetLinkNodes(html, mediaSourceURL)
      console.log("rendering..")
      // console.log("mediaListNodes: ", mediaListNodes)
      this.setState({mediaListNodes, mediaListNodesToShow: mediaListNodes, showErrorMsg: false})
    } catch (error) {
      if (error instanceof utils.HttpError){
        console.error(error)
      } else {
        console.error(error)
      }
      this.setState({showErrorMsg: true})
    }
  }

  componentWillMount = () => {
    const defaultMediaTypeToShow = this.state.defaultMediaTypeToShow
    const mediaURL = this.state.mediaTypeToURLSourceMap[defaultMediaTypeToShow]
    const defaultMediaURL = `${utils.CORSProxy}${mediaURL}`
    this.getMedia(defaultMediaURL)
  }

  handleMediaTypeOnClick = (event) => {
    const mediaType = event.target.value
    const mediaSourceURL = `${utils.CORSProxy}${this.state.mediaTypeToURLSourceMap[mediaType]}`
    this.getMedia(mediaSourceURL)
  }

  handleMediaSourceURLInput = (event) => {
    event.preventDefault()
    if (event.keyCode === 13) {
      const mediaSourceURL = `${utils.CORSProxy}${event.target.value}`
      this.getMedia(mediaSourceURL)
    }
  }


  handleListSearchBar = (event) => {
    const query = event.target.value
    const {mediaListNodes} = this.state
    if (query === "") {
      this.setState({mediaListNodesToShow: mediaListNodes})
    } else {
      const mediaListNodesToShow = utils.filterList(query, mediaListNodes)
      this.setState({mediaListNodesToShow})
    }
  }
  
  render() {
    const {handleMediaURLChange, showSidebar, toggleSidebarVisibility, closeSidebar} = this.props
    const {clickedItemID, mediaListNodesToShow, mediaTypes, defaultMediaTypeToShow, showErrorMsg} = this.state
    // console.log("mediaListNodesToShow", mediaListNodesToShow)
    const showLoader = mediaListNodesToShow === null
    return (
      <s.MediaListContainer showSidebar={showSidebar}>
        <s.IconAndMediaTypeWrapper>
          <common.MenuIcon className="material-icons" onClick={toggleSidebarVisibility}>menu</common.MenuIcon>
          <s.MediaTypesContainer>
            {
              mediaTypes.map((mediaType) => 
                (<s.MediaTypeWrapper key={mediaType}>
                  <s.MediaType 
                    defaultChecked={defaultMediaTypeToShow === mediaType} 
                    onClick={this.handleMediaTypeOnClick} 
                    type="radio" 
                    name="mediaType" 
                    value={mediaType} 
                  />
                  {mediaType}
                </s.MediaTypeWrapper>)
              )
            }
          </s.MediaTypesContainer>
        </s.IconAndMediaTypeWrapper>
        <s.MediaSourceURLInput onKeyUp={this.handleMediaSourceURLInput} placeholder="Or enter a media source URL"/>
        {showLoader
          ? 
          <Loader />
          : 
          (showErrorMsg
            ? 
            <p style={{color: "#1a73e8"}}>There seems to be a problem with the link, Check again at a later time.</p>
            : 
            <s.MediaListWrapper showLoader={showLoader}>
              <s.ListSearchBar onKeyUp={this.handleListSearchBar} placeholder="Search.." />
              <MediaList
                mediaListNodesToShow={mediaListNodesToShow} 
                clickedItemID={clickedItemID} 
                setClickedItemID={this.setClickedItemID} 
                closeSidebar={closeSidebar}
                handleMediaURLChange={handleMediaURLChange} 
              />
            </s.MediaListWrapper>
          )
        }
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
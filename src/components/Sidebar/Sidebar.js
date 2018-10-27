import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'
import * as common from '../common/common'


class Sidebar extends React.Component {

  state = { mediaListNodes: null, clickedItemID: null, mediaTypeToURLSourceMap: null, mediaTypes: null, defaultMediaTypeToShow: null }

  constructor(props) {
    super(props)
    this.state.mediaTypeToURLSourceMap = utils.MediaTypeToURLSourceMap
    this.state.mediaTypes = Object.keys(utils.MediaTypeToURLSourceMap)
    this.state.defaultMediaTypeToShow = this.state.mediaTypes[0]
  }

  clickedItemTracker = (clickedItemID) => {
    this.setState({clickedItemID})
  }

  getMedia = async(mediaSourceURL) => {
    this.setState({mediaListNodes: null})
    let html
    try {
      console.log("fetching..", mediaSourceURL)
      html = await utils.FetchHtml(mediaSourceURL)
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
    const mediaListNodes = utils.ProcessLinkNodes(LinkNodes, mediaSourceURL)
    // console.log("LinkNodes after", mediaListNodes)
    
    // console.log(mediaListNodes)
    this.setState({mediaListNodes})
  }

  componentWillMount = () => {
    const defaultMediaTypeToShow = this.state.defaultMediaTypeToShow
    const mediaURL = this.state.mediaTypeToURLSourceMap[defaultMediaTypeToShow]
    const defaultMediaURL = `${utils.CORSProxy}${mediaURL}`
    this.getMedia(defaultMediaURL)
  }

  handleMediaTypeOnClick = (event) => {
    const mediaType = event.target.value
    console.log(mediaType)
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

  render() {
    const {handleMediaURLChange, showSidebar, toggleSidebarVisibility, closeSidebar} = this.props
    const {clickedItemID, mediaListNodes, mediaTypes, defaultMediaTypeToShow} = this.state
    console.log("mediaTypes: ", mediaTypes)
    const showLoader = mediaListNodes === null
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
        <s.MediaSourceURLInput onKeyUp={this.handleMediaSourceURLInput} placeholder="Or enter a media source URL..."/>
        <s.MediaListWrapper showLoader={showLoader}>
          {showLoader
            ? <Loader />
            : <MediaList
                mediaListNodes={mediaListNodes} 
                clickedItemID={clickedItemID} 
                clickedItemTracker={this.clickedItemTracker} 
                closeSidebar={closeSidebar}
                handleMediaURLChange={handleMediaURLChange} 
              />
          }
        </s.MediaListWrapper>
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
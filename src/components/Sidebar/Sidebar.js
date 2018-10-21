import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'
import * as common from '../common/comps'
import HamburgerSVG from '../../assets/hamburger.svg'


class Sidebar extends React.Component {

  state = {mediaListNodes: null}

  baseURL = `${utils.CORSProxy}${utils.TVShowListURL}`

  componentWillMount = async() => {
    let html
    try {
      html = await utils.FetchHtml(this.baseURL, 0)
    } catch (error) {
      alert(error)
      return
    }
    const mediaListNodes = utils.GetLinkNodes(html)
    console.log(mediaListNodes)
    this.setState({mediaListNodes})
  }

  render() {
    const {handleVideoURLChange, showSidebar, handleHamburgerClick, handleSidebarVisibilty} = this.props
    const {mediaListNodes} = this.state
    const showLoader = this.state.mediaListNodes === null
    return (
      <s.MediaListContainer handleSidebarVisibilty={handleSidebarVisibilty}  showSidebar={showSidebar}>
        { 
          showLoader
          ? <Loader />
          : 
            <s.MediaListWrapper>
              <common.MediaListRevealer inComp="Sidebar" src={HamburgerSVG} onClick={handleHamburgerClick} />
              <MediaList handleSidebarVisibilty={handleSidebarVisibilty} baseURL={this.baseURL} mediaListNodes={mediaListNodes} handleVideoURLChange={handleVideoURLChange} />
            </s.MediaListWrapper>
        }
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'
import * as common from '../common/common'
import HamburgerSVG from '../../assets/hamburger.svg'


class Sidebar extends React.Component {

  state = {mediaListNodes: null, mediaListNodesToShow: null}

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
    // console.log(mediaListNodes)
    this.setState({mediaListNodes, mediaListNodesToShow: mediaListNodes})
  }

  searchHandler = (event) => {
    console.log(event)
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
    if (event.keyCode === 13) {
      const element = document.getElementById(query)
      if (element != null) {
        element.scrollIntoView()
        element.click()
      }
    }
  }

  render() {
    const {handleVideoURLChange, showSidebar, handleHamburgerClick, handleSidebarVisibilty} = this.props
    const {mediaListNodesToShow} = this.state
    const showLoader = this.state.mediaListNodesToShow === null
    return (
      <s.MediaListContainer handleSidebarVisibilty={handleSidebarVisibilty}  showSidebar={showSidebar}>
        { 
          showLoader
          ? <Loader />
          : 
            <s.SidebarWrapper>
              <s.IconAndSearchBarWrapper>
                <common.MenuIcon inComp="Sidebar" src={HamburgerSVG} onClick={handleHamburgerClick} />
                <s.SearchBar onKeyUp={this.searchHandler} placeholder="Search here..."/>
              </s.IconAndSearchBarWrapper>
              <s.MediaListWrapper>
                <MediaList handleSidebarVisibilty={handleSidebarVisibilty} baseURL={this.baseURL} mediaListNodesToShow={mediaListNodesToShow} handleVideoURLChange={handleVideoURLChange} />
              </s.MediaListWrapper>
            </s.SidebarWrapper>
            
        }
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
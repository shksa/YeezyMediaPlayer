import React from 'react';
import MediaList from './MediaList/MediaList'
import * as s from './style';
import Loader from '../Loader/Loader'
import * as utils from '../../utils'


class Sidebar extends React.Component {

  state = {mediaListNodes: null}

  baseURL = `${utils.CORSProxy}${utils.TVShowListURL}`

  componentWillMount = async() => {
    let html
    try {
      html = await utils.FetchHtml(this.baseURL)
    } catch (error) {
      alert(error)
      return
    }
    const mediaListNodes = utils.GetLinkNodes(html)
    console.log(mediaListNodes)
    this.setState({mediaListNodes})
  }

  render() {
    const {handleVideoURLChange} = this.props
    const {mediaListNodes} = this.state
    const showLoader = this.state.mediaListNodes === null
    return (
      <s.MediaListContainer showLoader={showLoader} >
        { 
          showLoader
          ? <Loader />
          : <MediaList baseURL={this.baseURL} mediaListNodes={mediaListNodes} handleVideoURLChange={handleVideoURLChange} />
        }
      </s.MediaListContainer>
    );  
  }
}

export default Sidebar;
import React from 'react';
import * as s from './style'
import MediaItem from '../MediaItem/MediaItem'


class MediaList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mediaListNodes: props.mediaListNodes,
      mediaListNodesToShow: props.mediaListNodes
    }
  }

  filterMediaList = (event) => {
    const {mediaListNodes} = this.state
    const mediaListNodesToShow = []
    const query = event.target.value.toUpperCase()
    for (let i = 0; i < mediaListNodes.length; i++) {
      const node = mediaListNodes[i]
      if (node.innerText.toUpperCase().indexOf(query) > -1) { // AnyString.indexOf("") always > -1
        mediaListNodesToShow.push(node)
      }
    }
    this.setState({mediaListNodesToShow})
  }

  render() {
    const { 
      handleMediaURLChange, 
      handleSidebarVisibilty, 
      clickedItemTracker, 
      clickedItemID
    } = this.props

    const {mediaListNodes, mediaListNodesToShow} = this.state
    
    console.log("mediaListNodes in MediaList: ", mediaListNodes)
    console.log("mediaListNodesToShow in MediaList: ", mediaListNodesToShow)
    return (
      <div>
        <s.SearchBar onKeyUp={this.filterMediaList} placeholder="Search here..."/>
        <s.UnList>
          {
            mediaListNodesToShow.map((node, idx) => {
              const nodeValue = node.innerText
              const nodeHrefURL = node.attributes["href"].value
              // console.log("in media list, nodeValue: ", nodeValue)
              // console.log("in media list, nodeHrefURL: ", nodeHrefURL)
              return (
                <MediaItem
                  clickedItemID={clickedItemID} 
                  itemID={nodeValue+idx} 
                  clickedItemTracker={clickedItemTracker} 
                  handleSidebarVisibilty={handleSidebarVisibilty} 
                  key={nodeValue+idx} 
                  itemValue={nodeValue} 
                  itemURL={nodeHrefURL} 
                  handleMediaURLChange={handleMediaURLChange}
                />
              )
            })
          }
        </s.UnList>
      </div>
    );
  }
}
export default MediaList;
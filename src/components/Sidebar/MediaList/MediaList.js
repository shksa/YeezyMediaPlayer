import React from 'react';
import * as s from './style'
import MediaItem from '../MediaItem/MediaItem'


class MediaList extends React.Component {

  render() {
    const { 
      handleMediaURLChange, 
      handleSidebarVisibilty, 
      setClickedItemID, 
      clickedItemID,
      mediaListNodesToShow
    } = this.props
    
    // console.log("mediaListNodes in MediaList: ", mediaListNodes)
    // console.log("mediaListNodesToShow in MediaList: ", mediaListNodesToShow)
    return (
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
                  setClickedItemID={setClickedItemID} 
                  key={nodeValue+idx} 
                  itemID={nodeValue+idx} 
                  itemValue={nodeValue} 
                  itemURL={nodeHrefURL} 
                  handleSidebarVisibilty={handleSidebarVisibilty} 
                  handleMediaURLChange={handleMediaURLChange}
                />
              )
            })
          }
        </s.UnList>
    );
  }
}
export default MediaList;
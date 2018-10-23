import React from 'react';
import * as s from './style'
import MediaItem from '../MediaItem/MediaItem'


class MediaList extends React.Component {
  render() {
    const {mediaListNodesToShow, handleMediaURLChange, handleSidebarVisibilty} = this.props
    // console.log("baseMediaURL", baseMediaURL)
    // console.log("mediaListNodesToShow", mediaListNodesToShow)
    return (
      <s.UnList>
        {
          mediaListNodesToShow.map((node, idx) => {
            const nodeValue = node.innerText
            const nodeHrefURL = node.attributes["href"].value
            // console.log("in media list, nodeValue: ", nodeValue)
            // console.log("in media list, nodeHrefURL: ", nodeHrefURL)
            return <MediaItem handleSidebarVisibilty={handleSidebarVisibilty} key={nodeValue+idx} itemValue={nodeValue} itemURL={nodeHrefURL} handleMediaURLChange={handleMediaURLChange}/>
          })
        }
      </s.UnList>
    );
  }
}
export default MediaList;
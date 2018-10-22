import React from 'react';
import * as s from './style'
import MediaItem from '../MediaItem/MediaItem'


class MediaList extends React.Component {
  render() {
    const {mediaListNodesToShow, baseURL, handleVideoURLChange, handleSidebarVisibilty} = this.props
    // console.log("baseURL", baseURL)
    // console.log("mediaListNodesToShow", mediaListNodesToShow)
    return (
      <s.UnList>
        {
          mediaListNodesToShow.map((node, idx) => {
            const itemValue = node.innerText
            const nodeHrefURL = node.attributes["href"].value
            const itemURL = `${baseURL}${nodeHrefURL}`
            // console.log("in media list, itemValue: ", itemValue)
            // console.log("in media list, baseURL: ", baseURL)
            // console.log("in media list, itemURL: ", itemURL)
            return <MediaItem handleSidebarVisibilty={handleSidebarVisibilty} key={itemValue+idx} itemValue={itemValue} itemURL={itemURL} handleVideoURLChange={handleVideoURLChange}/>
          })
        }
      </s.UnList>
    );
  }
}
export default MediaList;
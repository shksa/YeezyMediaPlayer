import React from 'react';
import * as s from './style'
import MediaItem from '../MediaItem/MediaItem'


class MediaList extends React.Component {
  render() {
    const {mediaListNodes, baseURL, handleVideoURLChange} = this.props
    console.log("baseURL", baseURL)
    console.log("mediaListNodes", mediaListNodes)
    return (
      <s.UnList>
        {
          mediaListNodes.map((node, idx) => {
            const itemValue = node.innerText
            console.log("in media list, itemValue: ", itemValue)
            const itemURL = `${baseURL}${itemValue}`
            console.log("in media list, baseURL: ", baseURL)
            console.log("in media list, itemURL: ", itemURL)
            return <MediaItem key={itemValue+idx} ID={idx} itemValue={itemValue} itemURL={itemURL} handleVideoURLChange={handleVideoURLChange}/>
          })
        }
      </s.UnList>
    );
  }
}
export default MediaList;
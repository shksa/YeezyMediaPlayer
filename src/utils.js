
const domParser = new DOMParser()

export const GetLinkNodes = (mediaListHTML) => {
  const doc = domParser.parseFromString(mediaListHTML, "text/html")
  const ATagNodeCollection = doc.getElementsByTagName("a")
  const LinksNodes = Object.keys(ATagNodeCollection).map((key) => ATagNodeCollection.item(key))
  LinksNodes.shift() // first elem is <a href="../"></a>, should be removed from the LinksNodes
  return LinksNodes
}

export const FetchHtml = async(url, delay = 0) => {
  const response = await fetch(url).then(resp => new Promise(resolve => setTimeout(resolve, delay, resp)))
  if(!response.ok) { // response.ok is false for responses with non 200-299 status codes.
    throw Error(`StatusCode: ${response.status}, StatusText: ${response.statusText}`)
  } 
  const html = await response.text()
  return html
}

export const DefaultVid = "http://techslides.com/demos/sample-videos/small.mp4"
export const TVShowListURL = "http://79.127.126.110/Serial/"
export const CORSProxy = "https://cors-anywhere.herokuapp.com/"
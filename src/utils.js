
const domParser = new DOMParser()

export const SampleHTML = `
<html>
<body>
<a href="../"></a>
<a href="hrefBobby">Bobby Lee/</a>
<a href="hrefJoeRogan">Joe Rogan/</a>
<a href="hrefBillBurr">Bill Burr/</a>
</body>
</html>
`

const hostURL = window.location.href

export const GetLinkNodes = (mediaListHTML, mediaURL) => {
  const doc = domParser.parseFromString(mediaListHTML, "text/html")
  const ATagNodeCollection = doc.getElementsByTagName("a")
  const LinksNodes = Object.keys(ATagNodeCollection).map((key) => ATagNodeCollection.item(key))
  LinksNodes.shift() // first elem is <a href="../"></a>, should be removed from the LinksNodes
  console.log("LinksNodes before", LinksNodes)
  LinksNodes.forEach((node) => {
    node.href = node.href.replace(hostURL, mediaURL)
  })
  console.log("LinksNodes after", LinksNodes)
  return LinksNodes
}

export class HttpError extends Error {
  name = "HTTPError"
  constructor(statusCode, statusText) {
    super(statusText)
    this.statusCode = statusCode
    this.statusText = statusText
  }
}

export const FetchHtml = async(url, delay = 0) => {
  const response = await fetch(url).then(resp => new Promise(resolve => setTimeout(resolve, delay, resp)))
  if(!response.ok) { // response.ok is false for responses with non 200-299 status codes.
    throw new HttpError(response.status, response.statusText)
  }
  const html = await response.text()
  return html
}

export const DefaultVid = ""

export const MediaSourceMap = {
  video: "http://dl.uploadfdl.com/files/Serial/",
  audio: "http://thesoundeffect.com/music/"
}

export const CORSProxy = "https://cors.io/?"
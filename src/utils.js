import FastPriorityQueue from 'fastpriorityqueue'
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

const linksToAvoid = ["../", "index.html", "Last modified", "Name", "Size", "Description", "Parent Directory", undefined]

export const GetLinkNodes = (mediaListHTML, mediaSourceURL) => {
  const doc = domParser.parseFromString(mediaListHTML, "text/html")
  const ATagNodeCollection = doc.getElementsByTagName("a")
  let LinksNodes= []

  for (const key in ATagNodeCollection) {
    const node = ATagNodeCollection[key];
    const text = node.innerText
    if (!linksToAvoid.includes(text)) {
      node.href = mediaSourceURL + node.attributes.href.value
      LinksNodes.push(node)
    }
  }
  // console.log("LinksNodes:", LinksNodes)
  return LinksNodes
}

export class HttpError extends Error {
  constructor(statusCode, statusText) {
    const message = `StatusCode: ${statusCode}, StatusText: ${statusText}`
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.statusText = statusText
  }
}

export const FetchHtml = async(url, delay = 0) => {
  const response = await fetch(url) //.then(resp => new Promise(resolve => setTimeout(resolve, delay, resp)))
  if(!response.ok) { // response.ok is false for responses with non 200-299 status codes.
    throw new HttpError(response.status, response.statusText)
  }
  const html = await response.text()
  return html
}

export const DefaultVid = ""

export const MediaTypeToURLSourceMap = {
  TVShows: "http://dl.uploadfdl.com/files/Serial/",
  Movies: "http://79.127.126.110/Movie/",
  SuperDatabase: "http://mc1.dl3enter.in/files/",
}

export const CORSProxy = "https://cors.io/?"

export const filterList = (query, list) => {
  query = query.toUpperCase()
  var pq = new FastPriorityQueue((a, b) => a.indexOfQuery < b.indexOfQuery);
  list.forEach((node) => {
    const indexOfQuery = node.innerText.toUpperCase().indexOf(query)
    if (indexOfQuery > -1) { // AnyString.indexOf("") always > -1
      pq.add({node, indexOfQuery})
    }
  })
  let output = []
  pq.forEach((obj) => output.push(obj.node))
  return output
}
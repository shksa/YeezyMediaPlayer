(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u});var r=t(1),a=t(2);function i(){var e=Object(r.a)(["\n  width: 100px;\n  padding: 5px;\n  font-size: 15px;\n  background-color: transparent;\n  color: black;\n  border: none;\n  border-bottom: 2px solid;\n  outline: none;\n\n  :focus {\n    border-color: #1a73e8;\n  }\n\n  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: black;\n    opacity: 1; /* Firefox */\n  }\n\n  :-ms-input-placeholder { /* Internet Explorer 10-11 */\n      color: black;\n  }\n\n  ::-ms-input-placeholder { /* Microsoft Edge */\n      color: black;\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  cursor: pointer;\n  display: ",";\n  color: ",";\n"]);return o=function(){return e},e}var c=a.b.i(o(),function(e){return!0===e.isSidebarOpen?"none":"block"},function(e){return"MediaViewer"===e.insideComp&&"white"}),u=a.b.input(i())},19:function(e,n,t){"use strict";(function(e){var r=t(5),a=t(9),i=t(7),o=t(4),c=t(6),u=t(0),l=t.n(u),s=t(20),d=t(21),h=t(27),f=t(29),p=t(3),b=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).state={mediaURL:p.b,showSidebar:!0},t.handleMediaURLChange=function(e){console.log("mediaURL",e),t.setState({mediaURL:e})},t.toggleSidebarVisibility=function(){t.setState(function(e){return{showSidebar:!e.showSidebar}})},t.closeSidebar=function(){t.setState({showSidebar:!1})},t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.state,n=e.mediaURL,t=e.showSidebar;return l.a.createElement(d.a,null,l.a.createElement(h.a,{closeSidebar:this.closeSidebar,showSidebar:t,handleMediaURLChange:this.handleMediaURLChange,toggleSidebarVisibility:this.toggleSidebarVisibility}),l.a.createElement(f.a,{isSidebarOpen:t,mediaURL:n,handleMediaURLChange:this.handleMediaURLChange,toggleSidebarVisibility:this.toggleSidebarVisibility}))}}]),n}(u.Component);n.a=Object(s.hot)(e)(b)}).call(this,t(17)(e))},21:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(1);function a(){var e=Object(r.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\n"]);return a=function(){return e},e}var i=t(2).b.div(a())},26:function(e,n,t){e.exports=t.p+"static/media/spinner.c49febc4.svg"},27:function(e,n,t){"use strict";var r=t(10),a=t.n(r),i=t(13),o=t(5),c=t(9),u=t(7),l=t(4),s=t(6),d=t(0),h=t.n(d),f=t(1),p=t(2);function b(){var e=Object(f.a)(["\n  padding-inline-start: 20px;\n"]);return b=function(){return e},e}var m=p.b.ul(b()),v=t(11);function g(){var e=Object(f.a)(["\n  display: ",";\n  width: 50px;\n  padding: 4px 5px 2px 5px;\n"]);return g=function(){return e},e}function w(){var e=Object(f.a)(["\n  margin: 0 10px 0 0;\n  :hover {\n    color: #85144b;\n  }\n  :active {\n    color: #39CCCC;\n  }\n  color: ",";\n  font-weight: bold;\n"]);return w=function(){return e},e}function S(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n"]);return S=function(){return e},e}function y(){var e=Object(f.a)(["\n  cursor: pointer;\n  margin: 10px 0 10px 0;\n"]);return y=function(){return e},e}var x=p.b.li(y()),O=p.b.div(S()),k=p.b.p(w(),function(e){return e.isClicked&&"#2ECC40"}),j=Object(p.b)(v.b)(g(),function(e){return!e.showSearchBar&&"none"}),C=t(3),L=t(26),T=t.n(L);function I(){var e=Object(f.a)(["\n  background: none;\n  height: ",";\n  width: ",";\n"]);return I=function(){return e},e}var E=p.b.img(I(),function(e){return"mediaItem"===e.forComp?"100px":null},function(e){return"mediaItem"===e.forComp?"100px":null}),M=function(e){var n=e.forComp;return h.a.createElement(E,{src:T.a,alt:"loader",forComp:n})},U=function(e){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(c)))).state={children:null,showLoader:!1,childrenToShow:null,showSearchBar:!1},t.handleMediaItemClick=Object(i.a)(a.a.mark(function e(){var n,r,i,o,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.setClickedItemID(t.props.itemID),"/"===(n=t.props.itemURL).charAt(n.length-1)){e.next=6;break}return r=n.slice(C.a.length),window.screen.width<768?(t.props.handleMediaURLChange(r),t.props.closeSidebar()):t.props.handleMediaURLChange(r),e.abrupt("return");case 6:return t.setState({children:null,showLoader:!0,childrenToShow:null}),e.prev=7,console.log("fetching..",n),e.next=11,C.c(n);case 11:i=e.sent,e.next=23;break;case 14:if(e.prev=14,e.t0=e.catch(7),!(e.t0 instanceof C.e)){e.next=21;break}return alert(e.t0),e.abrupt("return");case 21:alert(e.t0),i=C.h;case 23:o=C.d(i),c=C.g(o,n),t.setState({showSearchBar:!0,children:c,childrenToShow:c,showLoader:!1});case 26:case"end":return e.stop()}},e,this,[[7,14]])})),t.handleItemSearchBar=function(e){var n=e.target.value,r=t.state.children;if(""===n)t.setState({childrenToShow:r});else{var a=C.i(n,r);t.setState({childrenToShow:a})}},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.itemValue,t=e.handleMediaURLChange,r=e.closeSidebar,a=e.itemID,i=e.clickedItemID,o=e.setClickedItemID,c=this.state,u=c.showLoader,l=c.children,s=c.childrenToShow,d=c.showSearchBar,f=n.slice(0,n.length-1);return h.a.createElement(x,null,h.a.createElement(O,null,h.a.createElement(k,{isClicked:i===a,onClick:this.handleMediaItemClick},f)," ",h.a.createElement(j,{showSearchBar:d,onKeyUp:this.handleItemSearchBar,placeholder:"search"})),l&&h.a.createElement(R,{mediaListNodesToShow:s,clickedItemID:i,setClickedItemID:o,closeSidebar:r,handleMediaURLChange:t}),u&&h.a.createElement("ul",null,h.a.createElement(M,{forComp:"mediaItem"})))}}]),n}(h.a.Component),R=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleMediaURLChange,t=e.closeSidebar,r=e.setClickedItemID,a=e.clickedItemID,i=e.mediaListNodesToShow;return h.a.createElement(m,null,i.map(function(e,i){var o=e.innerText,c=e.attributes.href.value;return h.a.createElement(U,{clickedItemID:a,setClickedItemID:r,key:o+i,itemID:o+i,itemValue:o,itemURL:c,closeSidebar:t,handleMediaURLChange:n})}))}}]),n}(h.a.Component);function D(){var e=Object(f.a)(["\n\n"]);return D=function(){return e},e}function B(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return B=function(){return e},e}function N(){var e=Object(f.a)(["\n  margin: 10px 0 0 10px;\n  flex: 1;  \n  overflow: scroll;\n  ","\n"]);return N=function(){return e},e}function V(){var e=Object(f.a)(["\n  margin: 0 10px 0 10px;\n  padding: 5px;\n  font-size: 15px;\n  background-color: transparent;\n  color: black;\n  border: 2px solid black;\n  border-radius: 15px;\n  outline: none;\n  width: 40%;\n  align-self: center;\n"]);return V=function(){return e},e}function F(){var e=Object(f.a)(["\n  margin-right: 5px;\n"]);return F=function(){return e},e}function W(){var e=Object(f.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n"]);return W=function(){return e},e}function z(){var e=Object(f.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n"]);return z=function(){return e},e}function P(){var e=Object(f.a)(["\n  padding: 20px 0 20px 20px;\n  display: flex;\n  align-items: center;\n"]);return P=function(){return e},e}function A(){var e=Object(f.a)(["\n  width: 30%;\n  display: ",";\n  flex-direction: column;\n  background-color: #FFFFFF;\n  @media (max-width: 768px) {\n    width: 85%;\n    position: absolute;\n    z-index: 1;\n    height: 100%; /* beacuse position property fucks with it's flex item behavior */\n  }\n"]);return A=function(){return e},e}var J=p.b.div(A(),function(e){return e.showSidebar?"flex":"none"}),K=p.b.div(P()),Q=p.b.div(z()),Y=p.b.div(W()),H=p.b.input(F()),$=p.b.input(V()),q=p.b.div(N(),function(e){return e.showLoader&&Object(p.a)(B())}),G=Object(p.b)(v.b)(D()),X=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={mediaListNodes:null,mediaListNodesToShow:null,clickedItemID:null,mediaTypeToURLSourceMap:null,mediaTypes:null,defaultMediaTypeToShow:null},t.setClickedItemID=function(e){t.setState({clickedItemID:e})},t.getMedia=function(){var e=Object(i.a)(a.a.mark(function e(n){var r,i,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({mediaListNodes:null,mediaListNodesToShow:null}),e.prev=1,console.log("fetching..",n),e.next=5,C.c(n);case 5:r=e.sent,e.next=17;break;case 8:if(e.prev=8,e.t0=e.catch(1),!(e.t0 instanceof C.e)){e.next=15;break}return alert(e.t0),e.abrupt("return");case 15:alert(e.t0),r=C.h;case 17:i=C.d(r),o=C.g(i,n),t.setState({mediaListNodes:o,mediaListNodesToShow:o});case 20:case"end":return e.stop()}},e,this,[[1,8]])}));return function(n){return e.apply(this,arguments)}}(),t.componentWillMount=function(){var e=t.state.defaultMediaTypeToShow,n=t.state.mediaTypeToURLSourceMap[e],r="".concat(C.a).concat(n);t.getMedia(r)},t.handleMediaTypeOnClick=function(e){var n=e.target.value,r="".concat(C.a).concat(t.state.mediaTypeToURLSourceMap[n]);t.getMedia(r)},t.handleMediaSourceURLInput=function(e){if(e.preventDefault(),13===e.keyCode){var n="".concat(C.a).concat(e.target.value);t.getMedia(n)}},t.handleListSearchBar=function(e){var n=e.target.value,r=t.state.mediaListNodes;if(""===n)t.setState({mediaListNodesToShow:r});else{var a=C.i(n,r);t.setState({mediaListNodesToShow:a})}},t.state.mediaTypeToURLSourceMap=C.f,t.state.mediaTypes=Object.keys(C.f),t.state.defaultMediaTypeToShow=t.state.mediaTypes[0],t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.handleMediaURLChange,r=n.showSidebar,a=n.toggleSidebarVisibility,i=n.closeSidebar,o=this.state,c=o.clickedItemID,u=o.mediaListNodesToShow,l=o.mediaTypes,s=o.defaultMediaTypeToShow,d=null===u;return h.a.createElement(J,{showSidebar:r},h.a.createElement(K,null,h.a.createElement(v.a,{className:"material-icons",onClick:a},"menu"),h.a.createElement(Q,null,l.map(function(n){return h.a.createElement(Y,{key:n},h.a.createElement(H,{defaultChecked:s===n,onClick:e.handleMediaTypeOnClick,type:"radio",name:"mediaType",value:n}),n)}))),h.a.createElement($,{onKeyUp:this.handleMediaSourceURLInput,placeholder:"Or enter a media source URL"}),d?h.a.createElement(M,null):h.a.createElement(q,{showLoader:d},h.a.createElement(G,{onKeyUp:this.handleListSearchBar,placeholder:"Search.."}),h.a.createElement(R,{mediaListNodesToShow:u,clickedItemID:c,setClickedItemID:this.setClickedItemID,closeSidebar:i,handleMediaURLChange:t})))}}]),n}(h.a.Component);n.a=X},29:function(e,n,t){"use strict";var r=t(5),a=t(9),i=t(7),o=t(4),c=t(6),u=t(0),l=t.n(u),s=t(1),d=t(2);function h(){var e=Object(s.a)([""]);return h=function(){return e},e}function f(){var e=Object(s.a)(["\n  max-height: 100%;\n  max-width: 100%;\n"]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  flex: 5;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  padding: 10px;\n  background-color: black;\n  outline: none;\n  font-weight: bold;\n  font-size: 15px;\n  color: white;\n"]);return b=function(){return e},e}function m(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: space-around;\n"]);return m=function(){return e},e}function v(){var e=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n"]);return v=function(){return e},e}var g=d.b.div(v()),w=d.b.div(m()),S=d.b.input(b()),y=d.b.div(p()),x=d.b.video(f()),O=d.b.audio(h()),k=t(11),j=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).handleMediaURLInput=function(e){if(13===e.keyCode){var n=e.target.value;t.props.handleMediaURLChange(n)}},t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.mediaURL,t=e.toggleSidebarVisibility,r=e.isSidebarOpen;return l.a.createElement(g,{isSidebarOpen:r},l.a.createElement(w,null,l.a.createElement(k.a,{insideComp:"MediaViewer",className:"material-icons",isSidebarOpen:r,onClick:t},"menu"),l.a.createElement(S,{onKeyUp:this.handleMediaURLInput,placeholder:"Enter video link here..."})),l.a.createElement(y,null,n.endsWith(".mp3")||n.endsWith(".wav")||n.endsWith(".ogg")?l.a.createElement(O,{autoPlay:!0,src:n,controls:!0}):l.a.createElement(x,{autoPlay:!0,src:n,controls:!0})))}}]),n}(l.a.Component);n.a=j},3:function(e,n,t){"use strict";t.d(n,"h",function(){return p}),t.d(n,"d",function(){return m}),t.d(n,"g",function(){return v}),t.d(n,"e",function(){return g}),t.d(n,"c",function(){return w}),t.d(n,"b",function(){return S}),t.d(n,"f",function(){return y}),t.d(n,"a",function(){return x}),t.d(n,"i",function(){return O});var r=t(10),a=t.n(r),i=t(13),o=t(5),c=t(7),u=t(4),l=t(6),s=t(28),d=t(25),h=t.n(d),f=new DOMParser,p='\n<html>\n<body>\n<a href="../"></a>\n<a href="hrefBobby">Bobby Lee/</a>\n<a href="hrefJoeRogan">Joe Rogan/</a>\n<a href="hrefBillBurr">Bill Burr/</a>\n</body>\n</html>\n',b=window.location.href,m=function(e){var n=f.parseFromString(e,"text/html").getElementsByTagName("a"),t=Object.keys(n).map(function(e){return n.item(e)});return t.shift(),t},v=function(e,n){return e.forEach(function(e){e.href=e.href.replace(b,n)}),e},g=function(e){function n(e,t){var r;return Object(o.a)(this,n),(r=Object(c.a)(this,Object(u.a)(n).call(this,t))).name="HTTPError",r.statusCode=e,r.statusText=t,r}return Object(l.a)(n,e),n}(Object(s.a)(Error)),w=function(){var e=Object(i.a)(a.a.mark(function e(n){var t,r,i,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:0,e.next=3,fetch(n).then(function(e){return new Promise(function(n){return setTimeout(n,t,e)})});case 3:if((r=e.sent).ok){e.next=6;break}throw new g(r.status,r.statusText);case 6:return e.next=8,r.text();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),S="",y={TVShows:"http://dl.uploadfdl.com/files/Serial/",Movies:"http://79.127.126.110/Movie/"},x="https://cors.io/?",O=function(e,n){e=e.toUpperCase();var t=new h.a(function(e,n){return e.indexOfQuery<n.indexOfQuery});n.forEach(function(n){var r=n.innerText.toUpperCase().indexOf(e);r>-1&&t.add({node:n,indexOfQuery:r})});var r=[];return t.forEach(function(e){return r.push(e.node)}),r}},30:function(e,n,t){e.exports=t(46)},44:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(18),o=t.n(i),c=t(19),u=(t(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(a.a.createElement(c.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/YeezyMediaPlayer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/YeezyMediaPlayer","/service-worker.js");u?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):l(n,e)})}}()}},[[30,2,1]]]);
//# sourceMappingURL=main.5953ef98.chunk.js.map
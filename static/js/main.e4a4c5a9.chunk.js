(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return l});var r=t(1),a=t(2);function o(){var e=Object(r.a)(["\n  padding: 5px;\n  background-color: transparent;\n  color: black;\n  outline: none;\n\n  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: black;\n    opacity: 1; /* Firefox */\n  }\n\n  :-ms-input-placeholder { /* Internet Explorer 10-11 */\n      color: black;\n  }\n\n  ::-ms-input-placeholder { /* Microsoft Edge */\n      color: black;\n  }\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  cursor: pointer;\n  display: none;\n  @media (max-width: 768px) {\n    display: block;\n  }\n  color: ",";\n"]);return i=function(){return e},e}var c=a.b.i(i(),function(e){return e.color}),l=a.b.input(o())},20:function(e,n,t){"use strict";(function(e){var r=t(5),a=t(9),o=t(7),i=t(4),c=t(6),l=t(0),s=t.n(l),u=t(21),d=t(22),h=t(28),f=t(30),p=t(3),b=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).state={mediaURL:p.b,showSidebar:!0},t.handleMediaURLChange=function(e){console.log("mediaURL",e),t.setState({mediaURL:e})},t.toggleSidebarVisibility=function(){t.setState(function(e){return{showSidebar:!e.showSidebar}})},t.closeSidebar=function(){t.setState({showSidebar:!1})},t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.state,n=e.mediaURL,t=e.showSidebar;return s.a.createElement(d.a,null,s.a.createElement(h.a,{closeSidebar:this.closeSidebar,showSidebar:t,handleMediaURLChange:this.handleMediaURLChange,toggleSidebarVisibility:this.toggleSidebarVisibility}),s.a.createElement(f.a,{mediaURL:n,handleMediaURLChange:this.handleMediaURLChange,toggleSidebarVisibility:this.toggleSidebarVisibility}))}}]),n}(l.Component);n.a=Object(u.hot)(e)(b)}).call(this,t(17)(e))},22:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(1);function a(){var e=Object(r.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\n"]);return a=function(){return e},e}var o=t(2).b.div(a())},27:function(e,n,t){e.exports=t.p+"static/media/spinner.c49febc4.svg"},28:function(e,n,t){"use strict";var r=t(10),a=t.n(r),o=t(13),i=t(5),c=t(9),l=t(7),s=t(4),u=t(6),d=t(0),h=t.n(d),f=t(1),p=t(2);function b(){var e=Object(f.a)(["\n  padding-inline-start: 20px;\n"]);return b=function(){return e},e}var m=p.b.ul(b()),g=t(11);function v(){var e=Object(f.a)(["\n  display: ",";\n  width: 50px;\n  padding: 2px 5px 2px 5px;\n  font-size: 13px;\n  border: 2px solid white;\n  :focus {\n    border-color: #1a73e8;\n    border-radius: 15px;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(f.a)(["\n  margin: 0 10px 0 0;\n  :hover {\n    color: #85144b;\n  }\n  :active {\n    color: #39CCCC;\n  }\n  color: ",";\n  font-weight: bold;\n"]);return w=function(){return e},e}function x(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n"]);return x=function(){return e},e}function S(){var e=Object(f.a)(["\n  cursor: pointer;\n  margin: 10px 0 10px 0;\n"]);return S=function(){return e},e}var y=p.b.li(S()),k=p.b.div(x()),O=p.b.p(w(),function(e){return e.isClicked&&"#2ECC40"}),j=Object(p.b)(g.b)(v(),function(e){return!e.showSearchBar&&"none"}),C=t(3),L=t(27),E=t.n(L);function T(){var e=Object(f.a)(["\n  background: none;\n  height: ",";\n  width: ",";\n"]);return T=function(){return e},e}var M=p.b.img(T(),function(e){return"mediaItem"===e.forComp?"100px":null},function(e){return"mediaItem"===e.forComp?"100px":null}),I=function(e){var n=e.forComp;return h.a.createElement(M,{src:E.a,alt:"loader",forComp:n})},U=(t(44),function(e){function n(){var e,t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(c)))).state={showLoader:!1,children:null,childrenToShow:null,showSearchBar:!1,showErrorMsg:!1},t.handleMediaItemClick=Object(o.a)(a.a.mark(function e(){var n,r,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.setClickedItemID(t.props.itemID),"/"===(n=t.props.itemURL).charAt(n.length-1)){e.next=7;break}return r=n.slice(C.a.length),t.props.handleMediaURLChange(r),window.screen.width<768&&t.props.closeSidebar(),e.abrupt("return");case 7:return t.setState({showSearchBar:!1,children:null,showLoader:!0,showErrorMsg:!1,childrenToShow:null}),e.prev=8,console.log("fetching..",n),e.next=12,C.c(n);case 12:o=e.sent,console.log("parsing.."),i=C.d(o,n),console.log("rendering.."),t.setState({showSearchBar:!0,children:i,childrenToShow:i,showLoader:!1,showErrorMsg:!1}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),e.t0,C.e,console.error(e.t0),t.setState({showErrorMsg:!0,showLoader:!1});case 23:case"end":return e.stop()}},e,this,[[8,19]])})),t.handleItemSearchBar=function(e){var n=e.target.value,r=t.state.children;if(""===n)t.setState({childrenToShow:r});else{var a=C.g(n,r);t.setState({childrenToShow:a})}},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.itemValue,t=e.handleMediaURLChange,r=e.closeSidebar,a=e.itemID,o=e.clickedItemID,i=e.setClickedItemID,c=this.state,l=c.childrenToShow,s=c.showSearchBar,u=c.showErrorMsg,d=c.showLoader,f=n.slice(0,n.length-1);return h.a.createElement(y,null,h.a.createElement(k,null,h.a.createElement(O,{isClicked:o===a,onClick:this.handleMediaItemClick},f)," ",h.a.createElement(j,{showSearchBar:s,onKeyUp:this.handleItemSearchBar,placeholder:"search.."})),d&&h.a.createElement("ul",null,h.a.createElement(I,{forComp:"mediaItem"})),u&&h.a.createElement("p",{style:{color:"#1a73e8"}},"There seems to be a problem with the link, Check again at a later time."),null!==l&&h.a.createElement(R,{mediaListNodesToShow:l,clickedItemID:o,setClickedItemID:i,closeSidebar:r,handleMediaURLChange:t}))}}]),n}(h.a.Component)),R=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleMediaURLChange,t=e.closeSidebar,r=e.setClickedItemID,a=e.clickedItemID,o=e.mediaListNodesToShow;return h.a.createElement(m,null,o.map(function(e,o){var i=e.innerText,c=e.href;return h.a.createElement(U,{clickedItemID:a,setClickedItemID:r,key:i+o,itemID:i+o,itemValue:i,itemURL:c,closeSidebar:t,handleMediaURLChange:n})}))}}]),n}(h.a.Component);function D(){var e=Object(f.a)(["\n  width: 100px;\n  font-size: 15px;\n  border: none;\n  border-bottom: 2px solid;\n  border-color: black;\n  :focus {\n    border-color: #1a73e8;\n  }\n"]);return D=function(){return e},e}function N(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return N=function(){return e},e}function B(){var e=Object(f.a)(["\n  margin: 10px 0 0 10px;\n  flex: 1;  \n  overflow: scroll;\n  ","\n"]);return B=function(){return e},e}function V(){var e=Object(f.a)(["\n  margin: 0 10px 0 10px;\n  padding: 5px;\n  font-size: 15px;\n  background-color: transparent;\n  color: black;\n  border: 2px solid black;\n  border-radius: 15px;\n  outline: none;\n  width: 40%;\n  align-self: center;\n"]);return V=function(){return e},e}function z(){var e=Object(f.a)(["\n  margin-right: 5px;\n"]);return z=function(){return e},e}function F(){var e=Object(f.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 5px;\n"]);return F=function(){return e},e}function W(){var e=Object(f.a)(["\n  margin-left: 5px;\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n"]);return W=function(){return e},e}function P(){var e=Object(f.a)(["\n  padding: 20px 0 20px 20px;\n  display: flex;\n  align-items: center;\n"]);return P=function(){return e},e}function A(){var e=Object(f.a)(["\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  @media (max-width: 768px) {\n    display: ",";\n    width: 85%;\n    position: absolute;\n    z-index: 1;\n    height: 100%; /* beacuse position property fucks with it's flex item behavior */\n  }\n"]);return A=function(){return e},e}var K=p.b.div(A(),function(e){return e.showSidebar?"flex":"none"}),Q=p.b.div(P()),J=p.b.div(W()),Y=p.b.div(F()),$=p.b.input(z()),q=p.b.input(V()),G=p.b.div(B(),function(e){return e.showLoader&&Object(p.a)(N())}),H=Object(p.b)(g.b)(D()),X=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={showErrorMsg:!1,mediaListNodes:null,mediaListNodesToShow:null,clickedItemID:null,mediaTypeToURLSourceMap:null,mediaTypes:null,defaultMediaTypeToShow:null},t.setClickedItemID=function(e){t.setState({clickedItemID:e})},t.getMedia=function(){var e=Object(o.a)(a.a.mark(function e(n){var r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({showLoader:!0,mediaListNodes:null,mediaListNodesToShow:null}),e.prev=1,console.log("fetching..",n),e.next=5,C.c(n);case 5:r=e.sent,console.log("parsing.."),o=C.d(r,n),console.log("rendering.."),t.setState({mediaListNodes:o,mediaListNodesToShow:o,showErrorMsg:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0,C.e,console.error(e.t0),t.setState({showErrorMsg:!0});case 16:case"end":return e.stop()}},e,this,[[1,12]])}));return function(n){return e.apply(this,arguments)}}(),t.componentWillMount=function(){var e=t.state.defaultMediaTypeToShow,n=t.state.mediaTypeToURLSourceMap[e],r="".concat(C.a).concat(n);t.getMedia(r)},t.handleMediaTypeOnClick=function(e){var n=e.target.value,r="".concat(C.a).concat(t.state.mediaTypeToURLSourceMap[n]);t.getMedia(r)},t.handleMediaSourceURLInput=function(e){if(e.preventDefault(),13===e.keyCode){var n="".concat(C.a).concat(e.target.value);t.getMedia(n)}},t.handleListSearchBar=function(e){var n=e.target.value,r=t.state.mediaListNodes;if(""===n)t.setState({mediaListNodesToShow:r});else{var a=C.g(n,r);t.setState({mediaListNodesToShow:a})}},t.state.mediaTypeToURLSourceMap=C.f,t.state.mediaTypes=Object.keys(C.f),t.state.defaultMediaTypeToShow=t.state.mediaTypes[0],t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.handleMediaURLChange,r=n.showSidebar,a=n.toggleSidebarVisibility,o=n.closeSidebar,i=this.state,c=i.clickedItemID,l=i.mediaListNodesToShow,s=i.mediaTypes,u=i.defaultMediaTypeToShow,d=i.showErrorMsg,f=null===l;return h.a.createElement(K,{showSidebar:r},h.a.createElement(Q,null,h.a.createElement(g.a,{className:"material-icons",onClick:a},"menu"),h.a.createElement(J,null,s.map(function(n){return h.a.createElement(Y,{key:n},h.a.createElement($,{defaultChecked:u===n,onClick:e.handleMediaTypeOnClick,type:"radio",name:"mediaType",value:n}),n)}))),h.a.createElement(q,{onKeyUp:this.handleMediaSourceURLInput,placeholder:"Or enter a media source URL"}),f?h.a.createElement(I,null):d?h.a.createElement("p",{style:{color:"#1a73e8"}},"There seems to be a problem with the link, Check again at a later time."):h.a.createElement(G,{showLoader:f},h.a.createElement(H,{onKeyUp:this.handleListSearchBar,placeholder:"Search.."}),h.a.createElement(R,{mediaListNodesToShow:l,clickedItemID:c,setClickedItemID:this.setClickedItemID,closeSidebar:o,handleMediaURLChange:t})))}}]),n}(h.a.Component);n.a=X},3:function(e,n,t){"use strict";t.d(n,"d",function(){return b}),t.d(n,"e",function(){return m}),t.d(n,"c",function(){return g}),t.d(n,"b",function(){return v}),t.d(n,"f",function(){return w}),t.d(n,"a",function(){return x}),t.d(n,"g",function(){return S});var r=t(10),a=t.n(r),o=t(13),i=t(5),c=t(7),l=t(4),s=t(6),u=t(29),d=t(26),h=t.n(d),f=new DOMParser,p=(window.location.href,["../","index.html","Last modified","Name","Size","Description","Parent Directory",void 0]),b=function(e,n){var t=f.parseFromString(e,"text/html").getElementsByTagName("a"),r=[];for(var a in t){var o=t[a],i=o.innerText;p.includes(i)||(o.href=n+o.attributes.href.value,r.push(o))}return r},m=function(e){function n(e,t){var r;Object(i.a)(this,n);var a="StatusCode: ".concat(e,", StatusText: ").concat(t);return(r=Object(c.a)(this,Object(l.a)(n).call(this,a))).message=a,r.statusCode=e,r.statusText=t,r}return Object(s.a)(n,e),n}(Object(u.a)(Error)),g=function(){var e=Object(o.a)(a.a.mark(function e(n){var t,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o.length>1&&void 0!==o[1]?o[1]:0,e.next=3,fetch(n);case 3:if((t=e.sent).ok){e.next=6;break}throw new m(t.status,t.statusText);case 6:return e.next=8,t.text();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),v="",w={TVShows:"http://dl.uploadfdl.com/files/Serial/",Movies:"http://79.127.126.110/Movie/",SuperDatabase:"http://mc1.dl3enter.in/files/"},x="https://cors.io/?",S=function(e,n){e=e.toUpperCase();var t=new h.a(function(e,n){return e.indexOfQuery<n.indexOfQuery});n.forEach(function(n){var r=n.innerText.toUpperCase().indexOf(e);r>-1&&t.add({node:n,indexOfQuery:r})});var r=[];return t.forEach(function(e){return r.push(e.node)}),r}},30:function(e,n,t){"use strict";var r=t(5),a=t(9),o=t(7),i=t(4),c=t(6),l=t(0),s=t.n(l),u=t(1),d=t(2);function h(){var e=Object(u.a)([""]);return h=function(){return e},e}function f(){var e=Object(u.a)(["\n  max-height: 100%;\n  max-width: 100%;\n"]);return f=function(){return e},e}function p(){var e=Object(u.a)(["\n  flex: 5;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n  background-color: transparent;\n  outline: none;\n  font-size: 15px;\n  color: white;\n  border: none;\n"]);return b=function(){return e},e}function m(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: space-around;\n"]);return m=function(){return e},e}function g(){var e=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n"]);return g=function(){return e},e}var v=d.b.div(g()),w=d.b.div(m()),x=d.b.input(b()),S=d.b.div(p()),y=d.b.video(f()),k=d.b.audio(h()),O=t(11),j=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).handleMediaURLInput=function(e){if(13===e.keyCode){var n=e.target.value;t.props.handleMediaURLChange(n)}},t}return Object(c.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.mediaURL,t=e.toggleSidebarVisibility;return s.a.createElement(v,null,s.a.createElement(w,null,s.a.createElement(O.a,{color:"white",className:"material-icons",onClick:t},"menu"),s.a.createElement(x,{onKeyUp:this.handleMediaURLInput,placeholder:"Or enter a video link here..."})),s.a.createElement(S,null,n.endsWith(".mp3")||n.endsWith(".wav")||n.endsWith(".ogg")?s.a.createElement(k,{autoPlay:!0,src:n,controls:!0}):s.a.createElement(y,{autoPlay:!0,src:n,controls:!0})))}}]),n}(s.a.Component);n.a=j},31:function(e,n,t){e.exports=t(48)},46:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(19),i=t.n(o),c=t(20),l=(t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(c.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/YeezyMediaPlayer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/YeezyMediaPlayer","/service-worker.js");l?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(n,e)})}}()}},[[31,2,1]]]);
//# sourceMappingURL=main.e4a4c5a9.chunk.js.map
!function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";var i=e("./ImageLoaded.js"),r={create:function(){this.element=document.createElement("img"),this.element.setAttribute("src",this.src)},preload:function(e){i(this.element,function(t,n){e(t,n)})}};t.exports=function(e){var t=Object.create(r);return t.src=e,t.element=null,"undefined"!=typeof e&&t.create(),t}},{"./ImageLoaded.js":2}],2:[function(e,t,n){"use strict";function i(e,t){function n(e,t,n,i){e.addEventListener?e[n?"addEventListener":"removeEventListener"](t,i):e[n?"attachEvent":"detachEvent"]("on"+t,i)}function i(){n(e,"load",!1,i),n(e,"error",!1,i),t(null,!1)}var o;return e.nodeName?"img"!==e.nodeName.toLowerCase()?t(new Error("Element supplied is not an image")):e.src&&e.complete&&void 0!==e.naturalWidth?t(null,!0):(n(e,"load",!0,i),n(e,"error",!0,i),void((e.readyState||e.complete)&&(o=e.src,e.src=r,e.src=o))):t(new Error("First argument must be an image element"))}var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.exports=i},{}],3:[function(e,t,n){"use strict";var i=e("./Image.js"),r={getImageSrcs:function(e){if(this.sources=[],"undefined"!=typeof e&&(this.findImageInElement(e),this.deepSearch===!0))for(var t=e.querySelectorAll("*"),n=0;n<t.length;n++)"SCRIPT"!==t[n].tagName&&this.findImageInElement(t[n]);return this.sources.length||this.sources.push("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),this.sources},findAndPreload:function(e){if("undefined"!=typeof e){this.sources=this.getImageSrcs(e);for(var t=0;t<this.sources.length;t++){var n=i(this.sources[t]);n.preload(this.imageLoaded.bind(this)),this.images.push(n)}}},imageLoaded:function(){this.loaded++,this.updateProgress()},updateProgress:function(){this.parent.updateProgress(this.loaded,this.sources.length)},findImageInElement:function(e){var t=this.determineUrlAndType(e);if(!this.hasGradient(t.url)){t.url=this.stripUrl(t.url);for(var n=t.url.split(", "),i=0;i<n.length;i++)if(this.validUrl(n[i])&&this.urlIsNew(n[i])){var r="";(this.isIE()||this.isOpera())&&(r="?rand="+Math.random()),this.sources.push(n[i]+r)}}},determineUrlAndType:function(e){var t="",n="normal",i=e.currentStyle||window.getComputedStyle(e,null);return"undefined"!=typeof i.backgroundImage&&""!==i.backgroundImage&&"none"!==i.backgroundImage||"undefined"!=typeof e.style.backgroundImage&&""!==e.style.backgroundImage&&"none"!==e.style.backgroundImage?(t=i.backgroundImage||e.style.backgroundImage,n="background"):"img"===e.nodeName.toLowerCase()&&(t=e.src),{url:t,type:n}},hasGradient:function(e){return e&&"undefined"!=typeof e.indexOf?-1!==e.indexOf("gradient("):!1},stripUrl:function(e){return e=e.replace(/url\(\'/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\'\)/g,""),e=e.replace(/\)/g,""),e=e.replace(/"/g,"")},validUrl:function(e){return e.length>0&&!e.match(/^(data:)/i)},urlIsNew:function(e){return-1===this.sources.indexOf(e)},isIE:function(){return navigator.userAgent.match(/msie/i)},isOpera:function(){return navigator.userAgent.match(/Opera/i)}};t.exports=function(e){var t=Object.create(r);return t.parent=e,t.sources=[],t.images=[],t.loaded=0,t.deepSearch=!0,t}},{"./Image.js":1}],4:[function(e,t,n){"use strict";var i=e("./PercentageParser"),r={create:function(){this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.setStyling(),this.updateProgress(0,0)},setStyling:function(){this.element.style.height=this.barHeight+"px",this.element.style.marginTop="-"+this.barHeight/2+"px",this.element.style.backgroundColor=this.barColor,this.element.style.position="absolute",this.element.style.top="50%",this.setTransitionTime(100)},updateProgress:function(e,t){0!==t&&this.setTransitionTime(t),e=i(e),this.element.style.width=e+"%"},setTransitionTime:function(e){this.element.style.WebkitTransition="width "+e+"ms",this.element.style.MozTransition="width "+e+"ms",this.element.style.OTransition="width "+e+"ms",this.element.style.MsTransition="width "+e+"ms",this.element.style.Transition="width "+e+"ms"}};t.exports=function(){var e=Object.create(r);return e.element=null,e.className="queryloader__overlay__bar",e.barHeight=1,e.barColor="#fff",e}},{"./PercentageParser":6}],5:[function(e,t,n){"use strict";var i=e("./PercentageParser"),r={create:function(){this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling(),this.updateProgress(0,0)},applyStyling:function(){this.element.style.height="40px",this.element.style.width="100%",this.element.style.position="absolute",this.element.style.fontSize="70px",this.element.style.top="50%",this.element.style.left="0",this.element.style.marginTop="-"+(59+this.barHeight)+"px",this.element.style.textAlign="center",this.element.style.color=this.barColor},updateProgress:function(e,t){e=i(e),this.element.innerHTML=e+"%"}};t.exports=function(){var e=Object.create(r);return e.element=null,e.idName="qlPercentage",e.className="queryloader__overlay__percentage",e.barHeight=1,e.barColor="#fff",e}},{"./PercentageParser":6}],6:[function(e,t,n){"use strict";function i(e){return parseInt(e)<0?0:parseInt(e)>100?100:parseInt(e)}t.exports=i},{}],7:[function(e,t,n){"use strict";var i=e("./LoadingBar"),r=e("./Percentage"),o={init:function(){this.create(),this.loadingBar=i(),this.loadingBar.barHeight=this.barHeight,this.loadingBar.barColor=this.barColor,this.loadingBar.create(),this.element.appendChild(this.loadingBar.element),this.showPercentage&&(this.percentage=r(),this.percentage.barColor=this.barColor,this.percentage.idName=this.percentageId,this.percentage.create(),this.element.appendChild(this.percentage.element)),this.parentElement.appendChild(this.element)},create:function(){this.element=document.querySelector("#"+this.idName)||document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling()},applyStyling:function(){this.element.style.position=this.calculatePosition(),this.element.style.width="100%",this.element.style.height="100%",this.element.style.backgroundColor=this.backgroundColor,this.element.style.backgroundPosition="fixed",this.element.style.zIndex=666999,this.element.style.top="0",this.element.style.left="0",this.element.style.WebkitTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MozTransition="opacity "+this.fadeOutTime+"ms",this.element.style.OTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MsTransition="opacity "+this.fadeOutTime+"ms",this.element.style.Transition="opacity "+this.fadeOutTime+"ms"},calculatePosition:function(){var e="absolute";return"body"===this.parentElement.tagName.toLowerCase()?e="fixed":"fixed"===this.parentElement.style.position&&"absolute"===this.parentElement.style.position||(this.parentElement.style.position="relative"),e},updateProgress:function(e,t){null!==this.loadingBar&&this.loadingBar.updateProgress(e,t),null!==this.percentage&&this.percentage.updateProgress(e,t)},remove:function(){this.canRemove(this.element)&&this.element.parentNode.removeChild(this.element)},canRemove:function(e){return e.parentNode&&"undefined"!=typeof e.parentNode.removeChild}};t.exports=function(e){var t=Object.create(o);return t.parentElement=e,t.idName="qLoverlay",t.percentageId="qlPercentage",t.className="queryloader__overlay",t.element=null,t.loadingBar=null,t.percentage=null,t.barColor="#ff0000",t.backgroundColor="#000",t.barHeight=1,t.fadeOutTime=300,t.showPercentage=!1,t}},{"./LoadingBar":4,"./Percentage":5}],8:[function(e,t,n){Function.prototype.bind||(Function.prototype.bind=function(e){"use strict";if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},r=function(){return n.apply(this instanceof i&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,r.prototype=new i,r}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var i=new e;if(e.prototype=null,arguments.length>1){var r=Object(arguments[1]);for(var o in r)t.call(r,o)&&(i[o]=r[o])}return i}}())},{}],9:[function(e,t,n){"use strict";t.exports=function(){var e=window.setInterval(function(){if("undefined"!=typeof document.getElementsByTagName("body")[0]){var t=document.createElement("div");t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.zIndex="9999",t.style.backgroundColor="#000",t.style.left="0",t.style.top="0",t.setAttribute("id","qLtempOverlay"),document.getElementsByTagName("body")[0].appendChild(t),window.clearInterval(e)}},1)}},{}],10:[function(e,t,n){"use strict";var i=e("./../ImagePreloader"),r=e("./../Overlay"),o={init:function(e,t){this.options=this.extend(t,e),"undefined"!=typeof this.element&&(this.createOverlay(),this.removeTempOverlay(),this.createPreloader(),this.startMaxTimeout())},extend:function(e,t){"undefined"==typeof e&&(e={});for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},startMaxTimeout:function(){this.maxTimeout=window.setTimeout(this.doneLoading.bind(this),this.options.maxTime)},createOverlay:function(){this.overlay=r(this.element),this.overlay.idName=this.options.overlayId,this.overlay.percentageId=this.options.percentageId,this.overlay.backgroundColor=this.options.backgroundColor,this.overlay.barHeight=this.options.barHeight,this.overlay.barColor=this.options.barColor,this.overlay.showPercentage=this.options.percentage,this.overlay.fadeOutTime=this.options.fadeOutTime,"undefined"!=typeof this.element&&this.overlay.init()},removeTempOverlay:function(){window.setTimeout(function(){var e=document.getElementById("qLtempOverlay");e&&e.parentNode&&e.parentNode.removeChild(e)},0)},createPreloader:function(){this.preloader=i(this),this.preloader.deepSearch=this.options.deepSearch,window.setTimeout(function(){this.preloader.findAndPreload(this.element)}.bind(this),100)},updateProgress:function(e,t){var n=e/t*100;this.overlay.updateProgress(n,this.options.minimumTime),"function"==typeof this.options.onProgress&&this.options.onProgress(n,e,t),e===t&&this.done===!1&&(window.clearTimeout(this.maxTimeout),window.setTimeout(this.doneLoading.bind(this),this.options.minimumTime))},doneLoading:function(){window.clearTimeout(this.maxTimeout),this.done=!0,this.overlay.element.style.opacity=0,window.setTimeout(this.destroy.bind(this),this.options.fadeOutTime)},destroy:function(){this.overlay.remove(),this.options.onComplete()}};t.exports=function(e,t){var n=Object.create(o);if(n.element=e,n.options={},n.done=!1,n.maxTimeout=null,n.overlay=null,n.preloader=null,null!==e){var i=function(){};n.init(t,{onComplete:i,onProgress:i,backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",percentageId:"qLpercentage",barHeight:1,percentage:!1,deepSearch:!0,minimumTime:300,maxTime:1e4,fadeOutTime:1e3})}return n}},{"./../ImagePreloader":3,"./../Overlay":7}],11:[function(e,t,n){e("./Polyfills");var i=e("./QueryLoader"),r=e("./QueryLoader/TempOverlay");(window.jQuery||window.Zepto)&&!function(e){"use strict";e.fn.queryLoader2=function(e){return this.each(function(){i(this,e)})}}(window.jQuery||window.Zepto),"undefined"!=typeof t&&(t.exports=i),"function"==typeof define&&define.amd&&define([],function(){"use strict";return i}),window.QueryLoader2=i,r()},{"./Polyfills":8,"./QueryLoader":10,"./QueryLoader/TempOverlay":9}]},{},[11]);

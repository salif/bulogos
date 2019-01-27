if (self.CavalryLogger) { CavalryLogger.start_js(["TPQ8A"]); }

__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("PresenceConfig",["PresenceConfigInitialData"],(function(a,b,c,d,e,f){var g=Object.assign({},b("PresenceConfigInitialData"));a={get:function(a,b){return a in g?g[a]:b}};e.exports=a}),null);
__d("camelize",[],(function(a,b,c,d,e,f){var g=/-(.)/g;function a(a){return a.replace(g,function(a,b){return b.toUpperCase()})}e.exports=a}),null);
__d("getOpacityStyleName",[],(function(a,b,c,d,e,f){var g=!1,h=null;function a(){if(!g){if(document.body&&"opacity"in document.body.style)h="opacity";else{var a=document.createElement("div");a.style.filter="alpha(opacity=100)";a.style.filter&&(h="filter")}g=!0}return h}e.exports=a}),null);
__d("hyphenate",[],(function(a,b,c,d,e,f){var g=/([A-Z])/g;function a(a){return a.replace(g,"-$1").toLowerCase()}e.exports=a}),null);
__d("getStyleProperty",["camelize","hyphenate"],(function(a,b,c,d,e,f){function g(a){return a==null?"":String(a)}function a(a,c){var d;if(window.getComputedStyle){d=window.getComputedStyle(a,null);if(d)return g(d.getPropertyValue(b("hyphenate")(c)))}if(document.defaultView&&document.defaultView.getComputedStyle){d=document.defaultView.getComputedStyle(a,null);if(d)return g(d.getPropertyValue(b("hyphenate")(c)));if(c==="display")return"none"}return a.currentStyle?c==="float"?g(a.currentStyle.cssFloat||a.currentStyle.styleFloat):g(a.currentStyle[b("camelize")(c)]):g(a.style&&a.style[b("camelize")(c)])}e.exports=a}),null);
__d("StyleCore",["invariant","camelize","containsNode","ex","getOpacityStyleName","getStyleProperty","hyphenate"],(function(a,b,c,d,e,f,g){function h(a,b){a=n.get(a,b);return a==="auto"||a==="scroll"}var i=new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)","g");function j(a){var b={};a.replace(i,function(a,c,d){b[c]=d;return d});return b}function k(a){var b="";for(var c in a)a[c]&&(b+=c+":"+a[c]+";");return b}function l(a){return a!==""?"alpha(opacity="+a*100+")":""}function m(a,c,d){switch(b("hyphenate")(c)){case"font-weight":case"line-height":case"opacity":case"z-index":case"animation-iteration-count":case"-webkit-animation-iteration-count":break;case"width":case"height":var e=parseInt(d,10)<0;e&&g(0,826,a,c,d);default:isNaN(d)||!d||d==="0"||g(0,827,a,c,d,d+"px");break}}var n={set:function(a,c,d){m("Style.set",c,d);if(a==null)return;a=a.style;switch(c){case"opacity":b("getOpacityStyleName")()==="filter"?a.filter=l(d):a.opacity=d;break;case"float":a.cssFloat=a.styleFloat=d||"";break;default:try{a[b("camelize")(c)]=d}catch(a){throw new Error(b("ex")('Style.set: "%s" argument is invalid: %s',c,d))}}},apply:function(a,c){var d;for(d in c)m("Style.apply",d,c[d]);"opacity"in c&&b("getOpacityStyleName")()==="filter"&&(c.filter=l(c.opacity),delete c.opacity);var e=j(a.style.cssText);for(d in c){var f=c[d];delete c[d];var g=b("hyphenate")(d);for(var h in e)(h===g||h.indexOf(g+"-")===0)&&delete e[h];c[g]=f}Object.assign(e,c);a.style.cssText=k(e)},get:b("getStyleProperty"),getFloat:function(a,b){return parseFloat(n.get(a,b),10)},getOpacity:function(a){if(b("getOpacityStyleName")()==="filter"){var c=n.get(a,"filter");if(c){c=/(\d+(?:\.\d+)?)/.exec(c);if(c)return parseFloat(c.pop())/100}}return n.getFloat(a,"opacity")||1},isFixed:function(a){while(b("containsNode")(document.body,a)){if(n.get(a,"position")==="fixed")return!0;a=a.parentNode}return!1},getScrollParent:function(a){if(!a)return null;while(a&&a!==document.body){if(h(a,"overflow")||h(a,"overflowY")||h(a,"overflowX"))return a;a=a.parentNode}return window}};e.exports=n}),null);
__d("Style",["StyleCore","$"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("StyleCore"),{get:function(a,c){typeof a==="string"&&(a=b("$")(a));return b("StyleCore").get(a,c)},getFloat:function(a,c){typeof a==="string"&&(a=b("$")(a));return b("StyleCore").getFloat(a,c)}});e.exports=a}),null);
__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(function(a,b,c,d,e,f,g){var h;a=function(){"use strict";a.getInstance=function(){return h};function a(a,c,d){var e=this;h=this;this.$1=a;this.$2=c;this.$3=!1;b("DOMEventListener").add(this.$1,"submit",function(c){if(e.$3){new(b("DOMEvent"))(c).kill();return}e.$3=!0;d&&b("CSS").addClass(a,"_32qa")})}var c=a.prototype;c.getForm=function(){return this.$1};c.getDisplay=function(){return this.$2};c.hasBeenSubmitted=function(){return this.$3};return a}();a.RESPONSE="platform/dialog/response";e.exports=a}),null);
__d("ArbiterFrame",[],(function(a,b,c,d,e,f){a={inform:function(a,b,c){var d=parent.frames,e=d.length,f;b.crossFrame=!0;for(var g=0;g<e;g++){f=d[g];try{if(!f||f==window)continue;f.require?f.require("Arbiter").inform(a,b,c):f.ServerJSAsyncLoader&&f.ServerJSAsyncLoader.wakeUp(a,b,c)}catch(a){}}}};e.exports=a}),null);
__d("isAdsExcelAddinURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)fbaddins\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}e.exports=a}),null);
__d("isValidAsyncSignalURI",[],(function(a,b,c,d,e,f){var g=new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.includes(a.getProtocol())&&g.test(a.getDomain())}e.exports=a}),null);
__d("AsyncSignal",["Promise","ErrorGuard","QueryString","Run","TimeSlice","TrackingConfig","URI","ZeroRewrites","getAsyncParams","isAdsExcelAddinURI","isFacebookURI","isMessengerDotComURI","isValidAsyncSignalURI","isWorkplaceDotComURI","memoize","promiseDone"],(function(a,b,c,d,e,f){var g,h,i;function a(a,c){this.data=c||{},this.uri=a.toString(),b("TrackingConfig").domain&&this.uri.charAt(0)=="/"&&(this.uri=b("TrackingConfig").domain+this.uri)}a.prototype.setHandler=function(a){this.handler=a;return this};a.prototype.setTimeout=function(a){this.timeout=a;return this};a.prototype.send=function(){b("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype._send=function(){var a=this.handler,c=this.data;c.asyncSignal=(Math.random()*1e4|0)+1;var d=b("ZeroRewrites").rewriteURI(new(g||(g=b("URI")))(this.uri));d=b("isFacebookURI")(d)||b("isMessengerDotComURI")(d)||b("isAdsExcelAddinURI")(d)||b("isWorkplaceDotComURI")(d)||b("isValidAsyncSignalURI")(d);if(d)Object.assign(c,b("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var e=b("QueryString").appendToUrl(this.uri,c);i||(i=new(b("Promise"))(function(a){b("Run").onAfterLoad(a)}));d=i.then(function(){return new(b("Promise"))(function(a,b){var c=new Image();c.onload=a;c.onerror=c.onabort=b;c.src=e})});if(a){var f=!1,j=b("memoize")(function(){(h||(h=b("ErrorGuard"))).applyWithGuard(a,null,[f])});b("promiseDone")(d.then(function(){f=!0,j()},j));this.timeout&&setTimeout(j,this.timeout)}return this};e.exports=a}),null);
__d("FbtResultBase",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(a,b){this.$1=a,this.__errorListener=b,this.$2=null}var b=a.prototype;b.flattenToArray=function(){return a.flattenToArray(this.$1)};b.getContents=function(){return this.$1};b.toString=function(){if(this.$2!=null)return this.$2;var b="",c=this.flattenToArray();for(var d=0;d<c.length;++d){var e=c[d];if(typeof e==="string"||e instanceof a)b+=e.toString();else{var f;(f=this.__errorListener)==null?void 0:f.onStringSerializationError==null?void 0:f.onStringSerializationError(e)}}Object.isFrozen(this)||(this.$2=b);return b};b.toJSON=function(){return this.toString()};a.flattenToArray=function(b){var c=[];for(var d=0;d<b.length;++d){var e=b[d];Array.isArray(e)?c.push.apply(c,a.flattenToArray(e)):e instanceof a?c.push.apply(c,e.flattenToArray()):c.push(e)}return c};return a}();["anchor","big","blink","bold","charAt","charCodeAt","codePointAt","contains","endsWith","fixed","fontcolor","fontsize","includes","indexOf","italics","lastIndexOf","link","localeCompare","match","normalize","repeat","replace","search","slice","small","split","startsWith","strike","sub","substr","substring","sup","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"].forEach(function(a){g.prototype[a]=function(){var b;(b=this.__errorListener)==null?void 0:b.onStringMethodUsed==null?void 0:b.onStringMethodUsed(a);for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return String.prototype[a].apply(this,d)}});e.exports=g}),null);
__d("UserAgent_DEPRECATED",[],(function(a,b,c,d,e,f){var g=!1,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;function x(){if(g)return;g=!0;var a=navigator.userAgent,b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),c=/(Mac OS X)|(Windows)|(Linux)/.exec(a);s=/\b(iPhone|iP[ao]d)/.exec(a);t=/\b(iP[ao]d)/.exec(a);q=/Android/i.exec(a);u=/FBAN\/\w+;/i.exec(a);v=/FBAN\/mLite;/i.exec(a);w=/Mobile/i.exec(a);r=!!/Win64/.exec(a);if(b){h=b[1]?parseFloat(b[1]):b[5]?parseFloat(b[5]):NaN;h&&document&&document.documentMode&&(h=document.documentMode);var d=/(?:Trident\/(\d+.\d+))/.exec(a);m=d?parseFloat(d[1])+4:h;i=b[2]?parseFloat(b[2]):NaN;j=b[3]?parseFloat(b[3]):NaN;k=b[4]?parseFloat(b[4]):NaN;k?(b=/(?:Chrome\/(\d+\.\d+))/.exec(a),l=b&&b[1]?parseFloat(b[1]):NaN):l=NaN}else h=i=j=l=k=NaN;if(c){if(c[1]){d=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);n=d?parseFloat(d[1].replace("_",".")):!0}else n=!1;o=!!c[2];p=!!c[3]}else n=o=p=!1}var y={ie:function(){return x()||h},ieCompatibilityMode:function(){return x()||m>h},ie64:function(){return y.ie()&&r},firefox:function(){return x()||i},opera:function(){return x()||j},webkit:function(){return x()||k},safari:function(){return y.webkit()},chrome:function(){return x()||l},windows:function(){return x()||o},osx:function(){return x()||n},linux:function(){return x()||p},iphone:function(){return x()||s},mobile:function(){return x()||s||t||q||w},nativeApp:function(){return x()||v!=null?null:u},android:function(){return x()||q},ipad:function(){return x()||t}};e.exports=y}),null);
__d("isScalar",[],(function(a,b,c,d,e,f){function a(a){return/string|number|boolean/.test(typeof a)}e.exports=a}),null);
__d("DOM",["DOMQuery","Event","FBLogger","FbtResultBase","HTML","TAAL","UserAgent_DEPRECATED","$","createArrayFromMixed","isNode","isScalar","isTextNode"],(function(a,b,c,d,e,f){var g=babelHelpers["extends"]({},b("DOMQuery"),{create:function(a,b,c){a=document.createElement(a);b&&g.setAttributes(a,b);c!=null&&g.setContent(a,c);return a},setAttributes:function(a,c){c.type&&(a.type=c.type);for(var d in c){var e=c[d],f=/^on/i.test(d);f&&typeof e!=="function"&&b("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",d,typeof e);if(d=="type")continue;else d=="style"?typeof e==="string"?a.style.cssText=e:Object.assign(a.style,e):f?b("Event").listen(a,d.substr(2),e):d in a?a[d]=e:a.setAttribute&&a.setAttribute(d,e)}},prependContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));return i(c,a,function(b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)})},insertAfter:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){a.nextSibling?d.insertBefore(b,a.nextSibling):d.appendChild(b)})},insertBefore:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){d.insertBefore(b,a)})},setContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));while(a.firstChild)h(a.firstChild);return g.appendContent(a,c)},appendContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));return i(c,a,function(b){a.appendChild(b)})},replace:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){d.replaceChild(b,a)})},remove:function(a){h(typeof a==="string"?b("$")(a):a)},empty:function(a){a=typeof a==="string"?b("$")(a):a;while(a.firstChild)h(a.firstChild)}});Object.assign(g,b("DOMQuery"));function h(a){a.parentNode&&a.parentNode.removeChild(a)}function i(a,c,d){a=b("HTML").replaceJSONWrapper(a);if(a instanceof b("HTML")&&c.firstChild===null&&-1===a.toString().indexOf("<script")){var e=b("UserAgent_DEPRECATED").ie();if(!e||e>7&&!b("DOMQuery").isNodeOfType(c,["table","tbody","thead","tfoot","tr","select","fieldset"])){var f=e?'<em style="display:none;">&nbsp;</em>':"";c.innerHTML=f+a;e&&c.removeChild(c.firstChild);return Array.from(c.childNodes)}}else if(b("isTextNode")(c)){c.data=a;return[a]}f=document.createDocumentFragment();var g;e=[];c=[];a=b("createArrayFromMixed")(a);a.length===1&&a[0]instanceof b("FbtResultBase")&&(a=a[0].getContents());for(var h=0;h<a.length;h++){g=b("HTML").replaceJSONWrapper(a[h]);if(g instanceof b("HTML")){c.push(g.getAction());var i=g.getNodes();for(var j=0;j<i.length;j++)e.push(i[j]),f.appendChild(i[j])}else if(b("isScalar")(g)||g instanceof b("FbtResultBase")){j=document.createTextNode(g);e.push(j);f.appendChild(j)}else b("isNode")(g)?(e.push(g),f.appendChild(g)):(Array.isArray(g)&&b("FBLogger")("dom").warn("Nest arrays not supported"),g!==null&&b("FBLogger")("dom").warn("No way to set content %s",g))}d(f);c.forEach(function(a){a()});return e}e.exports=g}),null);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";a={getElementDimensions:function(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}},getDocumentDimensions:function(a){a=b("getDocumentScrollElement")(a);var c=a.scrollWidth||0;a=a.scrollHeight||0;return{width:c,height:a}},measureElementBox:function(a,c,d,e,f){var g;switch(c){case"left":case"right":case"top":case"bottom":g=[c];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+c)}c=function(c,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(b("Style").get(a,c+"-"+g[f]+d))||0;return e};return(d?c("padding",""):0)+(e?c("border","-width"):0)+(f?c("margin",""):0)}};e.exports=a}),null);
__d("Popup",["isTruthy"],(function(a,b,c,d,e,f){a={open:function(a,c,d,e){var f=[];b("isTruthy")(c)&&f.push("width="+c);b("isTruthy")(d)&&f.push("height="+d);var g=document.body;if(g!=null&&c!=null&&c!==0&&d!=null&&d!==0){var h="screenX"in window?window.screenX:window.screenLeft,i="screenY"in window?window.screenY:window.screenTop,j="outerWidth"in window?window.outerWidth:g.clientWidth;g="outerHeight"in window?window.outerHeight:g.clientHeight-22;h=Math.floor(h+(j-c)/2);j=Math.floor(i+(g-d)/2.5);f.push("left="+h);f.push("top="+j)}f.push("scrollbars");return window.open(a,e!=null&&e!==""?e:"_blank",f.join(","))}};e.exports=a}),null);
__d("PopupLink",["DOMEvent","DOMEventListener","Popup"],(function(a,b,c,d,e,f){a={listen:function(a,c,d){b("DOMEventListener").add(a,"click",function(e){new(b("DOMEvent"))(e).kill(),b("Popup").open(a.href,c,d)})}};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("Plugin",["Arbiter","ArbiterFrame"],(function(a,b,c,d,e,f){var g={CONNECT:"platform/plugins/connect",DISCONNECT:"platform/plugins/disconnect",ERROR:"platform/plugins/error",RELOAD:"platform/plugins/reload",DIALOG:"platform/plugins/dialog",connect:function(a,c){a={identifier:a,href:a,story_fbid:c};b("Arbiter").inform(g.CONNECT,a);b("ArbiterFrame").inform(g.CONNECT,a)},disconnect:function(a,c){a={identifier:a,href:a,story_fbid:c};b("Arbiter").inform(g.DISCONNECT,a);b("ArbiterFrame").inform(g.DISCONNECT,a)},error:function(a,c){b("Arbiter").inform(g.ERROR,{action:a,content:c})},reload:function(a){b("Arbiter").inform(g.RELOAD,{reloadUrl:a||""}),b("ArbiterFrame").inform(g.RELOAD,{reloadUrl:a||""})},reloadOtherPlugins:function(a,c){b("ArbiterFrame").inform(g.RELOAD,{reloadUrl:"",reload:a||"",identifier:c||""})}};e.exports=g}),null);
__d("PluginBundleInit",["DOM"],(function(a,b,c,d,e,f){e.exports={init:function(){var a=document.getElementById("jsbundle-loader");a&&b("DOM").remove(a)}}}),null);
__d("PluginDOMEventListener",["DOMEventListener","Log","UserAgent","promiseDone"],(function(a,b,c,d,e,f){var g=!b("UserAgent").isBrowser("Safari < 12")&&typeof document.hasStorageAccess==="function",h=!g,i=!1;!h&&g&&b("promiseDone")(document.hasStorageAccess(),function(a){b("Log").debug("hasStorageAccess=%s",a),h=a},function(a){return b("Log").warn("Storage access check failed: %s",a)});a={add:function(a,c,d,e){e===void 0&&(e=!1);if(!g||h||i)return b("DOMEventListener").add.apply(this,arguments);else{var f=function(){for(var a=arguments.length,c=new Array(a),e=0;e<a;e++)c[e]=arguments[e];if(h||i)return d.apply(this,c);else{var f=document.requestStorageAccess().then(function(a){b("Log").debug("Storage access request granted.");h=!0;return d.apply(this,c)}.bind(this),function(a){b("Log").warn("Storage access request denied.");i=!0;return d.apply(this,c)}.bind(this));b("promiseDone")(f)}};return b("DOMEventListener").add.call(this,a,c,f,e)}},remove:b("DOMEventListener").remove};e.exports=a}),null);
__d("PluginITP",["PluginDOMEventListener","promiseDone"],(function(a,b,c,d,e,f){a={init:function(){if(!("hasStorageAccess"in document))return;b("promiseDone")(document.hasStorageAccess(),function(a){document.body&&!a&&b("PluginDOMEventListener").add(document.body,"click",function(){location.reload()})})}};e.exports=a}),null);
__d("Locale",["SiteData"],(function(a,b,c,d,e,f){function a(){return b("SiteData").is_rtl}e.exports={isRTL:a}}),null);
__d("ObservableMixin",[],(function(a,b,c,d,e,f){function a(){this.__observableEvents={}}a.prototype={inform:function(a){var b=Array.prototype.slice.call(arguments,1),c=Array.prototype.slice.call(this.getSubscribers(a));for(var d=0;d<c.length;d++){if(c[d]===null)continue;try{c[d].apply(this,b)}catch(a){window.setTimeout(function(){throw a},0)}}return this},getSubscribers:function(a){return this.__observableEvents[a]||(this.__observableEvents[a]=[])},clearSubscribers:function(a){a&&(this.__observableEvents[a]=[]);return this},subscribe:function(a,b){a=this.getSubscribers(a);a.push(b);return this},unsubscribe:function(a,b){a=this.getSubscribers(a);for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}return this}};e.exports=a}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("AssertionError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("Assert",["AssertionError","sprintf"],(function(a,b,c,d,e,f){function g(a,c){if(typeof a!=="boolean"||!a)throw new(b("AssertionError"))(c);return a}function h(a,c,d){var e;if(c===void 0)e="undefined";else if(c===null)e="null";else{var f=Object.prototype.toString.call(c);e=/\s(\w*)/.exec(f)[1].toLowerCase()}g(a.indexOf(e)!==-1,d||b("sprintf")("Expression is of type %s, not %s",e,a));return c}function a(a,b,c){g(b instanceof a,c||"Expression not instance of type");return b}function i(a,b){j["is"+a]=b,j["maybe"+a]=function(a,c){a!=null&&b(a,c)}}var j={isInstanceOf:a,isTrue:g,isTruthy:function(a,b){return g(!!a,b)},type:h,define:function(a,b){a=a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase(),i(a,function(a,c){g(b(a),c)})}};["Array","Boolean","Date","Function","Null","Number","Object","Regexp","String","Undefined"].forEach(function(a){i(a,h.bind(null,a.toLowerCase()))});e.exports=j}),null);
__d("Type",["Assert"],(function(a,b,c,d,e,f){function g(){var a=this.__mixins;if(a)for(var b=0;b<a.length;b++)a[b].apply(this,arguments)}function h(a,b){if(b instanceof a)return!0;if(b instanceof g)for(var c=0;c<b.__mixins.length;c++)if(b.__mixins[c]==a)return!0;return!1}function i(a,b){var c=a.prototype;Array.isArray(b)||(b=[b]);for(var a=0;a<b.length;a++){var d=b[a];typeof d==="function"&&(c.__mixins.push(d),d=d.prototype);Object.keys(d).forEach(function(a){c[a]=d[a]})}}function j(a,c,d){var e=c&&Object.prototype.hasOwnProperty.call(c,"constructor")?c.constructor:function(){this.parent.apply(this,arguments)};b("Assert").isFunction(e);if(a&&a.prototype instanceof g===!1)throw new Error("parent type does not inherit from Type");a=a||g;function f(){}f.prototype=a.prototype;e.prototype=new f();c&&Object.assign(e.prototype,c);e.prototype.constructor=e;e.parent=a;e.prototype.__mixins=a.prototype.__mixins?Array.prototype.slice.call(a.prototype.__mixins):[];d&&i(e,d);e.prototype.parent=function(){this.parent=a.prototype.parent,a.apply(this,arguments)};e.prototype.parentCall=function(b){return a.prototype[b].apply(this,Array.prototype.slice.call(arguments,1))};e.extend=function(a,b){return j(this,a,b)};return e}Object.assign(g.prototype,{instanceOf:function(a){return h(a,this)}});Object.assign(g,{extend:function(a,b){return typeof a==="function"?j.apply(null,arguments):j(null,a,b)},instanceOf:h});e.exports=g}),null);
__d("sdk.Model",["ObservableMixin","Type"],(function(a,b,c,d,e,f){"use strict";a=b("Type").extend({constructor:function(a){this.parent();var b={},c=this;Object.keys(a).forEach(function(d){b[d]=a[d],c["set"+d]=function(a){if(a===b[d])return c;b[d]=a;c.inform(d+".change",a);return c},c["get"+d]=function(){return b[d]}})}},b("ObservableMixin"));e.exports=a}),null);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(function(a,b,c,d,e,f){var g={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},h=new(b("sdk.Model"))({AccessToken:"",AutoLogAppEvents:!1,ClientID:"",CookieUserID:"",EnforceHttps:!1,Environment:g.UNKNOWN,GraphDomain:"",Initialized:!1,IsVersioned:!1,KidDirectedSite:void 0,Locale:(a=b("JSSDKRuntimeConfig")).locale,LoggedIntoFacebook:void 0,LoginStatus:void 0,Revision:a.revision,Rtl:a.rtl,Scope:void 0,SDKAB:a.sdkab,SDKUrl:a.sdkurl,SDKNS:a.sdkns,UseCookie:!1,UseLocalStorage:!0,UserID:"",Version:void 0});Object.assign(h,{ENVIRONMENTS:g,isEnvironment:function(a){var b=this.getEnvironment();return(a|b)===b},isCanvasEnvironment:function(){return this.isEnvironment(g.CANVAS)||this.isEnvironment(g.PAGETAB)}});(function(){var a=/app_runner/.test(window.name)?g.PAGETAB:/iframe_canvas/.test(window.name)?g.CANVAS:g.UNKNOWN;(a|g.PAGETAB)===a&&(a|=g.CANVAS);h.setEnvironment(a)})();e.exports=h}),null);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(function(a,b,c,d,e,f,g){a={resolve:function(a){var c="https";if(a==="graph_domain"){var d=b("sdk.Runtime").getGraphDomain();d?a="graph_".concat(d):a="graph"}if(a in b("UrlMapConfig"))return c+"://"+b("UrlMapConfig")[a];a in b("UrlMapConfig")||g(0,2511,a);return""}};e.exports=a}),null);
__d("getOffsetParent",["Style"],(function(a,b,c,d,e,f){function g(a){a=a.parentNode;if(!a||a===document.documentElement)return document.documentElement;return b("Style").get(a,"position")!=="static"?a:a===document.body?document.documentElement:g(a)}e.exports=g}),null);
__d("PluginResize",["Locale","Log","UnverifiedXD","getOffsetParent","getStyleProperty"],(function(a,b,c,d,e,f){function g(a){a=a||document.body;var c=0,d=b("getOffsetParent")(a);b("Locale").isRTL()&&d?c=d.offsetWidth-a.offsetLeft-a.offsetWidth:b("Locale").isRTL()||(c=a.offsetLeft);return h(a)+c}function h(a){return Math.ceil(parseFloat(b("getStyleProperty")(a,"width")))||a.offsetWidth}function i(a){a=a||document.body;return a.offsetHeight+a.offsetTop}function j(a,b,c){this.calcWidth=a||g,this.calcHeight=b||i,this.width=void 0,this.height=void 0,this.event=c||"resize"}Object.assign(j.prototype,{resize:function(){var a=this.calcWidth(),c=this.calcHeight();(a!==this.width||c!==this.height)&&(b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)",a,c,this.event),this.width=a,this.height=c,b("UnverifiedXD").send({type:this.event,width:a,height:c}));return this},auto:function(a){setInterval(this.resize.bind(this),a||250);return this}});j.auto=function(a,b,c){return new j(g.bind(null,a),i.bind(null,a),b).resize().auto(c)};j.autoHeight=function(a,b,c,d){return new j(function(){return a},i.bind(null,b),c).resize().auto(d)};j.getElementWidth=h;e.exports=j}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$2={},this.$1=0,a&&this.addAll(a)}var b=a.prototype;b.add=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};b.addAll=function(a){a.forEach(this.add,this);return this};b.remove=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};b.removeAll=function(a){a.forEach(this.remove,this);return this};b.toArray=function(){return Object.keys(this.$2)};b.toMap=function(a){var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};b.contains=function(a){return Object.prototype.hasOwnProperty.call(this.$2,a)};b.count=function(){return this.$1};b.clear=function(){this.$2={};this.$1=0;return this};b.clone=function(){return new a(this)};b.forEach=function(a,b){Object.keys(this.$2).forEach(a,b)};b.map=function(a,b){return Object.keys(this.$2).map(a,b)};b.some=function(a,b){return Object.keys(this.$2).some(a,b)};b.every=function(a,b){return Object.keys(this.$2).every(a,b)};b.filter=function(b,c){return new a(Object.keys(this.$2).filter(b,c))};b.union=function(a){return this.clone().addAll(a)};b.intersect=function(a){return this.filter(function(b){return a.contains(b)})};b.difference=function(a){var b=this;return a.filter(function(a){return!b.contains(a)})};b.equals=function(a){var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};return a}();e.exports=a}),null);
__d("PlatformVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function(a,b,c,d,e,f,g){var h=new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),i=location.pathname;i=i.substring(1,i.indexOf("/",1));var j=h.contains(i)?i:b("PlatformVersions").versions.UNVERSIONED;function k(a,c){if(c==b("PlatformVersions").versions.UNVERSIONED)return a;h.contains(c)||g(0,3769);a=a.indexOf("/")!==0?"/"+a:a;return"/"+c+a}function a(){return b("PlatformVersions").LATEST}function c(a){return a.setPath(k(a.getPath(),j))}function d(a){return k(a,j)}function f(a){return h.contains(a.substring(1,a.indexOf("/",1)))?a.substring(a.indexOf("/",1)):a}i={addVersionToPath:k,getLatestVersion:a,versionAwareURI:c,versionAwarePath:d,getUnversionedPath:f};e.exports=i}),null);
__d("PlatformWidgetEndpoint",["PlatformVersioning"],(function(a,b,c,d,e,f){function a(a,c){return b("PlatformVersioning").versionAwarePath("/dialog/"+a+(c?"/"+c:""))}function c(a,c){return b("PlatformVersioning").versionAwarePath("/plugins/"+a+(c?"/"+c:""))}function d(a){return/^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a))}function f(a){return/^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a))}a={dialog:a,plugins:c,isPluginEndpoint:d,isDialogEndpoint:f};e.exports=a}),null);
__d("PluginReturn",["invariant","Arbiter","Log","PlatformDialog","PlatformWidgetEndpoint","Plugin","URI"],(function(a,b,c,d,e,f,g){var h;b("Arbiter").subscribe(b("PlatformDialog").RESPONSE,function(a,c){if(c.error_code){b("Log").debug("Plugin Return Error (%s): %s",c.error_code,c.error_message||c.error_description);return}b("Plugin").reload(c.plugin_reload)});var i={auto:function(){b("Arbiter").subscribe(b("Plugin").RELOAD,function(a,b){a=typeof b==="object"?b.reloadUrl:b;i.reload(a)})},syncPlugins:function(){b("Arbiter").subscribe(b("Plugin").RELOAD,function(a,b){b.crossFrame&&i.reload(b.reloadUrl,b.reload,b.identifier)})},reload:function(a,c,d){d=(h||(h=b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload",c).addQueryData("id",d);if(a){var c=new(h||(h=b("URI")))(a);b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath())||g(0,1120);d.setPath(c.getPath()).addQueryData(c.getQueryData())}window.location.replace(d.toString())}};e.exports=i}),null);
__d("BanzaiODS",["invariant","Banzai","Random","gkx"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(){this.$1={},this.$2={}}var c=a.prototype;c.setEntitySample=function(a,c){this.$2[a]=b("Random").random()<c?c:0};c.bumpEntityKey=function(a,b,c,d){d===void 0&&(d=1),this.$3(a,b,c,d)};c.bumpFraction=function(a,b,c,d,e){d===void 0&&(d=1),e===void 0&&(e=1),this.$3(a,b,c,d,e)};c.flush=function(a){if(Object.keys(this.$1).length===0)return;b("Banzai").post("categorized_ods",this.$1,a);this.$1={}};c.create=function(){return new a()};c.$3=function(a,b,c,d,e){var f;d===void 0&&(d=1);e===void 0&&(e=1);var g=(f=this.$2[b])!=null?f:null;if(g!=null&&g<=0)return;var h=this.$1[a]||(this.$1[a]={}),i=h[b]||(h[b]={}),j=i[c]||(i[c]=[0]);d=Number(d);e=Number(e);g>0&&(d/=g,e/=g);if(!isFinite(d)||!isFinite(e))return;j[0]+=d;arguments.length>=5&&(j[1]||(j[1]=0),j[1]+=e)};return a}();var h=new a();b("Banzai").subscribe(b("Banzai").SEND,function(){return h.flush()});e.exports=h}),null);
__d("BanzaiScuba",["Banzai","FBLogger"],(function(a,b,c,d,e,f){var g="scuba_sample";a=function(){"use strict";function a(a,c,d){this.posted=!1,a||b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=c,this.options=d}var c=a.prototype;c.$2=function(a,c,d){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[c]=d;return a};c.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};c.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};c.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};c.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};c.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};c.post=function(a){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var c={};c._ds=this.dataset;c._options=this.options;this.normal&&(c.normal=this.normal);this["int"]&&(c["int"]=this["int"]);this.denorm&&(c.denorm=this.denorm);this.tags&&(c.tags=this.tags);this.normvector&&(c.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(c._lid=this.$1);b("Banzai").post(g,c,a);this.posted=!0};return a}();e.exports=a}),null);
__d("GeneratedLoggerUtils",["invariant","Banzai"],(function(a,b,c,d,e,f,g){"use strict";a=b("Banzai").post;window.location.search.indexOf("showlog")>-1&&(a=function(a,c,d){b("Banzai").post(a,c,d)});c={log:a,serializeVector:function(a){if(!a)return a;if(Array.isArray(a))return a;if(a.toArray){var b=a;return b.toArray()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"])return Array.from(a);g(0,3874,a)},serializeMap:function(a){if(!a)return a;if(a.toJS){var b=a;return b.toJS()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]){b=a;var c={};for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;c[f[0]]=f[1]}return c}if(Object.prototype.toString.call(a)==="[object Object]")return a;g(0,3875,a)},checkExtraDataFieldNames:function(a,b){Object.keys(a).forEach(function(a){Object.prototype.hasOwnProperty.call(b,a)&&g(0,3876,a)})},warnForInvalidFieldNames:function(a,b,c,d){},throwIfNull:function(a,b){a||g(0,3877,b);return a}};e.exports=c}),null);
__d("InlineFbtResultImpl",["cx","FbtHooks","FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f,g){function h(a,c,d,e){var f="_4qba";e!=null&&e!=""&&(c==="TRANSLATION"?f="_4qbb":c==="APPROVE"?f="_4qbc":c==="REPORT"&&(f="_4qbd"));return{$$typeof:b("FbtReactUtil").REACT_ELEMENT_TYPE,type:"em",key:null,ref:null,props:{className:f,"data-intl-hash":e,"data-intl-translation":d,"data-intl-trid":"",children:a,suppressHydrationWarning:!0},_owner:null}}var i=function(a){return h(a.content,a.inlineMode,a.translation,a.hash)};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){var g;g=a.call(this,c,b("FbtHooks").getErrorListener({translation:e,hash:f}))||this;g.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;g.key=null;g.ref=null;g.type=i;g.props={content:c,inlineMode:d,translation:e,hash:f};return g}return c}(b("FbtResultBase"));e.exports=a}),null);
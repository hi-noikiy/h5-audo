//----------------------------------------jquery.transit.js v1.0.1
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){function d(a){var c,d,e,f;if(a in b.style)return a;for(c=["Moz","Webkit","O","ms"],d=a.charAt(0).toUpperCase()+a.substr(1),e=0;e<c.length;++e)if(f=c[e]+d,f in b.style)return f}function e(){return b.style[c.transform]="",b.style[c.transform]="rotateY(90deg)",""!==b.style[c.transform]}function j(a){return"string"==typeof a&&this.parse(a),this}function k(a,b,c){b===!0?a.queue(c):b?a.queue(b,c):a.each(function(){c.call(this)})}function l(b){var d=[];return a.each(b,function(b){b=a.camelCase(b),b=a.transit.propertyMap[b]||a.cssProps[b]||b,b=o(b),c[b]&&(b=o(c[b])),-1===a.inArray(b,d)&&d.push(b)}),d}function m(b,c,d,e){var g,h,f=l(b);return a.cssEase[d]&&(d=a.cssEase[d]),g=""+q(c)+" "+d,parseInt(e,10)>0&&(g+=" "+q(e)),h=[],a.each(f,function(a,b){h.push(b+" "+g)}),h.join(", ")}function n(b,d){d||(a.cssNumber[b]=!0),a.transit.propertyMap[b]=c.transform,a.cssHooks[b]={get:function(c){var d=a(c).css("transit:transform");return d.get(b)},set:function(c,d){var e=a(c).css("transit:transform");e.setFromString(b,d),a(c).css({"transit:transform":e})}}}function o(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function p(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function q(b){var c=b;return"string"!=typeof c||c.match(/^[\-0-9\.]+/)||(c=a.fx.speeds[c]||a.fx.speeds._default),p(c,"ms")}var b,c,f,g,h,i;a.transit={version:"1.0.1",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1},b=document.createElement("div"),c={},f=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,c.transition=d("transition"),c.transitionDelay=d("transitionDelay"),c.transform=d("transform"),c.transformOrigin=d("transformOrigin"),c.filter=d("Filter"),c.transform3d=e(),g={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},h=c.transitionEnd=g[c.transition]||null;for(i in c)c.hasOwnProperty(i)&&"undefined"==typeof a.support[i]&&(a.support[i]=c[i]);return b=null,a.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},a.cssHooks["transit:transform"]={get:function(b){return a(b).data("transform")||new j},set:function(b,d){var e=d;e instanceof j||(e=new j(e)),b.style[c.transform]="WebkitTransform"!==c.transform||f?e.toString():e.toString(!0),a(b).data("transform",e)}},a.cssHooks.transform={set:a.cssHooks["transit:transform"].set},a.cssHooks.filter={get:function(a){return a.style[c.filter]},set:function(a,b){a.style[c.filter]=b}},a.fn.jquery<"1.8"&&(a.cssHooks.transformOrigin={get:function(a){return a.style[c.transformOrigin]},set:function(a,b){a.style[c.transformOrigin]=b}},a.cssHooks.transition={get:function(a){return a.style[c.transition]},set:function(a,b){a.style[c.transition]=b}}),n("scale"),n("scaleX"),n("scaleY"),n("translateX"),n("translateY"),n("translateZ"),n("translate"),n("translate3d"),n("rotate"),n("rotateX"),n("rotateY"),n("rotate3d"),n("perspective"),n("skewX"),n("skewY"),n("x",!0),n("y",!0),n("z",!0),j.prototype={setFromString:function(a,b){var c="string"==typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a),j.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=p(a,"deg")},rotateX:function(a){this.rotateX=p(a,"deg")},rotateY:function(a){this.rotateY=p(a,"deg")},scale:function(a,b){void 0===b&&(b=a),this.scale=a+","+b},skewX:function(a){this.skewX=p(a,"deg")},skewY:function(a){this.skewY=p(a,"deg")},perspective:function(a){this.perspective=p(a,"px")},translateX:function(a){this.translateX=p(a,"px")},translateY:function(a){this.translateY=p(a,"px")},translateZ:function(a){this.translateZ=p(a,"px")},x:function(a){this.set("translate",a,null,null)},y:function(a){this.set("translate",null,a,null)},z:function(a){this.set("translate",null,null,a)},translate:function(a,b,c){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==a&&void 0!==a&&(this._translateX=p(a,"px")),null!==b&&void 0!==b&&(this._translateY=p(b,"px")),null!==c&&void 0!==c&&(this._translateZ=p(c,"px")),null===this._translateZ||void 0===this._translateZ?this.translate=this._translateX+","+this._translateY:(this.translate="0,0",this.translate3d=this._translateX+","+this._translateY+","+this._translateZ)}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},z:function(){return this._translateZ||0},scale:function(){var a=(this.scale||"1,1").split(",");return a[0]&&(a[0]=parseFloat(a[0])),a[1]&&(a[1]=parseFloat(a[1])),a[0]===a[1]?a[0]:a},rotate3d:function(){var b,a=(this.rotate3d||"0,0,0,0deg").split(",");for(b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));return a[3]&&(a[3]=p(a[3],"deg")),a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,c,d){b.setFromString(c,d)})},toString:function(a){var d,b=[];for(d in this)if(this.hasOwnProperty(d)){if(!c.transform3d&&("rotateX"===d||"rotateY"===d||"perspective"===d||"transformOrigin"===d))continue;"_"!==d[0]&&(a&&"scale"===d?b.push(d+"3d("+this[d]+",1)"):a&&"translate"===d?b.push(d+"3d("+this[d]+",0)"):b.push(d+"("+this[d]+")"))}return b.join(" ")}},a.fn.transition=a.fn.transit=function(b,d,e,f){var n,o,p,r,s,t,u,g=this,i=0,j=!0,l=a.extend(!0,{},b);return"function"==typeof d&&(f=d,d=void 0),"object"==typeof d&&(e=d.easing,i=d.delay||0,j="undefined"==typeof d.queue?!0:d.queue,f=d.complete,d=d.duration),"function"==typeof e&&(f=e,e=void 0),"undefined"!=typeof l.easing&&(e=l.easing,delete l.easing),"undefined"!=typeof l.duration&&(d=l.duration,delete l.duration),"undefined"!=typeof l.complete&&(f=l.complete,delete l.complete),"undefined"!=typeof l.queue&&(j=l.queue,delete l.queue),"undefined"!=typeof l.delay&&(i=l.delay,delete l.delay),"undefined"==typeof d&&(d=a.fx.speeds._default),"undefined"==typeof e&&(e=a.cssEase._default),d=q(d),n=m(l,d,e,i),o=a.transit.enabled&&c.transition,p=o?parseInt(d,10)+parseInt(i,10):0,0===p?(r=function(a){g.css(l),f&&f.apply(g),a&&a()},k(g,j,r),g):(s={},t=function(b){var d=!1,e=function(){d&&g.unbind(h,e),p>0&&g.each(function(){this.style[c.transition]=s[this]||null}),"function"==typeof f&&f.apply(g),"function"==typeof b&&b()};p>0&&h&&a.transit.useTransitionEnd?(d=!0,g.bind(h,e)):window.setTimeout(e,p),g.each(function(){p>0&&(this.style[c.transition]=n),a(this).css(l)})},u=function(a){this.offsetWidth=this.offsetWidth,t(a)},k(g,j,u),this)},a.transit.getTransitionValue=m,a});

//----------------------------------------PxLoader.js v1.1.2
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.PxLoader=b()}):"object"==typeof module&&module.exports?module.exports=b():a.PxLoader=b()}(this,function(){function a(a){a=a||{},this.settings=a,null==a.statusInterval&&(a.statusInterval=5e3),null==a.loggingDelay&&(a.loggingDelay=2e4),null==a.noProgressTimeout&&(a.noProgressTimeout=1/0);var c,d=[],e=[],f=[],g=Date.now(),h={QUEUED:0,WAITING:1,LOADED:2,ERROR:3,TIMEOUT:4},i=function(a){return null==a?[]:Array.isArray(a)?a:[a]};this.add=function(a){a.tags=new b(a.tags),null==a.priority&&(a.priority=1/0),d.push({resource:a,status:h.QUEUED})},this.addProgressListener=function(a,c){f.push({callback:a,tags:new b(c)})},this.addCompletionListener=function(a,c){e.push({tags:new b(c),callback:function(b){b.completedCount===b.totalCount&&a(b)}})};var j=function(a){a=i(a);var b=function(b){for(var c=b.resource,d=1/0,e=0;e<c.tags.length;e++)for(var f=0;f<Math.min(a.length,d)&&!(c.tags.all[e]===a[f]&&f<d&&(d=f,0===d))&&0!==d;f++);return d};return function(a,c){var d=b(a),e=b(c);return d<e?-1:d>e?1:a.priority<c.priority?-1:a.priority>c.priority?1:0}};this.start=function(a){c=Date.now();var b=j(a);d.sort(b);for(var e=0,f=d.length;e<f;e++){var g=d[e];g.status=h.WAITING,g.resource.start(this)}setTimeout(k,100)};var k=function(){for(var b=!1,c=Date.now()-g,e=c>=a.noProgressTimeout,f=c>=a.loggingDelay,i=0,j=d.length;i<j;i++){var l=d[i];l.status===h.WAITING&&(l.resource.checkStatus&&l.resource.checkStatus(),l.status===h.WAITING&&(e?l.resource.onTimeout():b=!0))}f&&b&&n(),b&&setTimeout(k,a.statusInterval)};this.isBusy=function(){for(var a=0,b=d.length;a<b;a++)if(d[a].status===h.QUEUED||d[a].status===h.WAITING)return!0;return!1};var l=function(a,b){var c,i,j,k,l,n=null;for(c=0,i=d.length;c<i;c++)if(d[c].resource===a){n=d[c];break}if(null!=n&&n.status===h.WAITING)for(n.status=b,g=Date.now(),j=f.concat(e),c=0,i=j.length;c<i;c++)k=j[c],l=0===k.tags.length||a.tags.intersects(k.tags),l&&m(n,k)};this.onLoad=function(a){l(a,h.LOADED)},this.onError=function(a){l(a,h.ERROR)},this.onTimeout=function(a){l(a,h.TIMEOUT)};var m=function(a,b){var c,e,f,g,i=0,j=0;for(c=0,e=d.length;c<e;c++)f=d[c],g=!1,g=0===b.tags.length||f.resource.tags.intersects(b.tags),g&&(j++,f.status!==h.LOADED&&f.status!==h.ERROR&&f.status!==h.TIMEOUT||i++);b.callback({resource:a.resource,loaded:a.status===h.LOADED,error:a.status===h.ERROR,timeout:a.status===h.TIMEOUT,completedCount:i,totalCount:j})},n=this.log=function(a){if(window.console){var b=Math.round((Date.now()-c)/1e3);window.console.log("PxLoader elapsed: "+b+" sec");for(var e=0,f=d.length;e<f;e++){var g=d[e];if(a||g.status===h.WAITING){var i="PxLoader: #"+e+" "+g.resource.getName();switch(g.status){case h.QUEUED:i+=" (Not Started)";break;case h.WAITING:i+=" (Waiting)";break;case h.LOADED:i+=" (Loaded)";break;case h.ERROR:i+=" (Error)";break;case h.TIMEOUT:i+=" (Timeout)"}g.resource.tags.length>0&&(i+=" Tags: ["+g.resource.tags.all.join(",")+"]"),window.console.log(i)}}}}}function b(a){if(this.all=[],this.first=null,this.length=0,this.lookup={},a){if(Array.isArray(a))this.all=a.slice(0);else if("object"==typeof a)for(var b in a)a.hasOwnProperty(b)&&this.all.push(b);else this.all.push(a);this.length=this.all.length,this.length>0&&(this.first=this.all[0]);for(var c=0;c<this.length;c++)this.lookup[this.all[c]]=!0}}return b.prototype.intersects=function(a){if(0===this.length||0===a.length)return!1;if(1===this.length&&1===a.length)return this.first===a.first;if(a.length<this.length)return a.intersects(this);for(var b in this.lookup)if(a.lookup[b])return!0;return!1},a}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderImage=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderImage=b(a.PxLoader)}(this,function(a){function b(a,b,c,d){d=d||{};var e,f=this,g=null;e=this.img=new Image,d.origin&&(e.crossOrigin=d.origin),this.tags=b,this.priority=c;var h=function(){"complete"===f.img.readyState&&i()},i=function(){g.onLoad(f),l()},j=function(){g.onError(f),l()},k=function(){g.onTimeout(f),l()},l=function(){f.unbind("load",i),f.unbind("readystatechange",h),f.unbind("error",j)};this.start=function(b){g=b,f.bind("load",i),f.bind("readystatechange",h),f.bind("error",j),f.img.src=a},this.checkStatus=function(){h()},this.onTimeout=function(){f.img.complete?i():k()},this.getName=function(){return a},this.bind=function(a,b){f.img.addEventListener(a,b,!1)},this.unbind=function(a,b){f.img.removeEventListener(a,b,!1)}}return a.prototype.addImage=function(a,c,d,e){var f=new b(a,c,d,e);return this.add(f),f.img},b}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderSound=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderSound=b(a.PxLoader)}(this,function(a){function b(a,b,c,d,e){var f=this,g=null,h=navigator.userAgent.match(/(ipad|iphone|ipod)/i),i=navigator.userAgent.match(/android/i);this.useGlobalHTML5Audio=h||i,this.tags=c,this.priority=d,this.sound=soundManager.createSound({id:a,url:b,autoLoad:!1,onload:function(){g.onLoad(f)},onsuspend:function(){g.onTimeout(f)},whileloading:function(){var a=this.bytesLoaded,b=this.bytesTotal;a>0&&a===b&&g.onLoad(f)}}),this.start=function(a){g=a,this.useGlobalHTML5Audio?g.onTimeout(f):this.sound.load()},this.checkStatus=function(){switch(f.sound.readyState){case 0:break;case 1:break;case 2:g.onError(f);break;case 3:g.onLoad(f)}},this.onTimeout=function(){g.onTimeout(f)},this.getName=function(){return b}}return a.prototype.addSound=function(a,c,d,e,f){var g=new b(a,c,d,e,f);return this.add(g),g.sound},b}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderVideo=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderVideo=b(a.PxLoader)}(this,function(a){function b(a,b,c,d){d=d||{};var e,f=this,g=null;this.readyEventName="canplaythrough",e=this.video=document.createElement("video"),d.origin&&(e.crossOrigin=d.origin),e.preload="auto",this.tags=b,this.priority=c;var h=function(){4===f.video.readyState&&i()},i=function(){g.onLoad(f),l()},j=function(){g.onError(f),l()},k=function(){g.onTimeout(f),l()},l=function(){f.unbind("load",i),f.unbind(f.readyEventName,h),f.unbind("error",j),f.video.src=""};this.start=function(b){g=b,f.bind("load",i),f.bind(f.readyEventName,h),f.bind("error",j),f.bind("suspend",i),f.video.src=a,f.video.load()},this.checkStatus=function(){h()},this.onTimeout=function(){4!==f.video.readyState?i():k()},this.getName=function(){return a},this.bind=function(a,b){f.video.addEventListener(a,b,!1)},this.unbind=function(a,b){f.video.removeEventListener(a,b,!1)}}return a.prototype.addVideo=function(a,c,d,e){var f=new b(a,c,d,e);return this.add(f),f.video},b}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderData=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderData=b(a.PxLoader)}(this,function(a){function b(a,b,c,d){d=d||{};var e=this,f=null;this.tags=b,this.priority=c,this.xhr=new XMLHttpRequest;var g=function(){4===e.xhr.readyState&&(200===e.xhr.status?h():i())},h=function(){f.onLoad(e),k()},i=function(){f.onError(e),k()},j=function(){f.onTimeout(e),k()},k=function(){e.unbind("readystatechange",g),e.unbind("error",i)};this.start=function(b){f=b,e.bind("readystatechange",g),e.bind("error",i),e.xhr.open("GET",a,!0),e.xhr.send(null),e.xhr.responseType=d.responseType?d.responseType:""},this.checkStatus=function(){g()},this.onTimeout=function(){4===e.xhr.readyState?200===e.xhr.status?h():i():j()},this.getName=function(){return a},this.bind=function(a,b){e.xhr.addEventListener(a,b,!1)},this.unbind=function(a,b){e.xhr.removeEventListener(a,b,!1)}}return a.prototype.addData=function(a,c,d,e){var f=new b(a,c,d,e);return this.add(f),f.xhr},b}),function(a,b){"function"==typeof define&&define.amd?define(["pxloader"],function(c){return a.PxLoaderAudio=b(c)}):"object"==typeof module&&module.exports?module.exports=b(require("pxloader")):a.PxLoaderAudio=b(a.PxLoader)}(this,function(a){function b(a,b,c,d){d=d||{};var e,f=this,g=null;this.readyEventName="canplaythrough",e=this.audio=document.createElement("audio"),d.origin&&(e.crossOrigin=d.origin),e.preload="auto",this.tags=b,this.priority=c;var h=function(){4===f.audio.readyState&&i()},i=function(){g.onLoad(f),l()},j=function(){g.onError(f),l()},k=function(){g.onTimeout(f),l()},l=function(){f.unbind("load",i),f.unbind(f.readyEventName,h),f.unbind("error",j),f.audio.src=""};this.start=function(b){g=b,f.bind("load",i),f.bind(f.readyEventName,h),f.bind("error",j),f.bind("suspend",i),f.audio.src=a,f.audio.load()},this.checkStatus=function(){h()},this.onTimeout=function(){4!==f.audio.readyState?i():k()},this.getName=function(){return a},this.bind=function(a,b){f.audio.addEventListener(a,b,!1)},this.unbind=function(a,b){f.audio.removeEventListener(a,b,!1)}}return a.prototype.addAudio=function(a,c,d,e){var f=new b(a,c,d,e);return this.add(f),f.audio},b});

//-----------------------------------swipe.js
!function(){$.event.special.swipe={setup:function(){function d(c){var d=c.originalEvent.touches[0];b={time:(new Date).getTime(),coords:[d.pageX,d.pageY]},a.on("touchmove",e).one("touchend",f)}function e(a){var d=a.originalEvent.changedTouches[0];c={time:(new Date).getTime(),coords:[d.pageX,d.pageY]},(Math.abs(b.coords[1]-c.coords[1])>10||Math.abs(b.coords[0]-c.coords[0])>5)&&a.preventDefault()}function f(){a.off("touchmove",e),b&&c&&c.time-b.time<1e3&&(Math.abs(b.coords[1]-c.coords[1])>15&&Math.abs(b.coords[0]-c.coords[0])<70?a.trigger("swipe").trigger(b.coords[1]>c.coords[1]?"swipeup":"swipedown"):Math.abs(b.coords[0]-c.coords[0])>15&&Math.abs(b.coords[1]-c.coords[1])<70&&a.trigger("swipe").trigger(b.coords[0]>c.coords[0]?"swipeleft":"swiperight")),b=c=void 0}var b,c,a=$(this);a.on("touchstart",d)}},$.each({swipeleft:"swipe",swiperight:"swipe",swipedown:"swipe",swipeup:"swipe"},function(a,b){$.event.special[a]={setup:function(){$(this).on(b,$.noop)}}})}();

//-----------------------------------touched.js
!function(){$.event.special.touched={setup:function(){function b(){a.one("touchmove",c).one("touchend",d)}function c(){a.off("touchend",d).one("touchstart",b)}function d(){a.off("touchmove",c).one("touchstart",b),a.trigger("touched")}var a=$(this);a.one("touchstart",b)}}}();

//-----------------------------------pinch.js
//2017.5.15
(function() {
    $.event.special.pinch = {
        setup:function() {
            var _this = $(this);
            //touch 
            var mutiTouch;
            var posLast1 = [], posLast2 = [], disLast, disSt, rotateSt, rotateLast;
            _this.on("touchstart", this_touchstart);
            //单指双指触控
            function this_touchstart(e) {
                $(this).on("touchmove", this_touchmove).one("touchend", this_touchend);
                if (e.originalEvent.touches.length == 1) {
                    mutiTouch = false;
                    posLast1 = [ e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY ];
                } else if (e.originalEvent.touches.length >= 2) {
                    mutiTouch = true;
                    posLast1 = [ e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY ];
                    posLast2 = [ e.originalEvent.touches[1].clientX, e.originalEvent.touches[1].clientY ];
                    disLast = imath.getDis(posLast1, posLast2);
                    rotateSt = rotateLast = imath.getDeg(posLast1, posLast2);
                }
            }
            //end func
            function this_touchmove(e) {
                if (e.originalEvent.touches.length == 1) {
                    var pos1 = [ e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY ];
                    _this.trigger("pinch").trigger("pinchmove", [ pos1[0] - posLast1[0], pos1[1] - posLast1[1] ]);
                    posLast1[0] = pos1[0];
                    posLast1[1] = pos1[1];
                } else if (e.originalEvent.touches.length >= 2) {
                    var pos1 = [ e.originalEvent.touches[0].clientX, e.originalEvent.touches[0].clientY ];
                    var pos2 = [ e.originalEvent.touches[1].clientX, e.originalEvent.touches[1].clientY ];
                    var dis = imath.getDis(pos1, pos2);
                    if (Math.abs(dis - disLast) > .5) {
                        _this.trigger("pinch").trigger("pinchscale", [ .025 * (dis - disLast) / Math.abs(dis - disLast) ]);
                    }
                    //end if
                    var rotate = imath.getDeg(pos1, pos2);
                    if (rotate != rotateLast) _this.trigger("pinch").trigger("pinchrotate", [ rotate - rotateLast ]);
                    posLast1[0] = pos1[0];
                    posLast1[1] = pos1[1];
                    posLast2[0] = pos2[0];
                    posLast2[1] = pos2[1];
                    disLast = dis;
                    rotateLast = rotate;
                }
            }
            //end func
            function this_touchend(e) {
                $(this).off("touchmove");
            }
        }
    };
    $.each({
        pinchmove:"pinch",
        pinchscale:"pinch",
        pinchrotate:"pinch"
    }, function(e, sourceEvent) {
        $.event.special[e] = {
            setup:function() {
                $(this).on(sourceEvent, $.noop);
            }
        };
    });
})();

//-----------------------------------com.js
function importCom(){function b(a){a.preventDefault()}function c(a,b,c,d){b&&$.isPlainObject(b)&&(b=JSON.stringify(b)),$.post("./http/httpPost.php",{api_url:a,post_data:b,action:d},function(a){c&&c(a)},"json")}function d(a,b){var c,d,e;if(b=b||0,c=a.split("<br/>"),0>=b||c.length<=b)return a;for(d="",e=0;b>e;e++)d+=c[e],b-1>e&&(d+="<br/>");return d}function e(a,b){var d,e,c=Math.ceil(a.length/b);if(1==c)return a;for(d="",e=0;c>e;e++)d+=0==e?a.substr(0,b)+"<br/>":c-1>e?a.substr(e*b,b)+"<br/>":a.substr(e*b);return d}function g(a){cancelAnimationFrame(a.timer),a.now=0,a.start=(new Date).getTime(),a.timer=null}function h(a,b,c,d){function f(){c?e.now++:e.now=(new Date).getTime()-e.start;var g=c?e.now==b:e.now>=b;g&&(e.now=0,e.start=(new Date).getTime(),a()),(d||!d&&!g)&&(e.timer=requestAnimationFrame(f))}var e={now:0,start:(new Date).getTime(),timer:null};return f(),e}var a={};return a.init=function(a){function c(){ibase.keyboard=!0}function d(){ibase.keyboard=!1}function e(){ibase.lock?requestAnimationFrame(e):a&&a()}function i(){setTimeout(function(){j(ibase.getOrient())},200)}function j(a){var b,c,d;ibase.keyboard||("portrait"==a?(console.log("screen portrait"),b=imath.autoSize([ibase.landscapeHeight,ibase.landscapeWidth],[window.innerWidth,window.innerHeight],ibase.landscapeScale),c=b[0]/ibase.landscapeHeight,console.log("window size:"+window.innerHeight+"/"+window.innerWidth),console.log("auto scale:"+c),f.css({width:ibase.landscapeWidth,height:ibase.landscapeHeight,rotate:90}),h.css({scale:c,x:0,y:-ibase.landscapeHeight,width:window.innerHeight/c,height:window.innerWidth/c}),"cover"==ibase.landscapeScale||"contain"==ibase.landscapeScale||"width"==ibase.landscapeScale||"height"==ibase.landscapeScale?g.css({scale:c,x:.5*(window.innerHeight/c-ibase.landscapeWidth),y:-ibase.landscapeHeight+.5*(window.innerWidth/c-ibase.landscapeHeight)+(os.iphone6Plus?4:0)}):(d=[window.innerWidth/ibase.landscapeHeight,window.innerHeight/ibase.landscapeWidth],console.log("auto scales:"+d),g.css({scaleX:d[0],scaleY:d[1],x:0,y:-ibase.landscapeHeight}))):(console.log("screen landscape"),b=imath.autoSize([ibase.landscapeWidth,ibase.landscapeHeight],[window.innerWidth,window.innerHeight],ibase.landscapeScale),c=b[0]/ibase.landscapeWidth,console.log("window size:"+window.innerWidth+"/"+window.innerHeight),console.log("auto scale:"+c),f.css({width:ibase.landscapeWidth,height:ibase.landscapeHeight,rotate:0}),h.css({scale:c,x:0,y:0,width:window.innerWidth/c,height:window.innerHeight/c}),"cover"==ibase.landscapeScale||"contain"==ibase.landscapeScale||"width"==ibase.landscapeScale||"height"==ibase.landscapeScale?g.css({scale:c,x:.5*(window.innerWidth/c-ibase.landscapeWidth),y:.5*(window.innerHeight/c-ibase.landscapeHeight)}):(d=[window.innerWidth/ibase.landscapeWidth,window.innerHeight/ibase.landscapeHeight],console.log("auto scales:"+d),g.css({scaleX:d[0],scaleY:d[1],x:0,y:0}))))}var b,f,g,h;os.android&&(b=$('input,textarea,[contenteditable="true"]'),b.length>0&&b.on("focus",c).on("blur",d)),"portrait"==ibase.dir?e():(f=$("article"),g=f.children(".container"),h=f.children(".interface"),j(ibase.getOrient(!0)),$(window).on("orientationchange",i),a&&a())},a.screenScrollEnable=function(){$(document).off("touchmove",b)},a.screenScrollUnable=function(){$(document).on("touchmove",b)},a.fadeIn=function(a,b,c){a&&(b=b||500,a.show().css({opacity:0}).transition({opacity:1},b,function(){c&&c($(this))}))},a.fadeOut=function(a,b,c){a&&(b=b||500,a.transition({opacity:0},b,function(){$(this).hide().css({opacity:1}),c&&c($(this))}))},a.popOn=function(b,c){function f(){e.closeBtn.length>0&&"button"==e.closeType?e.closeBtn.off(e.closeEvent,f):b.off(e.closeEvent,f),e.fade?a.fadeOut(b,e.fade,function(){e.remove&&b.remove()}):e.remove?b.remove():b.hide(),b.off("close",f),e.onClose&&e.onClose(b)}var d,e;b&&b.length>0&&(d={closeEvent:"touchend",closeType:"button",closeBtn:b.find("a.close"),remove:!1},e=$.extend(d,c),e.text&&b.find(".text").html(e.text),e.fade?a.fadeIn(b,e.fade):b.show(),e.closeBtn.length>0&&"button"==e.closeType?e.closeBtn.one(e.closeEvent,f):b.one(e.closeEvent,f),b.on("close",f))},a.popOff=function(a){a&&a.length>0&&a.trigger("close")},a.alert=function(b,c){if(b&&""!=b){var d=$('<aside class="alertBox"><div><p class="text"></p><p class="btn"><a href="javascript:;" class="close">确定</a></p></div></aside>').appendTo("landscape"==ibase.dir?"article>.interface":"body");a.popOn(d,{text:b,onClose:c,remove:!0,closeEvent:"click"})}},a.getQueryString=function(a){var b,c;return a&&""!=a?(b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b),null!=c?decodeURIComponent(c[2]):null):null},a.imageLoad=function(a,b){var c,d;if(a&&""!=a){if(c=new PxLoader,"string"===$.type(a)&&""!=a)c.addImage(a);else if("array"===$.type(a)&&a.length>0)for(d=0;d<a.length;d++)c.addImage(a[d]);c.addCompletionListener(function(){console.log("images load complete"),c=null,b&&b(a)}),c.start()}},a.objectPrint=function(a){var b,c;if(a){console.log("-----------------------------------------------------------------------------"),b="";for(c in a)b+=c+":"+a[c]+"  ";console.log(b),console.log("-----------------------------------------------------------------------------")}},a.checkStr=function(a,b){var c;if(a&&""!=a){switch(b=b||0){case 0:c=new RegExp(/^1[3-9]\d{9}$/);break;case 1:c=new RegExp(/^[1-9]\d{5}$/);break;case 2:c=new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);break;case 3:c=new RegExp(/^\d+$/);break;case 4:c=new RegExp(/^[a-zA-Z\u0391-\uFFE5]*[\w\u0391-\uFFE5]*$/);break;case 5:c=new RegExp(/^\w+$/);break;case 6:c=new RegExp(/^[\u0391-\uFFE5]+$/);break;case 7:c=new RegExp(/^[a-zA-Z\u0391-\uFFE5]+$/)}return c.exec($.trim(a))?!0:!1}return!1},a.post=function(a,b,d){a&&""!=a&&c(a,b,d,"post")},a.get=function(a,b,d){a&&""!=a&&c(a,b,d,"get")},a.keyboard=function(a,b,c){function f(b){b.target!=a[0]&&a.blur()}function g(){"portrait"!=ibase.dir||0!=window.orientation&&180!=window.orientation?"landscape"!=ibase.dir||90!=window.orientation&&-90!=window.orientation||($(window).height()<d?h():i()):$(window).height()<d?h():i()}function h(){b.css({height:e}),c&&c(!0)}function i(){c&&c(!1)}var d,e;a=a||$('input,textarea,[contenteditable="true"]'),b=b||a.parents("section"),a.length>0&&(os.ios?a.on("focus",function(){$(document).one("touchend",f)}):b.length>0&&(d=$(window).height(),e=b.height(),$(window).on("resize",g)))},a.shake=function(b,c){var d,e,f,g;b&&b.length>0&&(d={rx:5,ry:5,delay:33,now:0,max:5,restore:!0},e=$.extend(d,c),f=imath.randomRange(-e.rx,e.rx),g=imath.randomRange(-e.ry,e.ry),b.css({x:f,y:g}),e.now++,e.now>e.max?(e.restore&&b.css({x:0,y:0}),e.onComplete&&e.onComplete()):setTimeout(a.shake,e.delay,b,e))},a.textareaGet=function(a,b){var c,e;return b=b||0,c=a.val(),""==c?"":(e=c.replaceAll("\n","<br/>"),d(e,b))},a.textareaSet=function(a,b){""==b?a.val(""):a.val(b.replaceAll("<br/>","\n"))},a.textareaLock=function(b){function i(){c=a.setInterval(k,15),$(this).one("blur",j)}function j(){var j,k,l,m,n;if(a.clearInterval(c),$(this).one("focus",i),j=a.textareaGet(b,f),-1!=j.indexOf("<br/>")){for(k=j.split("<br/>"),l="",m=0;m<k.length;m++)l+=e(k[m],g),m<k.length-1&&(l+="<br/>");l=d(l,f),n=l.replaceAll("<br/>","\n"),b.val(n)}}function k(){var c=a.textareaGet(b,f);-1==c.indexOf("<br/>")?b.attr({maxlength:h}):b.attr({maxlength:h+2*(c.split("<br/>").length-1)})}var c,f,g,h;b&&b.length>0&&(f=parseInt(b.attr("rows"))||0,g=parseInt(b.attr("cols"))||0,h=parseInt(b.attr("maxlength"))||0,h=0==h?f*g:h,f>0&&g>0&&h>0&&b.one("focus",i))},a.textareaUnlock=function(a){a.off()},a.url=function(a,b){var d,c=-1;for(d in b)c++,a+=0==c?"?":"&",a+=d+"="+b[d];return a},a.setTimeout=function(a,b,c){return c=c||0,b>0&&a?h(a,b,c,!1):void 0},a.clearTimeout=function(a){a&&a.timer&&g(a)},a.setInterval=function(a,b,c){return c=c||0,b>0&&a?h(a,b,c,!0):void 0},a.clearInterval=function(a){a&&a.timer&&g(a)},a.canvas_send=function(a,b,c,d,e){var f;a&&(c=c||"test",d=d||"jpg",e=e||.8,f="png"==d?a.toDataURL("image/png").split(",")[1]:a.toDataURL("image/jpeg",e).split(",")[1],this.base64_send(f,b,c))},a.base64_send=function(a,b,c){a&&(c=c||"test",$.post("http://upload.be-xx.com/upload",{data:a,key:c},function(a){b&&b(a)}))},a}var icom=importCom();String.prototype.replaceAll=function(a,b){return this.replace(new RegExp(a,"gm"),b)};

//-----------------------------------math.js
function importMath(){var a={};return a.randomRange=function(a,b){var c;return c=Math.floor(Math.random()*(b-a+1))+a},a.randomSort=function(a){a&&a.length>1&&a.sort(function(){return.5-Math.random()})},a.randomPlus=function(){return Math.random()<.5?-1:1},a.autoSize=function(a,b,c){var d,e;return c=1===c||0===c?1===c?"cover":"contain":c||"cover",d=[],e=a[0]/a[1],d[0]=b[0],d[1]=Math.round(d[0]/e),"height"==c?(d[1]=b[1],d[0]=Math.round(d[1]*e)):"contain"==c?d[1]>b[1]&&(d[1]=b[1],d[0]=Math.round(d[1]*e)):"cover"==c?d[1]<b[1]&&(d[1]=b[1],d[0]=Math.round(d[1]*e)):"full"==c&&(d=[b[0],b[1]]),d},a.ease=function(a,b,c,d){c=c||10,d=d||.1;var e=b-a;return Math.abs(e)>d?e/c+a:b},a.toRadian=function(a){return a*Math.PI/180},a.toDegree=function(a){return 180*(a/Math.PI)},a.getDis=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(Math.pow(Math.abs(c),2)+Math.pow(Math.abs(d),2))},a.getDeg=function(a,b){var c,d,e;return a[0]==b[0]&&a[1]==b[1]?c=0:(d=b[1]-a[1],e=b[0]-a[0],c=180*Math.atan(d/e)/Math.PI,0>e?c=180+c:e>=0&&0>d&&(c=360+c)),c},a.hitTest=function(a,b,c,d){var e,f,g,h,i,j;return c=null!=c?c:1,d=null!=d?d:1,a&&b?(e=[a.offset().left+a.outerWidth()*c/2,a.offset().top+a.outerHeight()*d/2],f=[b.offset().left+b.outerWidth()*c/2,b.offset().top+b.outerHeight()*d/2],g=Math.abs(f[0]-e[0]),h=Math.abs(f[1]-e[1]),i=(a.outerWidth()+b.outerWidth())*c/2,j=(a.outerHeight()+b.outerHeight())*d/2,i>=g&&j>=h?!0:void 0):!1},a.hitObject=function(a,b){var c,d,e,f,g,h;return a&&b?(c=[a.data().x+a.outerWidth()/2,a.data().y+a.outerHeight()/2],d=[b.data().x+b.outerWidth()/2,b.data().y+b.outerHeight()/2],e=Math.abs(d[0]-c[0]),f=Math.abs(d[1]-c[1]),g=(a.outerWidth()+b.outerWidth())/2,h=(a.outerHeight()+b.outerHeight())/2,g>=e&&h>=f?!0:void 0):!1},a.hitPoint=function(a,b,c,d){if(c=null!=c?c:1,d=null!=d?d:1,a&&b){var e=[b.offset().left,b.offset().left+b.outerWidth()*c,b.offset().top,b.offset().top+b.outerHeight()*d];return a[0]>=e[0]&&a[0]<=e[1]&&a[1]>=e[2]&&a[1]<=e[3]?!0:!1}return!1},a.arrayToInt=function(a){var c,b=0;for(c=0;c<a.length;c++)b+=a[c]*Math.pow(10,a.length-1-c);return b},a.deepClone=function(a){function b(a){var e,d="array"==c(a)?[]:{};for(e in a)d[e]="object"!=c(a[e])&&"array"!=c(a[e])?a[e]:b(a[e]);return d}function c(a){return"object"==typeof a?Array==a.constructor?"array":"object":null}return b(a)},a.objectLength=function(a){return Object.keys(a).length},a.formatNumber=function(a){return a=a.toString(),a.length<=3?a:this.formatNumber(a.substr(0,a.length-3))+","+a.substr(a.length-3)},a.float=function(a,b){var c,d;return b=b||2,a=a.toString(),-1==a.indexOf(".")?a:(c=a.split("."),d=c[0]+"."+c[1].substr(0,b),Number(d))},a}var imath=importMath();

//-----------------------------------loadBox
if(ibase.dir=='landscape') $('<aside class="loadBox"><span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><b></b></aside>').appendTo('article>.interface');
else document.write('<aside class="loadBox"><span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><b></b></aside>');
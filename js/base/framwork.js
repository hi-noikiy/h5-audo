//----------------------------------------jquery.transit.js v0.9.12
(function(root,factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports==="object"){module.exports=factory(require("jquery"))}else{factory(root.jQuery)}}}(this,function($){$.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var div=document.createElement("div");var support={};function getVendorPropertyName(prop){if(prop in div.style){return prop}var prefixes=["Moz","Webkit","O","ms"];var prop_=prop.charAt(0).toUpperCase()+prop.substr(1);for(var i=0;i<prefixes.length;++i){var vendorProp=prefixes[i]+prop_;if(vendorProp in div.style){return vendorProp}}}function checkTransform3dSupport(){div.style[support.transform]="";div.style[support.transform]="rotateY(90deg)";return div.style[support.transform]!==""}var isChrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;support.transition=getVendorPropertyName("transition");support.transitionDelay=getVendorPropertyName("transitionDelay");support.transform=getVendorPropertyName("transform");support.transformOrigin=getVendorPropertyName("transformOrigin");support.filter=getVendorPropertyName("Filter");support.transform3d=checkTransform3dSupport();var eventNames={"transition":"transitionend","MozTransition":"transitionend","OTransition":"oTransitionEnd","WebkitTransition":"webkitTransitionEnd","msTransition":"MSTransitionEnd"};var transitionEnd=support.transitionEnd=eventNames[support.transition]||null;for(var key in support){if(support.hasOwnProperty(key)&&typeof $.support[key]==="undefined"){$.support[key]=support[key]}}div=null;$.cssEase={"_default":"ease","in":"ease-in","out":"ease-out","in-out":"ease-in-out","snap":"cubic-bezier(0,1,.5,1)","easeInCubic":"cubic-bezier(.550,.055,.675,.190)","easeOutCubic":"cubic-bezier(.215,.61,.355,1)","easeInOutCubic":"cubic-bezier(.645,.045,.355,1)","easeInCirc":"cubic-bezier(.6,.04,.98,.335)","easeOutCirc":"cubic-bezier(.075,.82,.165,1)","easeInOutCirc":"cubic-bezier(.785,.135,.15,.86)","easeInExpo":"cubic-bezier(.95,.05,.795,.035)","easeOutExpo":"cubic-bezier(.19,1,.22,1)","easeInOutExpo":"cubic-bezier(1,0,0,1)","easeInQuad":"cubic-bezier(.55,.085,.68,.53)","easeOutQuad":"cubic-bezier(.25,.46,.45,.94)","easeInOutQuad":"cubic-bezier(.455,.03,.515,.955)","easeInQuart":"cubic-bezier(.895,.03,.685,.22)","easeOutQuart":"cubic-bezier(.165,.84,.44,1)","easeInOutQuart":"cubic-bezier(.77,0,.175,1)","easeInQuint":"cubic-bezier(.755,.05,.855,.06)","easeOutQuint":"cubic-bezier(.23,1,.32,1)","easeInOutQuint":"cubic-bezier(.86,0,.07,1)","easeInSine":"cubic-bezier(.47,0,.745,.715)","easeOutSine":"cubic-bezier(.39,.575,.565,1)","easeInOutSine":"cubic-bezier(.445,.05,.55,.95)","easeInBack":"cubic-bezier(.6,-.28,.735,.045)","easeOutBack":"cubic-bezier(.175, .885,.32,1.275)","easeInOutBack":"cubic-bezier(.68,-.55,.265,1.55)"};$.cssHooks["transit:transform"]={get:function(elem){return $(elem).data("transform")||new Transform()},set:function(elem,v){var value=v;if(!(value instanceof Transform)){value=new Transform(value)}if(support.transform==="WebkitTransform"&&!isChrome){elem.style[support.transform]=value.toString(true)}else{elem.style[support.transform]=value.toString()}$(elem).data("transform",value)}};$.cssHooks.transform={set:$.cssHooks["transit:transform"].set};$.cssHooks.filter={get:function(elem){return elem.style[support.filter]},set:function(elem,value){elem.style[support.filter]=value}};if($.fn.jquery<"1.8"){$.cssHooks.transformOrigin={get:function(elem){return elem.style[support.transformOrigin]},set:function(elem,value){elem.style[support.transformOrigin]=value}};$.cssHooks.transition={get:function(elem){return elem.style[support.transition]},set:function(elem,value){elem.style[support.transition]=value}}}registerCssHook("scale");registerCssHook("scaleX");registerCssHook("scaleY");registerCssHook("translate");registerCssHook("rotate");registerCssHook("rotateX");registerCssHook("rotateY");registerCssHook("rotate3d");registerCssHook("perspective");registerCssHook("skewX");registerCssHook("skewY");registerCssHook("x",true);registerCssHook("y",true);function Transform(str){if(typeof str==="string"){this.parse(str)}return this}Transform.prototype={setFromString:function(prop,val){var args=(typeof val==="string")?val.split(","):(val.constructor===Array)?val:[val];args.unshift(prop);Transform.prototype.set.apply(this,args)},set:function(prop){var args=Array.prototype.slice.apply(arguments,[1]);if(this.setter[prop]){this.setter[prop].apply(this,args)}else{this[prop]=args.join(",")}},get:function(prop){if(this.getter[prop]){return this.getter[prop].apply(this)}else{return this[prop]||0}},setter:{rotate:function(theta){this.rotate=unit(theta,"deg")
},rotateX:function(theta){this.rotateX=unit(theta,"deg")},rotateY:function(theta){this.rotateY=unit(theta,"deg")},scale:function(x,y){if(y===undefined){y=x}this.scale=x+","+y},skewX:function(x){this.skewX=unit(x,"deg")},skewY:function(y){this.skewY=unit(y,"deg")},perspective:function(dist){this.perspective=unit(dist,"px")},x:function(x){this.set("translate",x,null)},y:function(y){this.set("translate",null,y)},translate:function(x,y){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(x!==null&&x!==undefined){this._translateX=unit(x,"px")}if(y!==null&&y!==undefined){this._translateY=unit(y,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var s=(this.scale||"1,1").split(",");if(s[0]){s[0]=parseFloat(s[0])}if(s[1]){s[1]=parseFloat(s[1])}return(s[0]===s[1])?s[0]:s},rotate3d:function(){var s=(this.rotate3d||"0,0,0,0deg").split(",");for(var i=0;i<=3;++i){if(s[i]){s[i]=parseFloat(s[i])}}if(s[3]){s[3]=unit(s[3],"deg")}return s}},parse:function(str){var self=this;str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(x,prop,val){self.setFromString(prop,val)})},toString:function(use3d){var re=[];for(var i in this){if(this.hasOwnProperty(i)){if((!support.transform3d)&&((i==="rotateX")||(i==="rotateY")||(i==="perspective")||(i==="transformOrigin"))){continue}if(i[0]!=="_"){if(use3d&&(i==="scale")){re.push(i+"3d("+this[i]+",1)")}else{if(use3d&&(i==="translate")){re.push(i+"3d("+this[i]+",0)")}else{re.push(i+"("+this[i]+")")}}}}}return re.join(" ")}};function callOrQueue(self,queue,fn){if(queue===true){self.queue(fn)}else{if(queue){self.queue(queue,fn)}else{self.each(function(){fn.call(this)})}}}function getProperties(props){var re=[];$.each(props,function(key){key=$.camelCase(key);key=$.transit.propertyMap[key]||$.cssProps[key]||key;key=uncamel(key);if(support[key]){key=uncamel(support[key])}if($.inArray(key,re)===-1){re.push(key)}});return re}function getTransition(properties,duration,easing,delay){var props=getProperties(properties);if($.cssEase[easing]){easing=$.cssEase[easing]}var attribs=""+toMS(duration)+" "+easing;if(parseInt(delay,10)>0){attribs+=" "+toMS(delay)}var transitions=[];$.each(props,function(i,name){transitions.push(name+" "+attribs)});return transitions.join(", ")}$.fn.transition=$.fn.transit=function(properties,duration,easing,callback){var self=this;var delay=0;var queue=true;var theseProperties=$.extend(true,{},properties);if(typeof duration==="function"){callback=duration;duration=undefined}if(typeof duration==="object"){easing=duration.easing;delay=duration.delay||0;queue=typeof duration.queue==="undefined"?true:duration.queue;callback=duration.complete;duration=duration.duration}if(typeof easing==="function"){callback=easing;easing=undefined}if(typeof theseProperties.easing!=="undefined"){easing=theseProperties.easing;delete theseProperties.easing}if(typeof theseProperties.duration!=="undefined"){duration=theseProperties.duration;delete theseProperties.duration}if(typeof theseProperties.complete!=="undefined"){callback=theseProperties.complete;delete theseProperties.complete}if(typeof theseProperties.queue!=="undefined"){queue=theseProperties.queue;delete theseProperties.queue}if(typeof theseProperties.delay!=="undefined"){delay=theseProperties.delay;delete theseProperties.delay}if(typeof duration==="undefined"){duration=$.fx.speeds._default}if(typeof easing==="undefined"){easing=$.cssEase._default}duration=toMS(duration);var transitionValue=getTransition(theseProperties,duration,easing,delay);var work=$.transit.enabled&&support.transition;var i=work?(parseInt(duration,10)+parseInt(delay,10)):0;if(i===0){var fn=function(next){self.css(theseProperties);if(callback){callback.apply(self)}if(next){next()}};callOrQueue(self,queue,fn);return self}var oldTransitions={};var run=function(nextCall){var bound=false;var cb=function(){if(bound){self.unbind(transitionEnd,cb)}if(i>0){self.each(function(){this.style[support.transition]=(oldTransitions[this]||null)})}if(typeof callback==="function"){callback.apply(self)}if(typeof nextCall==="function"){nextCall()}};if((i>0)&&(transitionEnd)&&($.transit.useTransitionEnd)){bound=true;self.bind(transitionEnd,cb)}else{window.setTimeout(cb,i)}self.each(function(){if(i>0){this.style[support.transition]=transitionValue}$(this).css(theseProperties)})};var deferredRun=function(next){this.offsetWidth=this.offsetWidth;run(next)};callOrQueue(self,queue,deferredRun);return this};function registerCssHook(prop,isPixels){if(!isPixels){$.cssNumber[prop]=true}$.transit.propertyMap[prop]=support.transform;$.cssHooks[prop]={get:function(elem){var t=$(elem).css("transit:transform");return t.get(prop)},set:function(elem,value){var t=$(elem).css("transit:transform");t.setFromString(prop,value);$(elem).css({"transit:transform":t})}}}function uncamel(str){return str.replace(/([A-Z])/g,function(letter){return"-"+letter.toLowerCase()
})}function unit(i,units){if((typeof i==="string")&&(!i.match(/^[\-0-9\.]+$/))){return i}else{return""+i+units}}function toMS(duration){var i=duration;if(typeof i==="string"&&(!i.match(/^[\-0-9\.]+/))){i=$.fx.speeds[i]||$.fx.speeds._default}return unit(i,"ms")}$.transit.getTransitionValue=getTransition;return $}));

//----------------------------------------PxLoader.js
(function(b){function c(f){f=f||{};this.settings=f;if(f.statusInterval==null){f.statusInterval=5000}if(f.loggingDelay==null){f.loggingDelay=20*1000}if(f.noProgressTimeout==null){f.noProgressTimeout=Infinity}var i=[],d=[],o,e=Date.now();var l={QUEUED:0,WAITING:1,LOADED:2,ERROR:3,TIMEOUT:4};var m=function(p){if(p==null){return[]}if(Array.isArray(p)){return p}return[p]};this.add=function(p){p.tags=new a(p.tags);if(p.priority==null){p.priority=Infinity}i.push({resource:p,status:l.QUEUED})};this.addProgressListener=function(q,p){d.push({callback:q,tags:new a(p)})};this.addCompletionListener=function(q,p){d.push({tags:new a(p),callback:function(r){if(r.completedCount===r.totalCount){q(r)}}})};var k=function(p){p=m(p);var q=function(u){var v=u.resource,t=Infinity;for(var s=0;s<v.tags.length;s++){for(var r=0;r<Math.min(p.length,t);r++){if(v.tags.all[s]===p[r]&&r<t){t=r;if(t===0){break}}if(t===0){break}}}return t};return function(s,r){var u=q(s),t=q(r);if(u<t){return -1}if(u>t){return 1}if(s.priority<r.priority){return -1}if(s.priority>r.priority){return 1}return 0}};this.start=function(q){o=Date.now();var r=k(q);i.sort(r);for(var s=0,p=i.length;s<p;s++){var t=i[s];t.status=l.WAITING;t.resource.start(this)}setTimeout(g,100)};var g=function(){var t=false,u=Date.now()-e,q=(u>=f.noProgressTimeout),r=(u>=f.loggingDelay);for(var s=0,p=i.length;s<p;s++){var v=i[s];if(v.status!==l.WAITING){continue}if(v.resource.checkStatus){v.resource.checkStatus()}if(v.status===l.WAITING){if(q){v.resource.onTimeout()}else{t=true}}}if(r&&t){h()}if(t){setTimeout(g,f.statusInterval)}};this.isBusy=function(){for(var q=0,p=i.length;q<p;q++){if(i[q].status===l.QUEUED||i[q].status===l.WAITING){return true}}return false};var n=function(w,t){var u=null,s,p,q,v,r;for(s=0,p=i.length;s<p;s++){if(i[s].resource===w){u=i[s];break}}if(u==null||u.status!==l.WAITING){return}u.status=t;e=Date.now();q=w.tags.length;for(s=0,p=d.length;s<p;s++){v=d[s];if(v.tags.length===0){r=true}else{r=w.tags.intersects(v.tags)}if(r){j(u,v)}}};this.onLoad=function(p){n(p,l.LOADED)};this.onError=function(p){n(p,l.ERROR)};this.onTimeout=function(p){n(p,l.TIMEOUT)};var j=function(q,w){var t=0,v=0,s,p,u,r;for(s=0,p=i.length;s<p;s++){u=i[s];r=false;if(w.tags.length===0){r=true}else{r=u.resource.tags.intersects(w.tags)}if(r){v++;if(u.status===l.LOADED||u.status===l.ERROR||u.status===l.TIMEOUT){t++}}}w.callback({resource:q.resource,loaded:(q.status===l.LOADED),error:(q.status===l.ERROR),timeout:(q.status===l.TIMEOUT),completedCount:t,totalCount:v})};var h=this.log=function(s){if(!window.console){return}var r=Math.round((Date.now()-o)/1000);window.console.log("PxLoader elapsed: "+r+" sec");for(var q=0,p=i.length;q<p;q++){var u=i[q];if(!s&&u.status!==l.WAITING){continue}var t="PxLoader: #"+q+" "+u.resource.getName();switch(u.status){case l.QUEUED:t+=" (Not Started)";break;case l.WAITING:t+=" (Waiting)";break;case l.LOADED:t+=" (Loaded)";break;case l.ERROR:t+=" (Error)";break;case l.TIMEOUT:t+=" (Timeout)";break}if(u.resource.tags.length>0){t+=" Tags: ["+u.resource.tags.all.join(",")+"]"}window.console.log(t)}}}function a(d){this.all=[];this.first=null;this.length=0;this.lookup={};if(d){if(Array.isArray(d)){this.all=d.slice(0)}else{if(typeof d==="object"){for(var f in d){if(d.hasOwnProperty(f)){this.all.push(f)}}}else{this.all.push(d)}}this.length=this.all.length;if(this.length>0){this.first=this.all[0]}for(var e=0;e<this.length;e++){this.lookup[this.all[e]]=true}}}a.prototype.intersects=function(d){if(this.length===0||d.length===0){return false}if(this.length===1&&d.length===1){return this.first===d.first}if(d.length<this.length){return d.intersects(this)}for(var e in this.lookup){if(d.lookup[e]){return true}}return false};if(typeof define==="function"&&define.amd){define("PxLoader",[],function(){return c})}b.PxLoader=c}(this));if(!Date.now){Date.now=function now(){return new Date().getTime()}}if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"}};

//----------------------------------------PxLoaderImage.js
function PxLoaderImage(a,i,f){var h=this,g=null;this.img=new Image();this.tags=i;this.priority=f;var b=function(){if(h.img.readyState==="complete"){c();g.onLoad(h)}};var e=function(){c();g.onLoad(h)};var d=function(){c();g.onError(h)};var c=function(){h.unbind("load",e);h.unbind("readystatechange",b);h.unbind("error",d)};this.start=function(j){g=j;h.bind("load",e);h.bind("readystatechange",b);h.bind("error",d);h.img.src=a};this.checkStatus=function(){if(h.img.complete){c();g.onLoad(h)}};this.onTimeout=function(){c();if(h.img.complete){g.onLoad(h)}else{g.onTimeout(h)}};this.getName=function(){return a};this.bind=function(j,k){if(h.img.addEventListener){h.img.addEventListener(j,k,false)}else{if(h.img.attachEvent){h.img.attachEvent("on"+j,k)}}};this.unbind=function(j,k){if(h.img.removeEventListener){h.img.removeEventListener(j,k,false)}else{if(h.img.detachEvent){h.img.detachEvent("on"+j,k)}}}}PxLoader.prototype.addImage=function(c,b,d){var a=new PxLoaderImage(c,b,d);this.add(a);return a.img};if(typeof define==="function"&&define.amd){define("PxLoaderImage",[],function(){return PxLoaderImage})};

//-----------------------------------swipe.js
!function(){$.event.special.swipe={setup:function(){function d(c){var d=c.originalEvent.touches[0];b={time:(new Date).getTime(),coords:[d.pageX,d.pageY]},a.on("touchmove",e).one("touchend",f)}function e(a){a.preventDefault(),a.stopImmediatePropagation();var d=a.originalEvent.changedTouches[0];c={time:(new Date).getTime(),coords:[d.pageX,d.pageY]},(Math.abs(b.coords[1]-c.coords[1])>10||Math.abs(b.coords[0]-c.coords[0])>5)&&a.preventDefault()}function f(){a.off("touchmove",e),b&&c&&c.time-b.time<1e3&&(Math.abs(b.coords[1]-c.coords[1])>10&&Math.abs(b.coords[0]-c.coords[0])<50?a.trigger("swipe").trigger(b.coords[1]>c.coords[1]?"swipeup":"swipedown"):Math.abs(b.coords[0]-c.coords[0])>10&&Math.abs(b.coords[1]-c.coords[1])<50&&a.trigger("swipe").trigger(b.coords[0]>c.coords[0]?"swipeleft":"swiperight")),b=c=void 0}var b,c,a=$(this);a.on("touchstart",d)}},$.each({swipeleft:"swipe",swiperight:"swipe",swipedown:"swipe",swipeup:"swipe"},function(a,b){$.event.special[a]={setup:function(){$(this).on(b,$.noop)}}})}();

//-----------------------------------pinch.js
(function(){$.event.special.pinch={setup:function(){function d(a){a.preventDefault();a.stopPropagation();if(!g&&1==a.originalEvent.touches.length){var c=[a.originalEvent.touches[0].clientX,a.originalEvent.touches[0].clientY];h.trigger("pinch").trigger("pinchmove",[c[0]-b[0],c[1]-b[1]]);b[0]=c[0];b[1]=c[1]}else if(2<=a.originalEvent.touches.length){c=[a.originalEvent.touches[0].clientX,a.originalEvent.touches[0].clientY];a=[a.originalEvent.touches[1].clientX,a.originalEvent.touches[1].clientY];var k=imath.getDis(c,a);.5<Math.abs(k-e)&&h.trigger("pinch").trigger("pinchscale",[.025*(k-e)/Math.abs(k-e)]);var d=imath.getDeg(c,a);d!=l&&h.trigger("pinch").trigger("pinchrotate",[d-l]);b[0]=c[0];b[1]=c[1];f[0]=a[0];f[1]=a[1];e=k;l=d}}function m(a){a.preventDefault();a.stopPropagation();$(this).off("touchmove");g=1<=a.originalEvent.touches.length?!0:!1}var h=$(this),g,b=[],f=[],e,l;h.on("touchstart",function(a){a.preventDefault();a.stopPropagation();$(this).on("touchmove",d).one("touchend",m);1==a.originalEvent.touches.length?(g=!1,b=[a.originalEvent.touches[0].clientX,a.originalEvent.touches[0].clientY]):2<=a.originalEvent.touches.length&&(g=!0,b=[a.originalEvent.touches[0].clientX,a.originalEvent.touches[0].clientY],f=[a.originalEvent.touches[1].clientX,a.originalEvent.touches[1].clientY],e=imath.getDis(b,f),l=imath.getDeg(b,f))})}};$.each({pinchmove:"pinch",pinchscale:"pinch",pinchrotate:"pinch"},function(d,m){$.event.special[d]={setup:function(){$(this).on(m,$.noop)}}})})();

//-----------------------------------com.js
function importCom(){function b(a){a.preventDefault()}function c(a,b,c,d){b&&$.isPlainObject(b)&&(b=JSON.stringify(b)),$.post("./http/httpPost.php",{api_url:a,post_data:b,action:d},function(a){c&&c(a)},"json")}function d(a,b){var c,d,e;if(b=b||0,c=a.split("<br/>"),0>=b||c.length<=b)return a;for(d="",e=0;b>e;e++)d+=c[e],b-1>e&&(d+="<br/>");return d}function e(a,b){var d,e,c=Math.ceil(a.length/b);if(1==c)return a;for(d="",e=0;c>e;e++)d+=0==e?a.substr(0,b)+"<br/>":c-1>e?a.substr(e*b,b)+"<br/>":a.substr(e*b);return d}var a={};return a.screenTo169=function(b,c){b=null!=b?b:!0,c=null!=c?c:!0;var d=$("article");d.length>0&&(os.iphone4?b?os.weixin?d.css({height:"121.2%"}):d.css({height:"123.6%"}):a.screenScrollUnable():os.android&&!os.screen169&&c?d.css({height:"109%"}):a.screenScrollUnable())},a.screenToPx=function(b,c,d){var e,f,g;b&&b>0&&(d=null!=d?d:!0,e=$("article"),e.length>0&&(e.css({"-webkit-transform-origin":"0 0 0"}),c&&c>0?(a.screenScrollUnable(),f=$(window).width()/b,g=$(window).height()/c,os.iphone4&&d?e.css({scale:g,x:.5*($(window).width()-b*g)/g}):e.css({scaleX:f,scaleY:g})):e.css({scale:$(window).width()/b})))},a.screenScrollEnable=function(){$(document).off("touchmove",b)},a.screenScrollUnable=function(){$(document).on("touchmove",b)},a.fadeIn=function(a,b,c){a&&(b=b||500,a.show().css({opacity:0}).transition({opacity:1},b,function(){c&&c($(this))}))},a.fadeOut=function(a,b,c){a&&(b=b||500,a.transition({opacity:0},b,function(){$(this).hide().css({opacity:1}),c&&c($(this))}))},a.popOn=function(b,c){function f(){e.closeBtn.length>0&&"button"==e.closeType?e.closeBtn.off(e.closeEvent,f):b.off(e.closeEvent,f),e.fade?a.fadeOut(b,e.fade,function(){e.remove&&b.remove()}):e.remove?b.remove():b.hide(),b.off("close",f),e.onClose&&e.onClose(b)}var d,e;b&&b.length>0&&(d={closeEvent:"touchend",closeType:"button",closeBtn:b.find("a.close"),remove:!1},e=$.extend(d,c),e.text&&b.find(".text").html(e.text),e.fade?a.fadeIn(b,e.fade):b.show(),e.closeBtn.length>0&&"button"==e.closeType?e.closeBtn.one(e.closeEvent,f):b.one(e.closeEvent,f),b.on("close",f))},a.popOff=function(a){a&&a.length>0&&a.trigger("close")},a.alert=function(b,c){if(b&&""!=b){var d=$('<aside class="alertBox"><div><p class="text"></p><p class="btn"><a href="javascript:;" class="close">确定</a></p></div></aside>').appendTo("body");a.popOn(d,{text:b,onClose:c,remove:!0,closeEvent:"click"})}},a.getQueryString=function(a){var b,c;return a&&""!=a?(b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b),null!=c?decodeURIComponent(c[2]):null):null},a.getQueryInt=function(a){var b,c,d;return a=null!=a?a:1,b=window.location.pathname.split("/"),c=b[b.length-1],d=c.split("."),parseInt(d[0].substr(d[0].length-a))},a.imageLoad=function(a,b){var c,d;if(a&&""!=a){if(c=new PxLoader,"string"===$.type(a)&&""!=a)c.addImage(a);else if("array"===$.type(a)&&a.length>0)for(d=0;d<a.length;d++)c.addImage(a[d]);c.addCompletionListener(function(){console.log("images load complete"),c=null,b&&b(a)}),c.start()}},a.addSignBar=function(a){if(a&&""!=a){var b=$("#signBar");b.length>0?b.find(".text").html(a):(b=$('<div id="signBar"></div>').appendTo("body"),$("<span></span>").html(a).appendTo(b))}},a.objectPrint=function(a){var b,c;if(a){console.log("-----------------------------------------------------------------------------"),b="";for(c in a)b+=c+":"+a[c]+"  ";console.log(b),console.log("-----------------------------------------------------------------------------")}},a.checkStr=function(a,b){var c;if(a&&""!=a){switch(b=b||0){case 0:c=new RegExp(/^1[3-9]\d{9}$/);break;case 1:c=new RegExp(/^[1-9]\d{5}$/);break;case 2:c=new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);break;case 3:c=new RegExp(/^\d+$/);break;case 4:c=new RegExp(/^[a-zA-Z\u0391-\uFFE5]*[\w\u0391-\uFFE5]*$/);break;case 5:c=new RegExp(/^\w+$/);break;case 6:c=new RegExp(/^[\u0391-\uFFE5]+$/);break;case 7:c=new RegExp(/^[a-zA-Z\u0391-\uFFE5]+$/)}return c.exec($.trim(a))?!0:!1}return!1},a.post=function(a,b,d){a&&""!=a&&c(a,b,d,"post")},a.get=function(a,b,d){a&&""!=a&&c(a,b,d,"get")},a.title=function(a){$("title").html(a);var b=$('<iframe src="images/share.jpg"></iframe>').appendTo($("body")).one("load",function(){setTimeout(function(){b.remove()},0)})},a.keyboard=function(b,c,d,e,f){function i(a){a.target!=b[0]&&b.blur()}function j(){"portrait"!=ibase.dir||0!=window.orientation&&180!=window.orientation?"landscape"!=ibase.dir||90!=window.orientation&&-90!=window.orientation||($(window).height()<g?k():l()):$(window).height()<g?k():l()}function k(){c.css({height:h}),d&&d.length>0&&d.addClass(e),a.screenScrollEnable();var b=$("article");b.length>0&&b.css({height:"auto"}),f&&f(!0)}function l(){d&&d.length>0&&d.removeClass(e),a.screenScrollUnable(),f&&f(!1)}var g,h;b=b||$('input,textarea,[contenteditable="true"]'),c=c||b.parents("section"),e=e||"keyboardIn",b.length>0&&c.length>0&&(os.ios?b.on("focus",function(){$(document).one("touchend",i)}):(g=$(window).height(),h=c.height(),$(window).on("resize",j)))},a.shake=function(b,c){var d,e,f,g;b&&b.length>0&&(d={rx:5,ry:5,delay:33,now:0,max:5,restore:!0},e=$.extend(d,c),f=imath.randomRange(-e.rx,e.rx),g=imath.randomRange(-e.ry,e.ry),b.css({x:f,y:g}),e.now++,e.now>e.max?(e.restore&&b.css({x:0,y:0}),e.onComplete&&e.onComplete()):setTimeout(a.shake,e.delay,b,e))},a.textareaGet=function(a,b){var c,e;return b=b||0,c=a.val(),""==c?"":(e=c.replaceAll("\n","<br/>"),d(e,b))},a.textareaSet=function(a,b){""==b?a.val(""):a.val(b.replaceAll("<br/>","\n"))},a.textareaLock=function(b){function i(){clearInterval(c),c=setInterval(k,100),$(this).one("blur",j)}function j(){var j,k,l,m,n;if(clearInterval(c),$(this).one("focus",i),j=a.textareaGet(b,f),-1!=j.indexOf("<br/>")){for(k=j.split("<br/>"),l="",m=0;m<k.length;m++)l+=e(k[m],g),m<k.length-1&&(l+="<br/>");l=d(l,f),n=l.replaceAll("<br/>","\n"),b.val(n)}}function k(){var c=a.textareaGet(b,f);-1==c.indexOf("<br/>")?b.attr({maxlength:h}):b.attr({maxlength:h+2*(c.split("<br/>").length-1)})}var c,f,g,h;b&&b.length>0&&(f=parseInt(b.attr("rows"))||0,g=parseInt(b.attr("cols"))||0,h=parseInt(b.attr("maxlength"))||0,h=0==h?f*g:h,f>0&&g>0&&h>0&&b.one("focus",i))},a.textareaUnlock=function(a){a.off()},a.orient=function(){function c(){ibase.keyboard=!0}function d(){ibase.keyboard=!1}if(os.android){var a=$('input,textarea,[contenteditable="true"]');a.length>0&&($(ibase.turnBox),a.on("focus",c).on("blur",d))}},a}var icom=importCom();

//-----------------------------------math.js
function importMath(){var a={};return a.randomRange=function(a,b){var c;return c=Math.floor(Math.random()*(b-a+1))+a},a.randomSort=function(a){a&&a.length>1&&a.sort(function(){return.5-Math.random()})},a.randomPlus=function(){return Math.random()<.5?-1:1},a.autoSize=function(a,b,c){var d,e;return c=c||0,d=new Array,e=a[0]/a[1],d[0]=b[0],d[1]=Math.round(d[0]/e),c?d[1]<b[1]&&(d[1]=b[1],d[0]=Math.round(d[1]*e)):d[1]>b[1]&&(d[1]=b[1],d[0]=Math.round(d[1]*e)),d},a.ease=function(a,b,c,d){c=c||10,d=d||.1;var e=b-a;return Math.abs(e)>d?e/c+a:b},a.toRadian=function(a){return a*Math.PI/180},a.toDegree=function(a){return 180*(a/Math.PI)},a.getDis=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(Math.pow(Math.abs(c),2)+Math.pow(Math.abs(d),2))},a.getDeg=function(a,b){var c,d,e;return a[0]==b[0]&&a[1]==b[1]?c=0:(d=b[1]-a[1],e=b[0]-a[0],c=180*Math.atan(d/e)/Math.PI,0>e?c=180+c:e>=0&&0>d&&(c=360+c)),c},a.hitTest=function(a,b,c,d){var e,f,g,h,i,j;return c=null!=c?c:1,d=null!=d?d:1,a&&b?(e=[a.offset().left+a.outerWidth()*c/2,a.offset().top+a.outerHeight()*d/2],f=[b.offset().left+b.outerWidth()*c/2,b.offset().top+b.outerHeight()*d/2],g=Math.abs(f[0]-e[0]),h=Math.abs(f[1]-e[1]),i=(a.outerWidth()+b.outerWidth())*c/2,j=(a.outerHeight()+b.outerHeight())*d/2,i>=g&&j>=h?!0:void 0):!1},a.hitObject=function(a,b){var c,d,e,f,g,h;return a&&b?(c=[a.data().x+a.outerWidth()/2,a.data().y+a.outerHeight()/2],d=[b.data().x+b.outerWidth()/2,b.data().y+b.outerHeight()/2],e=Math.abs(d[0]-c[0]),f=Math.abs(d[1]-c[1]),g=(a.outerWidth()+b.outerWidth())/2,h=(a.outerHeight()+b.outerHeight())/2,g>=e&&h>=f?!0:void 0):!1},a.hitPoint=function(a,b,c,d){if(c=null!=c?c:1,d=null!=d?d:1,a&&b){var e=[b.offset().left,b.offset().left+b.outerWidth()*c,b.offset().top,b.offset().top+b.outerHeight()*d];return a[0]>=e[0]&&a[0]<=e[1]&&a[1]>=e[2]&&a[1]<=e[3]?!0:!1}return!1},a.arrayToInt=function(a){var c,b=0;for(c=0;c<a.length;c++)b+=a[c]*Math.pow(10,a.length-1-c);return b},a.deepClone=function(a){var b,c,d;if("[object Array]"===toString.apply(a))b=[];else{if("[object Object]"!==toString.apply(a))return a;b={}}for(c in a)d=a[c],b[c]="[object Array]"===toString.apply(d)||"[object Object]"===toString.apply(d)?arguments.callee(d):d;return b},a.objectLength=function(a){return Object.keys(a).length},a.formatNumber=function(a){return a=a.toString(),a.length<=3?a:this.formatNumber(a.substr(0,a.length-3))+","+a.substr(a.length-3)},a}var imath=importMath();

//-----------------------------------loadBox
document.write('<aside class="loadBox"><span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><b></b></aside>');
//2015.11.20
var iOrient=importOrient();

function importOrient(){
	var orient={};
	var first=true;
	
	orient.init=function(dir){
		orient.dir=dir||'portrait';
		window_orientation();
		first=false;
		$(window).on('orientationchange',window_orientation);
		if( orient.dir!= orient.get()) $(window).one('orientationchange',function(){location.reload();});
	}//end func
	
	orient.lock=function(dir,callback){
		orient.dir=dir||'portrait';
		orient.callback=callback;
		window_orientation();
		if(callback && orient.dir!= orient.get() ) $(window).on('orientationchange',callback_handler);
	}//end func
	
	function callback_handler(e){
		if(orient.dir== orient.get() ){
			orient.callback();
			orient.callback=undefined;
			$(window).off('orientationchange',callback_handler);
		}//end if
	}//end func
	
	orient.unlock=function(){
		$(window).off('orientationchange',window_orientation);
		if(orient.callback) $(window).off('orientationchange',callback_handler);
		$('#turnBox').remove();
	}//end func
	
	orient.get=function(){
		if(first && os.android) return $(window).width()>$(window).height()?'landscape':'portrait';
		else return window.orientation == 90 || window.orientation == -90?'landscape':'portrait';
	}//end func
	
	function window_orientation(e){
		var orientation=orient.get();
		var turnBox=$('#turnBox');
		if(orient.dir=='portrait'){
			if (orientation=='landscape') {
				if(turnBox.length==0) turnBox=$('<aside class="turnBoxPortrait" id="turnBox"><img src="images/common/turn.gif" class="turn"><p>请将手机调至竖屏状态...</p></aside>').appendTo($('body'));
			}//end if
			else if(turnBox.length>0) turnBox.remove();
		}//end if
		else{
			if (orientation=='portrait') {
				if(turnBox.length==0) turnBox=$('<aside class="turnBoxLandscape" id="turnBox"><img src="images/common/turn_hor.png" class="turn"><p>请将手机调至横屏状态...</p></aside>').appendTo($('body'));
			}//end if
			else if(turnBox.length>0) turnBox.remove();
		}//end else
	}//end func
	
	return orient;
}//end import
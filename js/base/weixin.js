//2015.5.21
$(document).ready(function(e) {

	//分享
	var shareBtn=$('a.btnShare,#btnShare');
	var shareBox=$('#shareBox');
	
	init();
	
	function init(){
		weixin_sign();//微信SDK验证
		if(shareBtn.length>0){
			if(shareBox.length<1) shareBox=$('<aside class="shareBox"><img src="images/common/share.png"></aside>').appendTo(htmlBox);
			shareBtn.on('touchend',shareBtn_click);
		}//end if
	}//end func
	
	function shareBtn_click(e){
		shareBox.show().one('touchend',function(e){
			$(this).hide();
		});
	}//end func

});//end docuemnt ready

//-------------------------------------------------------微信SDK验证
function weixin_sign(){
	$.getJSON("http://s.gumutianqi.com/jssdk/get_sign?callback=?&key="+os.wxKey+"&url="+ encodeURIComponent(window.location.href), function(data){
		if(data  && data.errcode == "0") {
			wx.config({
		        debug: false,
		        appId: os.wxId,
		        timestamp: data.result.timestamp,
		        nonceStr: data.result.noncestr,
		        signature: data.result.signature,
		        jsApiList: [
		            'checkJsApi',
		            'onMenuShareTimeline',
		            'onMenuShareAppMessage',
		            'onMenuShareQQ',
		            'onMenuShareWeibo',
		            'hideMenuItems',
		            'showMenuItems',
		            'hideAllNonBaseMenuItem',
		            'showAllNonBaseMenuItem',
		            'translateVoice',
		            'startRecord',
		            'stopRecord',
		            'onRecordEnd',
		            'playVoice',
		            'pauseVoice',
		            'stopVoice',
		            'uploadVoice',
		            'downloadVoice',
		            'chooseImage',
		            'previewImage',
		            'uploadImage',
		            'downloadImage',
		            'getNetworkType',
		            'openLocation',
		            'getLocation',
		            'hideOptionMenu',
		            'showOptionMenu',
		            'closeWindow',
		            'scanQRCode',
		            'chooseWXPay',
		            'openProductSpecificView',
		            'addCard',
		            'chooseCard',
		            'openCard'
		        ]
			});//end wx.config
			os.wxSigned=true;//通过微信新SDK验证
			wx.ready(function(){
				wx.showOptionMenu();//用微信“扫一扫”打开，optionMenu是off状态，默认开启
				wx_share();
			});//end wx.ready
		}//end if(data)
	});//end ajax
}//end func

//-------------------------------------------------------微信分享函数
function wx_share(){
	if(os.wxSigned){
		wx.onMenuShareTimeline({
			title: os.content.timeline, // 分享标题
			link: os.content.link, // 分享链接
			imgUrl: os.content.image, // 分享图标
			success: function () { 
				// 用户确认分享后执行的回调函数
				monitorAdd({label:'分享到朋友圈'});
			},
			cancel: function () { 
				// 用户取消分享后执行的回调函数
			}
		});
		wx.onMenuShareAppMessage({
			title: os.content.title, // 分享标题
			desc: os.content.friend, // 分享描述
			link: os.content.link, // 分享链接
			imgUrl: os.content.image, // 分享图标
			type: 'link', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () { 
				// 用户确认分享后执行的回调函数
				monitorAdd({label:'分享给朋友'});
			},
			cancel: function () { 
				// 用户取消分享后执行的回调函数
			}
		});
	}//end if
	else setTimeout(wx_share,250,content);
}//end func
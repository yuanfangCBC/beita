$(function() {
	$('.nav-area').on('click', function() {
		if($(this).data('switch')) {
			$(this).data('switch', false);
			$('.nav').fadeOut(300);
		} else {
			$(this).data('switch', true);
			$('.nav').fadeIn(300);
		}
	});

	//显示与隐藏nav导航 阻止冒泡
	/*$('.nav-area').bind('click', function(e) {
		stopPropagation(e);
		if($(this).data('switch')) {
			$(this).data('switch', false);
			$('.nav').fadeOut(300);
		} else {
			$(this).data('switch', true);
			$('.nav').fadeIn(300);
		}
		//$('.nav').fadeIn(300);
	});
	$(document).bind('click', function() {
		console.log("jjjjjj")
		$(this).data('switch', false);
		$('.nav').fadeOut(300);
	});
	function stopPropagation(e) {
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	}*/

	$('.nav .nav-item').on('click', function() {
		var item = $(this).data("name");
		console.log(item);
		jumpSection(item)
	});

	function jumpSection(item) {
		switch(item) {
			case 'index':
				y = 0;
				break;
			case 'jiaoyu':
				y = $('.banner').height() + $('.about-us').height() - $('header').height();
				break;
			case 'clases':
				y = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height();
				break;
			case 'teacher':
				y = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height() +
					$('.clases').height() + $('.clases-row').height() +
					$('.tese').height() + $('.tese-row').height();
				break;
			case 'jiuye':
				y = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height() +
					$('.clases').height() + $('.clases-row').height() +
					$('.tese').height() + $('.tese-row').height() +
					$('.teacher').height() + $('.teacher-row').height() +
					$('.join-us').height() +
					$('.enri').height() + $('.enri-row').height();
				break;
			case 'zhongbao':
				y = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height() +
					$('.clases').height() + $('.clases-row').height() +
					$('.tese').height() + $('.tese-row').height() +
					$('.teacher').height() + $('.teacher-row').height() +
					$('.join-us').height() +
					$('.enri').height() + $('.enri-row').height() +
					$('.jiuye').height();
				break;
			case 'tallus':
				y = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height() +
					$('.clases').height() + $('.clases-row').height() +
					$('.tese').height() + $('.tese-row').height() +
					$('.teacher').height() + $('.teacher-row').height() +
					$('.join-us').height() +
					$('.enri').height() + $('.enri-row').height() +
					$('.jiuye').height() +
					$('.zhongbao').height();
				break;
			default:
				y = 0
		}
		$("body").scrollTop(y);
	}

	//滑动更改header背景
	$(window).on('scroll', function() {
		if($(window).scrollTop() > $('header').height() + $('.banner').height()) {
			//显示白背景
			$('header').css("background-color", "#f5f5f5");
			console.log("hhh");
		} else {
			//不现实背景
			$('header').css("background-color", "rgba(255,255,255,0)");
		}
	});

	//返回顶部
	/*var backbutton = $('.back-to-top');
	$(window).on('scroll', function() {
		if($(window).scrollTop() > $(window).height()) {
			backbutton.fadeIn();
		} else {
			backbutton.fadeOut();
		}
	});*/
	var totop = $('#img_to_top')
	totop.on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 800)
	})

	/*点击侧边菜单栏*/
	var weixin_div = $('.weixin-div'),
		qq_div = $('.qq-div'),
		phone_div = $('.phone-div');
	$('#weixin').on("click", function() {
		if($(this).data('weixin')) {
			$(this).data('weixin', false);
			weixin_div.css("display", "none");
			qq_div.css("display", "none");
			phone_div.css("display", "none");
		} else {
			$(this).data('weixin', true);
			weixin_div.css("display", "block");
			qq_div.css("display", "none");
			phone_div.css("display", "none");
		}
	});
	$('#qq').on("click", function() {
		if($(this).data('qq')) {
			$(this).data('qq', false);
			weixin_div.css("display", "none");
			qq_div.css("display", "none");
			phone_div.css("display", "none");
		} else {
			$(this).data('qq', true);
			qq_div.css("display", "block");
			weixin_div.css("display", "none");
			phone_div.css("display", "none");
		}
	});
	$('#phone').on("click", function() {
		if($(this).data('phone')) {
			$(this).data('phone', false);
			weixin_div.css("display", "none");
			qq_div.css("display", "none");
			phone_div.css("display", "none");
		} else {
			$(this).data('phone', true);
			phone_div.css("display", "block");
			qq_div.css("display", "none");
			weixin_div.css("display", "none");
		}
	});
	
	$('#address').on("click",function(){
		var dizhi = $('.banner').height() + $('.about-us').height() - $('header').height() +
					$('.jiaoyu').height() + $('.jiaoyu-row').height() +
					$('.clases').height() + $('.clases-row').height() +
					$('.tese').height() + $('.tese-row').height() +
					$('.teacher').height() + $('.teacher-row').height() +
					$('.join-us').height() +
					$('.enri').height() + $('.enri-row').height() +
					$('.jiuye').height() +
					$('.zhongbao').height();
		$("body").scrollTop(dizhi);
	});
})
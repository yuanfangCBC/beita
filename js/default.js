$(function() {

	$('li').children('a').click(function() {
			var id = $(this).attr("id");
			console.log(id);
			switch(id) {
				case 'tab_one':
					$(this).addClass('tab-onclick');
					$('#tab_one').parent().siblings().children('a').removeClass('tab-onclick');
					break;
				case 'tab_two':
					$(this).addClass('tab-onclick');
					$('#tab_two').parent().siblings().children('a').removeClass('tab-onclick');
					break;
				case 'tab_three':
					$(this).addClass('tab-onclick');
					$('#tab_three').parent().siblings().children('a').removeClass('tab-onclick');
					break;
				case 'tab_four':
					$(this).addClass('tab-onclick');
					$('#tab_four').parent().siblings().children('a').removeClass('tab-onclick');
					break;
				case 'tab_five':
					$(this).addClass('tab-onclick');
					$('#tab_five').parent().siblings().children('a').removeClass('tab-onclick');
					break;
				case 'tab_six':
					$(this).addClass('tab-onclick');
					$('#tab_six').parent().siblings().children('a').removeClass('tab-onclick');
					break;

			}

	});
	
	$('.card-5').hover(function() {
		$(this).addClass('card-5-box');
	}, function() {
		$(this).removeClass('card-5-box');
	});

	var totop = $("#img_totop");
	totop.on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 1000)
	});

	$('.card-7:first-child').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境1');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
	$('.card-7:nth-child(2)').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境2');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
	$('.card-7:nth-child(3)').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境3');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
	$('.card-7:nth-child(4)').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境4');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
	$('.card-7:nth-child(5)').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境5');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
	$('.card-7:nth-child(6)').hover(function() {
		$(this).children('.env-hover').slideDown();
		$(this).find('h5').html('机构环境6');
	}, function() {
		$(this).children('.env-hover').slideUp();
	});
})
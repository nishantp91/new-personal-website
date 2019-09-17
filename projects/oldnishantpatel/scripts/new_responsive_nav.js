$('.menu-toggle').click(function() {
		  $('.site-nav').toggleClass('site-nav--open');
		  $(this).toggleClass('open');
		});

$('.nav_li').click(function() {
		  	$('.site-nav').toggleClass('site-nav--open');
		  	$('.menu-toggle').toggleClass('open');
});
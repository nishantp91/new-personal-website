$('.scroll_down').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 200
  }, 1000);
  return false; //doesnt show #href link in url
});

// Fix for "jumpy" background on IE11
if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
	$('body').on("mousewheel", function () {
		// remove default behavior
		event.preventDefault();

		//scroll without smoothing
		var wheelDelta = event.wheelDelta;
		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta + 5);
	});
}
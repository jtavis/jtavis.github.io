$(document).ready(function () {
	$(window).scroll (function (){
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if (scrollTop>100) {
			$('header').addClass('scrolled');
		}
		else {
			$('header').removeClass('scrolled');
		}
	})

})

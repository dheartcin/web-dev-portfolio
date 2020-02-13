$(document).ready(function() {
	$('#see-menu-coffee').click(function() {
		if($('.menu-coffee').is(':hidden')) {
			$('.menu-coffee').slideDown(500);
			$('.see-menu-caption').text("Close Coffee Menu");
		}
		else {
			$('.menu-coffee').slideUp(500);
			$('.see-menu-caption').text("View Coffee Menu");

		}
	});
	$('#see-menu-tea').click(function() {
		if($('.menu-tea').is(':hidden')) {
			$('.menu-tea').slideDown(500);
			$('.see-menu-caption').text("Close Tea Menu");
		}
		else {
			$('.menu-tea').slideUp(500);
			$('.see-menu-caption').text("View Tea Menu");

		}
	});
});
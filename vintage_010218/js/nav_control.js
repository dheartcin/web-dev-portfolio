$(document).ready(function() {
	/*if((navigator.platform == "iPad") || (navigator.platform == "iPhone")) {
	
		var visibile = false;
		$('.nav-clickable').click(function(event) {
			if(visible == false) {
				$('.dropdown-menu').focus();
				visible = true;
			}
		});
		$('body').bind('click touchstart tap', function() {
			if(visible == true) {
				$('.dropdown-menu').hide();
				visible = false;
			}
		});		
	}*/
	$('.nav-about-dropdown').hide();
	$('.nav-food-dropdown').hide();
	$('.nav-location-dropdown').hide();

	$('.nav-about').click(function() {
		if($('.nav-about-dropdown').is(':hidden')) {
			$('.nav-about-dropdown').slideDown(500);
		}
		else {
			$('.nav-about-dropdown').slideUp(500);
		}
	});
	$('.nav-food').click(function() {
		if($('.nav-food-dropdown').is(':hidden')) {
			$('.nav-food-dropdown').slideDown(500);
		}
		else {
			$('.nav-food-dropdown').slideUp(500);
		}
	});

	$('.nav-location').click(function() {
		if($('.nav-location-dropdown').is(':hidden')) {
			$('.nav-location-dropdown').slideDown(500);
		}
		else {
			$('.nav-location-dropdown').slideUp(500);
		}
	});
	$('.nav-about-tea').click(function() {
		console.log("Tea Clicked");
	});
	$('.nav-about-coffee').click(function() {
		console.log("Coffee Clicked");
	});
	$('.nav-contact').click(function() {
		console.log("Contact Clicked");
	});


});
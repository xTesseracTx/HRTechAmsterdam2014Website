// Floating Box


$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 80) {
        $("#floating-ad").fadeIn();
    } 
	
	else {
        $("#floating-ad").fadeOut();
    }
	
});


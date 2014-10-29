// Go to top scrolling button

		$(document).ready(function() {
			// Show or hide the sticky footer button
			//Keep track of last scroll
			var lastScroll = 0;
			$(window).scroll(function(event){
				//Sets the current scroll position
				var st = $(this).scrollTop();
				//Determines up-or-down scrolling
				if (st > lastScroll){
					//Replace this with your function call for downward-scrolling
					$('.go-top').fadeOut(1000);
					$('#menu-button-mobile').fadeOut(200);
				}
				else {
					//Replace this with your function call for upward-scrolling
					$('.go-top').fadeIn(1000);
					$('#menu-button-mobile').fadeIn(200);
				}
				//Updates scroll position
				lastScroll = st;
				if (st == 0) {
					$('.go-top').fadeOut(1000);//code
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 700);
			})
		});

$(document).ready(function(){
	$('.slick-master-carousel').slick({
	  autoplay: false,
          autoplaySpeed: 3000,
          speed: 400,
          arrows: false,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
	});
	$(".next").click(function(){
	    $('.slick-master-carousel').slickNext();
	})
	$(".prev").click(function(){
	    $('.slick-master-carousel').slickPrev();
	})	
});

$(document).ready(function(){
$('.slick-master-carousel-center').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 1,
  arrows: false
})
});
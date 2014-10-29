//iRecruit - Menu transitions

var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
        if( !fixed ) {
            fixed = true;
            $('#topbox').css({position:'fixed', height:'0px', transition:'height 0.7s'  });
			$('#header').css({height:'100px', transition:'height 0.7s' });
			$('#logo').css({margin:'10px -32px -25px 0', transition:'margin 0.7s'  });
			$('.topbox-social').css({height:'0px', transition:'height 0.3s',  });
			$('.nav-main-collapse').css({marginTop:'37px', transition:'margin 0.7s',  });
			$('#topright-container').css({paddingTop:'10px', transition:'padding 0.7s'  });
			
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('#topbox').css({height:'80px', transition:'height 0.7s'});
			$('#header').css({height:'180px', transition:'height 0.7s'  });  
			$('#logo').css({margin:'-40px -32px -25px 0', transition:'margin 0.7s'  }); 
			$('.topbox-social').css({height:'30px', transition:'height 0.8s'});
			$('.nav-main-collapse').css({marginTop:'117px', transition:'margin 0.7s',  });
			$('#topright-container').css({paddingTop:'90px', transition:'padding 0.7s',  });
			
        }
    }
});
  $(document).ready(function(){
  (function randomFade() {
    var fadeDivs = $('.random-tweet'),
        el = fadeDivs.eq(Math.floor(Math.random() * fadeDivs.length));
        el.fadeIn('1000').delay(6000).fadeOut('1000',randomFade);   
})();
  });
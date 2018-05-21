// menu overlay
var sliderOverlay = $('#nav');
$('.hamburger__link').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger__link--pressed');
  sliderOverlay.toggleClass('active');
});
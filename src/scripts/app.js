// menu overlay
var sliderOverlay = $('#nav');
var isOpen = false;
// var body = overflow: hidden
$('.hamburger__link').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger__link--pressed');
  sliderOverlay.toggleClass('active');
  if (isOpen) {
    document.body.style.overflow = 'visible';
    isOpen = false;
  } else {
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }
  console.log(isOpen);
});

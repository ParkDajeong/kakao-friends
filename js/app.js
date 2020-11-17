$(function() {
  const window_h = $(window).height();

  $(".section").on("mousewheel", function(e) {
    e.preventDefault();
    if(e.originalEvent.wheelDelta >= 0) {
      $("html, body").stop().animate({scrollTop: 0}, 900, "easeOutCubic");
    } else {
      $("html, body").stop().animate({scrollTop: window_h}, 900, "easeOutCubic");
    }
  });
});
$(function() {
  const character_boxs = $(".character__box");
  const window_h = $(window).height();
  let char_idx = 0;

  function onScroll(wheel) {
    if(wheel >= 0) {
      $("html, body").stop().animate({scrollTop: 0}, 900, "easeOutCubic");
    } else {
      $("html, body").stop().animate({scrollTop: window_h}, 900, "easeOutCubic");
    }
  }

  character_boxs.each(function(idx) {
    $(this).attr("data-index", idx);
  });

  $(".section").on("mousewheel", function(e) {
    e.preventDefault();
    const wheel = e.originalEvent.wheelDelta;

    if($(this).hasClass("character")) {
      if(wheel > 0) {
        // scroll up
        if(char_idx === 0) {
          onScroll(wheel);
          return;
        }
        char_idx -= 1;
      } else if(wheel < 0 && char_idx < character_boxs.length - 1) {
        // scroll down
        char_idx += 1;
      }
      character_boxs.removeClass("active");
      $(".character").find("[data-index=" + char_idx + "]").addClass("active");
      return;
    }
    onScroll(wheel);
  });
});
$(document).ready(function() {
// opacity when paused
  var vid = document.getElementById("videoBox");
  var pButton = document.getElementById("playButton");
  vid.onplay = function() {
    $(vid).css('opacity', '1');
    $(pButton).css('opacity', '0');
  };
  vid.onpause = function() {
    $(vid).css('opacity', '0.3');
    $(pButton).css('opacity', '1');
  };

  // vid onclick playstate toggle
  $(vid).add(pButton).click(function() {
    if (vid.paused)
      vid.play();
    else
      vid.pause();
  });

  // playbutton animation
  $(pButton).add(vid).mouseover(function() {
    $(pButton).stop().css('filter','none')
  });
  $(pButton).add(vid).mouseout(function() {
    $(pButton).stop().css('filter','brightness(500%)')
  });
});



$(document).ready(function(){
// menu slide
  $(".menuButtonContainer").click(function() {
    $(".menuContainer").stop().toggle("slide", function() {
    });
  });

// menu button to cross
var value = 0;
  $(".menuToggle").click(function() {
    $(this).toggleClass('fa-bars fa-times')

    if (value == 0) {
      // $(this).css("color", "black")
      $("body").css("position","fixed")
      value = 1;
    } else if (value == 1) {
      // $(this).css("color", "white")
      $("body").css("position","relative")
      value = 0;
    }
  });
});

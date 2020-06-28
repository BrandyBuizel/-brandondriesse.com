// Browser checks
$(document).ready(function() {

  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // console.log('isFirefox',isFirefox);
  // console.log('isChrome',isChrome);
  // console.log('isIE',isIE);
  // console.log('isSafari',isSafari);

// IE navbar hover effect
  if (isIE == true) {
    $('#firstInLine').attr('src', 'img/scarecrowWhite.png');
    $('#imageSteam').attr('src', 'img/steamWhite.png');
    $('#imageXbox').attr('src', 'img/xboxWhite.png');
    $('#lastInLine').attr('src', 'img/kissWhite.png');
  }
  $(".customButton").stop().mouseover(function() {
    var imgURL = $(this).attr("src");
    imgURL = imgURL.replace('White', '');
    $(this).attr('src', imgURL);
  });
  $(".customButton").stop().mouseout(function() {
    var imgURL = $(this).attr("src");
    imgURL = imgURL.replace('.png', '');
    imgURL = imgURL + 'White.png';
    $(this).attr('src', imgURL);
  });
});

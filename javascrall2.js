﻿var setTheme = function (theme) {
if (theme === 'dark') {
// dark
$( "body" ).removeClass("standard");
$( "body" ).addClass( "dark" );
$(".inner-switch").text("ON");
setCookie('Theme', 'dark', 30);
} else {
$("body").removeClass("dark");
$("body").addClass("standard");
$(".inner-switch").text("OFF");
setCookie('Theme', 'standard', 30);
}
};

currentTheme = getCookie('Theme');
setTheme(currentTheme);

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 2000) {
      $("#collapsable-nav").collapse('hide');
    }
  });


$(document).ready(function() {
  var $menu = $("#menu"),
    $menulink = $(".menu-link"),
    $hero = $(".hero"),
    $body = $("body");

  $menulink.click(function() {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
    $hero.toggleClass("hide");
    $body.toggleClass("lock");
    return false;
  });
});

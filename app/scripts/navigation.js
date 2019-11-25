$(document).ready(function() {
  var $menu = $("#menu"),
    $menulink = $(".menu-link");

  $menulink.click(function() {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
    return false;
  });
});

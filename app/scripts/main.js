$(document).ready(function() {
  var $grid = $(".js-masonry").isotope({
    itemSelector: ".masonry__item",
    sortBy: "original-order",
    masonry: {
      columnWidth: ".masonry__item",
      horizontalOrder: true
    }
  });
  // bind filter tab item click
  $(".js-tabs").on("click", ".js-filter", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue, sortBy: "original-order" });
  });

  // change active class on tabs
  $(".js-tabs").each(function(i, tabs) {
    var $tabs = $(tabs);
    $tabs.on("click", ".js-filter", function() {
      $tabs.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  // loadmore button
  var initShow = 8;
  var counter = initShow;
  var iso = $grid.data("isotope");

  loadMore(initShow);

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems
      .slice(toShow, iso.filteredItems.length)
      .map(function(item) {
        return item.element;
      });
    $(hiddenElems).addClass("hidden");
    $grid.isotope("layout");

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $(".js-loadmore").hide();
    } else {
      $(".js-loadmore").show();
    }
  }

  //append load more button
  $grid.after(
    '<div class="portfolio__button__container"><div class="container"><button class="button button--primary js-loadmore"> Load More</button></div></div>'
  );

  //when load more button clicked
  $(".js-loadmore").click(function() {
    if ($(".js-tabs").data("clicked")) {
      counter = initShow;
      $(".js-tabs").data("clicked", false);
    } else {
      counter = counter;
    }

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $(".js-tabs").click(function() {
    $(this).data("clicked", true);

    loadMore(initShow);
  });
});

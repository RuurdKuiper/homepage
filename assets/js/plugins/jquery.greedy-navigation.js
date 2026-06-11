/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var mobileNavBreakpoint = 925;
var $nav = $('#site-nav');
var $btn = $('#site-nav .greedy-nav__toggle');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function isMobileNav() {
  return window.matchMedia('(max-width: ' + mobileNavBreakpoint + 'px)').matches;
}

function restoreVisibleLinks() {
  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }

  breaks = [];
}

function syncNavOffsets() {
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($('.author__urls-wrapper button').is(':visible')) {
    $('.sidebar').css('padding-top', '');
  } else {
    $('.sidebar').css('padding-top', mastheadHeight + 'px');
  }
}

function updateNav() {
  restoreVisibleLinks();

  if (isMobileNav()) {
    $hlinks.addClass('hidden');
    $btn.removeClass('hidden close');
    $btn.attr('aria-expanded', $nav.hasClass('is-open') ? 'true' : 'false');
    syncNavOffsets();
    return;
  }

  $nav.removeClass('is-open');
  $btn.addClass('hidden').removeClass('close');
  $btn.attr('aria-expanded', 'false');
  $hlinks.addClass('hidden');

  var availableSpace = $nav.width();

  while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
    breaks.push($vlinks.width());
    $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
    $btn.removeClass('hidden');
    availableSpace = $nav.width() - $btn.outerWidth() - 30;
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  syncNavOffsets();

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (screen.orientation && typeof screen.orientation.addEventListener === 'function') {
  screen.orientation.addEventListener("change", function () {
    updateNav();
  });
} else {
  $(window).on('orientationchange', function () {
    updateNav();
  });
}

$(window).on('load', function () {
  updateNav();
});

$btn.on('click', function () {
  if (isMobileNav()) {
    $nav.toggleClass('is-open');
    $(this).attr('aria-expanded', $nav.hasClass('is-open') ? 'true' : 'false');
    return;
  }

  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  $(this).attr('aria-expanded', $hlinks.hasClass('hidden') ? 'false' : 'true');
});

updateNav();
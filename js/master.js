var headerHeight;
var isScrolled;

function contactImgs () {

}

/* typing effect on name */
/*
$(function () {
  $(".name").typed({
    strings: ["Fred<span style='color:red'>eric</span>k Murphy<h2>Aspiring Web Developer</h2>"],
    typeSpeed: 0,
    showCursor: false
  });
});
*/

/* adjust the header height as viewport changes */
function fixHeight () {
  if (isScrolled != true) {
    headerHeight = $(window).height();
    $('#jumbo-header').css('height', headerHeight);
  }
}

$(document).ready(function () {
  $(window).resize(fixHeight());
})

$(window).on('resize', fixHeight);

/* smooth scrolling for navbar links */
$(document).ready(function () {
  $('.nav-link').on('click', function () {
    var link = $(this).attr('href');
    $('#navbar-collapse-1').collapse('hide');
    if (link == "#contact-section") {
      $('html, body').animate({
        scrollTop: document.body.scrollHeight
      }, 500);
    } else if (link == "#jumbo-header") {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $(link).offset().top - 137
      }, 500);
    }
    return false;
  })
})

/* animation effects for the header and text */
$(document).ready(function () {
  $(document).scroll(function () {
    var testHeight;
    var marginSize;
    var $document = $(document);

    if ($(window).width() <= 768) {
      marginSize = "45px"
    } else {
      marginSize = "30px"
    }

    if ($document.scrollTop() >= 100) {
      $('#jumbo-header').stop().animate({height:"70px", marginTop:marginSize}, 500);
      $('#down-arrow').fadeOut(100);
      $('#my-name').removeClass("name").addClass("scroll-name");
      $('#my-name').html("<span style='color:red'>eric</span>.m");
      isScrolled = true;
    } else {
      $('#jumbo-header').stop().animate({height:headerHeight, marginTop:"0px"}, 500);
      $('#down-arrow').fadeIn(500);
      $('#my-name').removeClass("scroll-name").addClass("name");
      $('#my-name').html("Fred<span style='color:red'>eric</span>k Murphy<h2>Aspiring Web Developer</h2>");
      isScrolled = false;
    }
  })
});

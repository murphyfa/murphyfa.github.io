var headerHeight;
var isScrolled = false;
var footerHeight;
var marginSize;

/* typing effect on name */
/* disabled until i can fix an issue when the user
scrolls while it is still typing */
/*
$(function () {
  $(".name").typed({
    strings: ["Fred<span style='color:red'>eric</span>k Murphy<h2>Aspiring Web Developer</h2>"],
    typeSpeed: 0,
    showCursor: false
  });
});
*/


/* popovers */
$(document).ready(function () {
  $('[data-toggle="popover"]')
    .popover()
    .click(function(e) {
    e.preventDefault();
 });
  return true;
});

/* adjust the bottom margin on the project section to ensure full visibility of the contact section */
function fixFooter () {
  footerHeight = $('#contact-section').outerHeight();
  $('#projects-section').css('margin-bottom', footerHeight)
}

/* adjust the header height as viewport changes */
function fixHeight () {

  if ($(window).width() < 768) {
    marginSize = "45px"
  } else {
    marginSize = "30px"
  }

  if (isScrolled != true) {
    headerHeight = $(window).height();
    $('#jumbo-header').css('height', headerHeight);
  }

  if (isScrolled == true) {
    $('#jumbo-header').css('margin-top', marginSize);
  }
}

$(document).ready(function () {
  if (isScrolled == false) {
    $(window).resize(fixHeight());
  }
  $(window).resize(fixFooter());
})

$(window).on('resize', fixHeight);
$(window).on('resize', fixFooter);

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
    var $document = $(document);

    if ($document.scrollTop() >= 10 && isScrolled == false) {
      $('#jumbo-header').stop().animate({height:"70px", marginTop:marginSize}, 500);
      $('#down-arrow').fadeOut(100);
      $('#my-name').removeClass("name").addClass("scroll-name");
      $('#my-name').html("<span style='color:red'>eric</span>.m");
      $('#contact-section').css('background:#222222');
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      isScrolled = true;
    }
  })
});

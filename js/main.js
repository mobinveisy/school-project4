

$(function () {


    "use strict";

    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navgition").removeClass("sticky");
        } else {
            $(".navgition").addClass("sticky");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 90;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


});
$('.carousel').carousel({
    interval: 2000
  })
  
  var i = 0;
  var txt = 'وب سایت مدرسه نوآوران';
  var speed = 250;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

 

// typing effect 
  
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    var text1 = "<p>وب سایت مدرسه نوآوران</p>"
    if (scroll < 10) {
        $("#typing").remove("p");
    } else {
        $("#typing").add(text1);
    }
});

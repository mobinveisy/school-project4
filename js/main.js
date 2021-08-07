
$(document).ready(function(){
$(function () {
             
    // new WOW().init();

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
    $(window).on('scroll', function(event) {
      if($(this).scrollTop() > 600){
          $('.back-to-top').fadeIn(200);
      } else{
          $('.back-to-top').fadeOut(200);
      }
  });


  
  
  //Animate the scroll to yop
  $('.back-to-top').on('click', function(event) {
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


 
$('.button').click(function(){
    var $btn = $(this),
        $step = $btn.parents('.modal-body'),
        stepIndex = $step.index(),
        $pag = $('.modal-header span').eq(stepIndex);
  
    if(stepIndex === 0 || stepIndex === 1) { step1($step, $pag); }
    else { step3($step, $pag); }
    
  });
  
  
  function step1($step, $pag){
  console.log('step1');
    // animate the step out
    $step.addClass('animate-out');
    
    // animate the step in
    setTimeout(function(){
      $step.removeClass('animate-out is-showing')
           .next().addClass('animate-in');
      $pag.removeClass('is-active')
            .next().addClass('is-active');
    }, 600);
    
    // after the animation, adjust the classes
    setTimeout(function(){
      $step.next().removeClass('animate-in')
            .addClass('is-showing');
      
    }, 1200);
  }
  
  
  function step3($step, $pag){
  console.log('3');
  
    // animate the step out
    $step.parents('.modal-wrap').addClass('animate-up');
  
    setTimeout(function(){
      $('.rerun-button').css('display', 'inline-block');
    }, 300);
  }
  
  $('.rerun-button').click(function(){
   $('.modal-wrap').removeClass('animate-up')
                    .find('.modal-body')
                    .first().addClass('is-showing')
                    .siblings().removeClass('is-showing');
  
    $('.modal-header span').first().addClass('is-active')
                            .siblings().removeClass('is-active');
   $(this).hide();
  });




//   modal dialog =>

$(".dialogCorso .close,#backCover").click(function () {
    id = $(this).data("id");
    $("#backCover").removeClass("open");
    $(".dialogCorso").removeClass("open");
  });

  $(".corso-testo a").click(function () {

    id = $(this).data("dialog");
    $("#backCover").addClass("open");
    $("#" + id).addClass("open");

  });

  $(".corso-testo a,.box-right a").click(function () {

    if ($(this).data("esterno") == "si") return;

    id = $(this).data("dialog");
    $("#backCover").addClass("open");
    $("#" + id).addClass("open");

  });

});
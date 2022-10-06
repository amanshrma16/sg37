

$(document).ready(function () {

// $("#slide3").click(function(){
            
// });   

$("#slide3").click(function () {
    $("#slide3").text(($("#slide3").html() == "Enquire") ? "Close X" : "Enquire");
    if($("#slide3").html()=="Enquire"){
        $("#second2").addClass("hidden");
        $("#slide3").css({"left":"-47.4%"});
    }
    else{
        $("#second2").removeClass("hidden");
        $("#slide3").css({"left":"-2.3%"});
    }
})


        

       
 
    
// $('.slider').slick({
// 	    dots:true,
//         infinite: !0,
//         fade:true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         vertical: !1,
//         pauseOnHover: !1,
//         autoplay: !0,
//         arrows: !1
// 	});




var $gallery = $('.halmark-slider');
var slideCount = null;
//  $gallery.slick({
// 	         vertical: false,
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll:1,
//     pauseOnHover: false,
//     autoplay:true,
//             //nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/Aroow.svg"/></span>',
//             //prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/Aroow.svg"/></span>'
//         });
        
    
    $('.left').click(function(){
      $('.halmark-slider').slick('slickPrev');
    })

    $('.right').click(function(){
      $('.halmark-slider').slick('slickNext');
    }) 
    
$gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
    
$(window).scroll(function() {
        var sticky = $('nav'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });



// wow = new WOW({
//     boxClass: 'wow', // default
//     animateClass: 'animated',
//     inClass: 'fade-in',
//     outClass: 'fade-out',
//     inDuration: 1500,
//     outDuration: 800, // default
//     offset: 0, // default
//     mobile: true, // default
//     live: true // default
// })
// wow.init();

//       $('.navbar-nav li a').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         && location.hostname == this.hostname) {
//           var $target = $(this.hash);
//           $target = $target.length && $target
//           || $('[name=' + this.hash.slice(1) +']');
//           if ($target.length) {
//             var targetOffset = $target.offset().top - 88;
//             $('html,body')
//             .animate({scrollTop: targetOffset}, 1000);
//            return false;
//           }
//         }
//       });
 


 $('nav .nav-link').click(function(){
       $('.navbar-collapse').removeClass('show');
    })    

if ($(window).width() < 768) {
   $('.icon-slider ').slick({
      infinite: true,
      dots:true,
      fade:false,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      nextArrow:false,
      prevArrow:false
     });
};


});

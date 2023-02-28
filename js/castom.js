$(function(){
    
    
  // back to top
  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  
   // back to top end


  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 700){
      $(".naav").addClass("nav_bg")
    }else{
      $(".naav").removeClass("nav_bg")
    }
  
  })
  
  
  $(".back_to_top").click(function(){
    $('html, body').animate({
      scrollTop:0
    },1000)
  })



                     // flot menu

  
 const element = document.getElementsByClassName("navbar");
 window.addEventListener("scroll", function() {
if (window.scrollY > 400) {
element[0].classList.add("navbg");
} else {
element[0].classList.remove("navbg");
}
});
                     



    //  banner slick

    $('.bannn').slick({
        nextArrow:".next",
        prevArrow:".prev",
        dots:true
       
    });   

    // responsive screenshots slick

    $('.screenshots_img').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow:".next",
      prevArrow:".prev",
      dots:true,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow:".next",
            prevArrow:".prev",
            dots:true,
          }
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow:".next",
            prevArrow:".prev",
            dots:true,
          }
        },
        {
          breakpoint: 578.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:".next",
            prevArrow:".prev",
            dots:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
      




    



      $('.frrdback_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
  
      new VenoBox({
        selector: ".my-video-links"


        
    });
              // responsive uss slick   

              

    $('.uss_b').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.uss_main'
    });
    $('.uss_main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.uss_b',
      dots: true,
      centerMode: true,
      centerPadding: "0px",
      arrows: false,
      focusOnSelect: true
    });
})

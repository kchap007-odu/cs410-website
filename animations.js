$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $("a, footer a[href='#page']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });


  // An array of the sources addresses of the iframes.
  // Note that the source addresses MUST be in the same order
  // as the iframes in order for the iframes to load correctly. 
  const iframeSrc = [
    "https://docs.google.com/presentation/d/e/2PACX-1vS9ic7TbHn6E1Ia1LE5Z43tXfbraGZnc5cyKaQNsPy6O2Y16qx1Uw2NVjAuBJOGCCTXMdwXjtRT43Co/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vSzu8PiC7daqRvGktwp79M_l7k6MPXfExUDZCMTDkkHVYqrT-yWgiD9bgmMlrEedQrUaJbAUcHts6T1/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRT-efExeVhTVb-uwEFfvDnlMrZ5r4S6KeV6Z-elzsEKVK8Pnlq3Kw3IqUwpM4YE0IFhDfvnWl4MGwF/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRW4NU1PIHvZO3CNVGgXOuXfXPP3b5tIrh76xs3dMGcqG8oG1k8MnEVXKXeUOuAYFRuUtRKLhaCqE8S/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRFaNu_nyxafTL6_o5uw2wp5wjq699bsB_7NlPg9P7qyAsHqNXudub3VOFdUROAY_oagwUYT7Evk_a4/embed?start=false&loop=false&delayms=3000"
  ];

  // Slide animation
  // Activates whenever the webpage is scrolled.
  $(window).on("scroll", slideAnimation);

  // Slide animation for elements that are onscreen when the
  // webpage loads i.e. when the webpage is refreshed
  slideAnimation();

  function slideAnimation() {
    // Check the position of every element that is
    // supposed to slide that has not already.
    $(".slide-animation:not(.slideIn)").each(function () {
      var posTop = $(this).offset().top;

      var posBottom = posTop + $(this).height();

      var winHeight = window.innerHeight;

      var winTop = $(window).scrollTop();

      var winBottom = winTop + winHeight;

      // How far from the top or bottom of the screen
      // does the element have to be to slide.
      // If activationDistance = 0 then the element will just need
      // to be onscreen to slide.
      // Undefined behavior occurs when activationDistance > winHeight / 2.
      var activationDistance = winHeight / 5;

      var activationWindowTop = winTop + activationDistance;

      var activationWindowBottom = winBottom - activationDistance;

      // If the bottom of the page doesn't slide in, the problem is here.
      // 1st check: Is the top of the element within the activation window?
      // 2nd check: Is the bottom of the element within the activation window?
      // 3rd check: Is the top of the element above the activation window and
      //            the bottom of the element below the activation window?
      //            i.e. Is the middle of the element within the activation window?
      if ((posTop > activationWindowTop && posTop < activationWindowBottom) ||
          (posBottom > activationWindowTop && posBottom < activationWindowBottom) ||
          (posTop < activationWindowTop && posBottom > activationWindowBottom)) {
        $(this).addClass("slideIn");

        // If the element contains a presentation then begin loading that presentation
        $(this).find(".presentation").each(function () {
          $("iframe", this).attr("src", iframeSrc[$("iframe").index($("iframe", this))]);
        });
      }
    });

    // If all of the elements that can slide have already
    // slid in then turn off the scroll event handler so
    // that this function stops being called.
    if ($(".slide-animation:not(.slideIn)").length == 0) {
      $(window).off("scroll", slideAnimation);
    }
  }
  
  // This indicates which of the buttons for the work breakdown
  // structure carousel is active.
  $("#wbsNav > a").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

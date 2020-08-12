$( document ).ready(function() {
  // Main variables
    var $aboutTitle = $('.about-myself .content h2');
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 60
    }, 500);
  });

  $('#collapse_toggle').click(function(){
    $('#bar1').toggleClass('openb1');
    $('#bar2').toggleClass('openb2');
    $('#bar3').toggleClass('openb3');
  });

  $(window).scroll(function() {
      // checks if window is scrolled more than 100% - 100, adds/removes solid class
      if($(this).scrollTop() > $(window).height() - 100) { 
          $('.navbar').addClass('solid');
          $('.navbar-right').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
          $('.navbar-right').removeClass('solid');
      }
    });


  /* ####### HERO SECTION ####### */

  $('.hero .content .header').delay(500).animate({
    'opacity':'1',
    'top': '50%'
  },1000);


  $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* ##### ABOUT MYSELF SECTION #### */
    if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
      $('.about-me-pic').addClass('showPic');
          setTimeout(function() {
            $('.about-myself .content h2').addClass('aboutTitleVisible');
            $('.about-myself .content p').addClass('aboutTitleVisible');
        }, 800); 
        setTimeout(function() {
          $('.specs').addClass('showspecs');
        }, 1800); 
    } 
  /* ##### EXPERIENCE SECTION #### */

      // Check the location of each element notshown */
      $('.experience .content .notshown').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){

            $(this).animate({
              'opacity':'1',
              'margin-left': '0'
            },600);
          }
      });

  /*###### SKILLS SECTION ######*/

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});

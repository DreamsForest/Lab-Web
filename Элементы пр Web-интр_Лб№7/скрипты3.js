$(function(){
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
    
});
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
  
  
    $lightbox
      .append($img)
      .append($caption);
  
   
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
    
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");
  
      
  
      $img.attr('src', src);
      $caption.text(cap);
  
    
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
}());
function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});
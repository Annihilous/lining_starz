// ######## ##     ## ##    ##  ######  ######## ####  #######  ##    ##  ######  
// ##       ##     ## ###   ## ##    ##    ##     ##  ##     ## ###   ## ##    ## 
// ##       ##     ## ####  ## ##          ##     ##  ##     ## ####  ## ##       
// ######   ##     ## ## ## ## ##          ##     ##  ##     ## ## ## ##  ######  
// ##       ##     ## ##  #### ##          ##     ##  ##     ## ##  ####       ## 
// ##       ##     ## ##   ### ##    ##    ##     ##  ##     ## ##   ### ##    ## 
// ##        #######  ##    ##  ######     ##    ####  #######  ##    ##  ######  

function centerElementVertical(){

  $(".vertical-parent").each(function(){
    var parent          = $(this),
        child           = parent.find(".vertical-child"),
        parentHeight    = parent.height(),
        childHeight     = child.height(),
        margin          = (0.5 * parentHeight) - (0.5 * childHeight);

    child.css({
      'margin-top' : margin
    });
  });
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function matchHeights(){
  $(".height-group").each(function(){
    maxHeight = -1;
    $(".height-member").each(function(){
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $(".height-member").each(function(){
      $(this).height(maxHeight);
    });
  });
}

// ########  ########  ######  #### ######## ######## 
// ##     ## ##       ##    ##  ##       ##  ##       
// ##     ## ##       ##        ##      ##   ##       
// ########  ######    ######   ##     ##    ######   
// ##   ##   ##             ##  ##    ##     ##       
// ##    ##  ##       ##    ##  ##   ##      ##       
// ##     ## ########  ######  #### ######## ######## 

$(window).resize(function(){
  if ( window.innerWidth > 768 ) {
    matchHeights();
  }
  centerElementVertical();

}).resize();


// ##        #######     ###    ########  
// ##       ##     ##   ## ##   ##     ## 
// ##       ##     ##  ##   ##  ##     ## 
// ##       ##     ## ##     ## ##     ## 
// ##       ##     ## ######### ##     ## 
// ##       ##     ## ##     ## ##     ## 
// ########  #######  ##     ## ########  

$(window).load(function(){
  if ( window.innerWidth > 768 ) {
    matchHeights();
  }
  centerElementVertical()

});

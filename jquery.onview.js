(function($) {
    $.fn.onview = function(incallback, outcallback) {
        var targets = $(this);
                
        $(document).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
           targets.each(function() {
               var elem = $(this);
               var top = (elem.offset().top - ($(window).innerHeight() - elem.height())) / 2;
               
               if (scrollTop >= top) {
                   if (!elem.attr('data-visible')) {
                        incallback(elem);
                       elem.attr('data-visible', true);
                   }
               }else{
                   if(elem.attr('data-visible')){
                       outcallback(elem);
                        elem.removeAttr('data-visible');
                  }
               }
           });
        });
    }
    
}(jQuery));
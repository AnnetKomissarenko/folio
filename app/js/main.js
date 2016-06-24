$(document).ready(function() { 
    $('.menuItem > a').click(function(){  

        if($(this).next('.subPage').hasClass('active')){
            $(this).css('color', '#000');
            $(this).next('.subPage').slideUp(1000, function(){
                $(this).removeClass('active');
            });
        }
        else{
            $(this).css('color', '#86b11e');
            $('.subPage').not(this).slideUp(1000, function(){
                $('.subPage').not(this).removeClass('active');
            });
            $(this).next('.subPage').slideDown(1000, function(){
                $(this).addClass('active');
        });
        }
    }); 
});


$(document).ready(function(){
    $(document).mouseup(function(e){
        var div = $(".subPage");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            div.slideUp(1000);
            div.prev('a').css('color', '#000');
        }
    });
});
$(document).ready(function(){
   $('.mini > li > a').click(function(eventObject){
        $('#gallery').css('background-image', 'url('+$(this).attr('href')+')');
        eventObject.preventDefault();
    });
    $('.mini > li > a > img').click(function(){
        $('.mini > li > a > img').fadeTo(100, 1);
        $(this).fadeTo(500, 0.6);
    });
    
});
$(document).ready(function(){
    var newSelection = '';
    $('.menuSearch > li > a').click(function(){
        $('.menuSearch > li > a').removeClass('current');
        $(this).addClass('current');
        newSelection = $(this).attr('rel');
        $('.all').not('.'+newSelection).fadeOut(300);
        $('.'+newSelection).fadeIn(300);
      
        
    });
        
        
});
$(document).ready(function(){
    var newAlbum = '';
    $('.albumCovers a').click(function(){
        newAlbum = $(this).attr('rel');
        $('.mini').not('.'+newAlbum).slideUp(100);
        $('#'+newAlbum).slideDown(1000);
    });
});
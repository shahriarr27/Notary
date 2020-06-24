$(window).on('scroll',function(){
    if($(window).scrollTop() > 300){
        $('nav').addClass('nav-height');
    }
    else{
        $('nav').removeClass('nav-height');
    }
})
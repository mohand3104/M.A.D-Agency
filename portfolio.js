$(document).ready(function(){
    $("a").on("click", function(e){
        
        $('html, header').animate({
            scrollTop: $($(this).attr("href")).offset().top
        },1000);

    })



});
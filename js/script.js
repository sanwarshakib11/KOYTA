$(function(){
    $(window).on("scroll", function(){
        //Sticky Menu Starts 
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition > 0){
            $("#header").addClass("stickyNav");
        }else{
            $("#header").removeClass("stickyNav");
        }
        //Sticky Menu Ends 
        //Back To Top Starts 
        if(scrollPosition > 600){
            $("#backToTop").fadeIn(1000);
        }else{
            $("#backToTop").fadeOut(1000);
        }

    })
    $("#backToTop").on("click", function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    })
        //Back To Top Ends 
})
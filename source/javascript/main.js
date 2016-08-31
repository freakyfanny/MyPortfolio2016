$(function () {
$(window).scroll(function () {        
        //navbar sticky       
        var headerimg = $("#headerImg");
        var headerimgchilds = $("#headerImg div");
        var header = $("header");
        var heading = $("#heading");
        var navbar = $("nav[role='navigation']");
        var headingheight = 359;
        var bodyscrolltop = $("body").scrollTop();
        
        console.log(headingheight);
        var i = 0;
    
        if(bodyscrolltop > headingheight){
            navbar.addClass("stickyNav"); 
            header.addClass("stickyHead");  
            
            headerimg.addClass("stickyImgHead");
            headerimgchilds.addClass("cropImg");
            headerimg.removeClass("blurImg");
            console.log("if" + bodyscrolltop);
        } else{
            navbar.removeClass("stickyNav"); 
            header.removeClass("stickyHead"); 
            
            headerimg.addClass("blurImg");
            headerimg.removeClass("stickyImgHead");
            headerimgchilds.has("cropImg").removeClass("cropImg");
            console.log("else" + bodyscrolltop);
        }
                    
        //blur effect parallax
        var oVal;               
        oVal = bodyscrolltop / 240;
        return $(".blur").css("opacity", oVal);
    });

}.call(this));

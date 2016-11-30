var header      = document.querySelector(".header");
var menuWrapper = document.querySelector(".menu-wrapper");
var menu        = document.querySelector(".menu");
var navbarHeader= document.querySelector(".menu .navbar-header");
var headroom    = new Headroom(menuWrapper);

headroom.onTop = function() {
    menuWrapper.style.height = "auto";
}

headroom.onNotTop = function() {
    menuWrapper.style.height = menu.offsetHeight + "px";
}

headroom.init();

// $(document).ready(function() {
//     headroom.offset = header.offsetHeight;
// });

$(window).on("load resize ready", function() {
    headroom.offset = header.offsetHeight;
});

$(function(){
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').is(':visible'))
            $('.navbar-toggle').click();
    });
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - navbarHeader.offsetHeight
                    }, 500);
                    return false;
                }
            }
        });
    });
});

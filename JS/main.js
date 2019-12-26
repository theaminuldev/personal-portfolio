$(document).ready(function () {

    /*====================================*/
    /*WOW JS*/
    /*====================================*/
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
    new WOW().init();

    /*================================*/
    /* MOBILE MENU SECTION STRAT*/
    /*================================*/
    var menuKiOpen = false;
    $(".header .mobile-menu").on("click", function () {
        //$(".header .menu").slideToggle(1000);
        if (menuKiOpen == false) {
            $(".header .menu").slideDown(1000);
            $(".header .mobile-menu i").addClass("fa-times").removeClass("fa-bars");
            menuKiOpen = true;
        } else {
            $(".header .menu").slideUp(1000);
            $(".header .mobile-menu i").removeClass("fa-times").addClass("fa-bars");
            menuKiOpen = false;
        }
    });
    $(window).on("resize", function () {
        var deviceWidth = $(window).width();
        if (deviceWidth > 767) {
            $(".header .menu").removeAttr("style");
        }
    });

    /* ==================================== */
    /* MOBILE MENU SEFCTION END*/
    /* ==================================== */




    /*======================================*/
    // scroll top active strat
    //===================================//
    var shapers = $(window);
    var page = $('html, body');

    $(".scrolltop").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000)
    });
    //
    //==================================//
    // menu fix on scroll
    //==================================//
    shapers.on('scroll', function () {
        if (shapers.scrollTop() > 100) {
            $('.header').addClass('animated slideInDown fix')
        } else {
            $('.deader').removeClass('animated slideInDown fix')
        }
    })
    /*=====================================*/
    /*MENU FIX ON SCROL END*/
    /*=====================================*/



    /*=====================================*/
    /*PORTFOLIO START*/
    /*=====================================*/
    $('.portfolios').filterData({
        aspectRatio: '8:5',
        nOfRow: 3,
        itemDistance: 0
    });
    $('.portfolio-controllers button').on('click', function () {
        $('.portfolio-controllers button').removeClass('active-work');
        $(this).addClass('active-work');
    });
    /*=====================================*/
    /*PORTFOLIO END*/
    /*=====================================*/



    /*======================================*/
    /*CONTACT SECTION STRAT*/
    /*======================================*/

    $(".contact-us .single-input input,.contact-us .single-input textarea").on("focus", function () {
        /*
        $(".contact-us .single-input label").css({
           "top":"8px",
            "transition":".5s"
        });
        */
        $(this).prev().css({
            "top": "8px",
            "transition": ".5s"
        });
    });


    $(".contact-us .single-input input,.contact-us .single-input textarea").on("blur", function () {
        var inputFieldValue = $(this).val();
        if (inputFieldValue == "") {
            $(this).prev().css({
                "top": "",
                "transition": ".5s"
            });
        } else {
            var a = $(this).prev().css({
                "color": "green"
            })
        }
    });
    (function ($) {
        "use strict";
        // all parameters are optional
        smartScroll.init({
            speed: 1000, // default 500
            addActive: true, // default true
            activeClass: "active", // default active
            offset: 150 // default 100
        }, function () {
            console.log("callback");
        });
    })(jQuery);

});

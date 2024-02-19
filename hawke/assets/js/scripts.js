/*-----------------------------------------------------------------------------------

    Theme Name: Hawke
    Theme URI: http://
    Description: Creative Personal & Portfolio
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";

    var wind = $(window);


    /* =============================================================================
    -----------------------------  Smooth Scroll nav   -----------------------------
    ============================================================================= */


    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -80            // offste (in px) for fixed top navigation
    });


    /* =============================================================================
    -----------------------------  Color Switch   -----------------------------
    ============================================================================= */

    $(".setting-switch .switch-color li").on("click", function () {
        $(":root").css("--maincolor", $(this).data("color"));
        $(".setting-switch .switch-color li").removeClass("active")
        $(this).addClass("active");
    });

    $(".setting-switch .icon").on("click", function () {
        $(".setting-switch ").toggleClass("open");
    });

    $("main").on("click", function () {
        $(".setting-switch ").removeClass("open");
    });


    /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).find('.dropdown-menu').removeClass('show')
    });

    $('.navbar .dropdown-item').hover(function () {
        $(this).find('.dropdown-side').addClass('show');
    }, function () {
        $(this).find('.dropdown-side').removeClass('show')
    });

    $(".navbar .search-form").on("click", ".search-icon", function () {

        $(".navbar .search-form").toggleClass("open");

        if ($(".navbar .search-form").hasClass('open')) {

            $(".search-form .close-search").slideDown();

        } else {

            $(".search-form .close-search").slideUp();
        }
    });

    $(".navbar").on("click", ".navbar-toggler", function () {

        $(".navbar .navbar-collapse").toggleClass("show");
    });

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-light.png');
        }
    });

    function noScroll() {
        window.scrollTo(0, 0);
    }


    /* =============================================================================
    ------------------------------  Data Background   ------------------------------
    ============================================================================= */

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* =============================================================================
    -----------------------------------  Tabs  -------------------------------------
    ============================================================================= */

    $('#tabs .tab-links').on('click', '.item-link', function () {

        var tab_id = $(this).attr('data-tab');

        $('#tabs .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').hide();
        $("#" + tab_id).show();

    });

    $('#tabs-fade .tab-links').on('click', '.item-link', function () {

        var tab2_id = $(this).attr('data-tab');

        $('#tabs-fade .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').fadeOut();
        $("#" + tab2_id).fadeIn();

    });


    /* =============================================================================
    --------------------------------  Accordion  -----------------------------------
    ============================================================================= */

    $(".accordion").on("click", ".title", function () {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click", ".item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });


    /* =============================================================================
    ---------------------------------  Tolltip  ------------------------------------
    ============================================================================= */

    $('[data-tooltip-tit]').hover(function () {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-tit').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });

    $('[data-tooltip-sub]').hover(function () {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-sub').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-sub').css({ top: e.pageY + (-15), left: e.pageX + 30 })
    });


    /* =============================================================================
    -------------------------------  Progress Bar  ---------------------------------
    ============================================================================= */

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* =============================================================================
    -----------------------------  Trigger Plugins  --------------------------------
    ============================================================================= */


    /* ========== Sticky ========== */

    $("#sticky_item").stick_in_parent();


    /* ========== YouTubePopUp ========== */

    $("a.vid").YouTubePopUp();


    /* ========== parallaxie ========== */

    $('.parallaxie').parallaxie({
        speed: 0.8,
        size: "cover"
    });


    /* ========== paroller ========== */

    $('.my-paroller').paroller();


    /* ========== magnificPopup ========== */

    $('.popup-img , .gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* =========== hover3d =========== */

    $(".hover3d").hover3d({
        selector: ".hover3d-child",
        invert: true
    });


    /* =========== countUp =========== */

    $('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });

    /* ===========  Splitting  =========== */

    Splitting();

});


/* =============================================================================
-----------------------------  Parallax Animation  -----------------------------
============================================================================= */

(function () {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        const hoverAnim = this.querySelector('.hover-anim');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
        function () {
            $(".cursor").addClass("cursor-active");
        }, function () {
            $(".cursor").removeClass("cursor-active");
        }
    );



    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });
})();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(window).on("load", function () {


    /* =============================================================================
    ---------------------------------  Preloader  ----------------------------------
    ============================================================================= */

    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);


    /* =============================================================================
    -----------------------------  isotope Masonery   ------------------------------
    ============================================================================= */

    $('.gallery').isotope({
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope();

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* =============================================================================
    -----------------------------  Contact Valdition   -----------------------------
    ============================================================================= */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function () {

    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});



/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(function () {


    "use strict";



    /* =============================================================================
    ----------------------------  Swiper Data Controls   ---------------------------
    ============================================================================= */

    $('[data-carousel="swiper"]').each(function () {

        var containe = $(this).find('[data-swiper="container"]').attr('id');
        var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
        var prev = $(this).find('[data-swiper="prev"]').attr('id');
        var next = $(this).find('[data-swiper="next"]').attr('id');
        var items = $(this).data('items');
        var autoplay = $(this).data('autoplay');
        var iSlide = $(this).data('initial');
        var loop = $(this).data('loop');
        var parallax = $(this).data('parallax');
        var space = $(this).data('space');
        var speed = $(this).data('speed');
        var center = $(this).data('center');
        var effect = $(this).data('effect');
        var direction = $(this).data('direction');
        var mousewheel = $(this).data('mousewheel');

        // Configuration
        var conf = {

        };

        // Responsive
        if ($(this).hasClass('swiper5')) {
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }
            };
        };

        if ($(this).hasClass('swiper4')) {
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }
            };
        };

        if ($(this).hasClass('work-swiper')) {
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.work-controls .swiper-button-next',
                    prevEl: '.work-controls .swiper-button-prev'
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }
            };
        };

        if ($(this).hasClass('testim-swiper')) {
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.testim-controls .swiper-button-next',
                    prevEl: '.testim-controls .swiper-button-prev'
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }
            };
        };

        if ($(this).hasClass('pagination')) {
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            };
        };

        if (items) {
            conf.slidesPerView = items
        };
        if (autoplay) {
            conf.autoplay = autoplay
        };
        if (iSlide) {
            conf.initialSlide = iSlide
        };
        if (center) {
            conf.centeredSlides = center
        };
        if (loop) {
            conf.loop = loop
        };
        if (parallax) {
            conf.parallax = parallax
        };
        if (space) {
            conf.spaceBetween = space
        };
        if (speed) {
            conf.speed = speed
        };
        if (mousewheel) {
            conf.mousewheel = mousewheel
        };
        if (effect) {
            conf.effect = effect
        };
        if (direction) {
            conf.direction = direction
        };
        if (prev) {
            conf.prevButton = '#' + prev
        };
        if (next) {
            conf.nextButton = '#' + next
        };
        if (pagination) {
            conf.pagination = '#' + pagination,
                conf.paginationClickable = true
        };

        // Initialization
        if (containe) {
            var initID = '#' + containe;
            var init = new Swiper(initID, conf);
        };
    });


    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container",
        {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );

});

$(function () {
    var width = $(window).width();
    if (width < 991) {

        "use strict";

        $(".navbar .navbar-nav").on("click", ".nav-link", function () {

            $(".navbar .navbar-nav .dropdown .dropdown-menu").removeClass("show");

            $(this).parent().find(".dropdown-menu").addClass("show");
        });
    }
});

/*-----------------------------------------------------------------------------------

	Theme Name: NICK DIEGO
	Theme URI: #
	Description: Nick Diego | Personal Portfolio
	Author: Aminul Islam
	Author URI: theaminul.com
	Version: 1.0.0

-----------------------------------------------------------------------------------*/

$(document).ready(function () {
	const wind = $(window);

	/* =============================================================================
	-----------------------------  Smooth Scroll nav   -----------------------------
	============================================================================= */

	$.scrollIt({
		upKey: 38, // key code to navigate to the next section
		downKey: 40, // key code to navigate to the previous section
		easing: 'swing', // the easing function for animation
		scrollTime: 600, // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null, // function(pageIndex) that is called when page is changed
		topOffset: -80, // offste (in px) for fixed top navigation
	});

	/* =============================================================================
	--------------------------------  Navbar Menu   --------------------------------
	============================================================================= */

	(function () {
		$('.navbar .dropdown').hover(
			function () {
				$(this).find('.dropdown-menu').addClass('show');
			},
			function () {
				$(this).find('.dropdown-menu').removeClass('show');
			},
		);

		$('.navbar .dropdown-item').hover(
			function () {
				$(this).find('.dropdown-side').addClass('show');
			},
			function () {
				$(this).find('.dropdown-side').removeClass('show');
			},
		);

		$('.navbar .search-form').on('click', '.search-icon', function () {
			$('.navbar .search-form').toggleClass('open');

			if ($('.navbar .search-form').hasClass('open')) {
				$('.search-form .close-search').slideDown();
			} else {
				$('.search-form .close-search').slideUp();
			}
		});

		$('.navbar').on('click', '.navbar-toggler', function () {
			$('.navbar .navbar-collapse').toggleClass('show');
		});

		wind.on('scroll', function () {
			const bodyScroll = wind.scrollTop();
			const navbar = $('.navbar');
			const logo = $('.navbar.change .logo> img');

			if (bodyScroll > 300) {
				navbar.addClass('nav-scroll');
				logo.attr('src', 'assets/imgs/logo-dark.png');
			} else {
				navbar.removeClass('nav-scroll');
				logo.attr('src', 'assets/imgs/logo-light.png');
			}
		});

		function noScroll() {
			window.scrollTo(0, 0);
		}
	})()

	/* =============================================================================
	------------------------------  Data Background   ------------------------------
	============================================================================= */

	const pageSection = $('.bg-img, section');
	pageSection.each(function (indx) {
		if ($(this).attr('data-background')) {
			$(this).css(
				'background-image',
				`url(${$(this).data('background')})`,
			);
		}
	});

	/* =============================================================================
	-----------------------------------  Tabs  -------------------------------------
	============================================================================= */

	$('#tabs .tab-links').on('click', '.item-link', function () {
		const tab_id = $(this).attr('data-tab');

		$('#tabs .tab-links .item-link').removeClass('current');
		$(this).addClass('current');

		$('.tab-content').hide();
		$(`#${tab_id}`).show();
	});

	$('#tabs-fade .tab-links').on('click', '.item-link', function () {
		const tab2_id = $(this).attr('data-tab');

		$('#tabs-fade .tab-links .item-link').removeClass('current');
		$(this).addClass('current');

		$('.tab-content').fadeOut();
		$(`#${tab2_id}`).fadeIn();
	});

	/* =============================================================================
	--------------------------------  Accordion  -----------------------------------
	============================================================================= */

	$('.accordion').on('click', '.title', function () {
		$(this).next().slideDown();

		$('.accordion-info').not($(this).next()).slideUp();
	});

	$('.accordion').on('click', '.item', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	/* =============================================================================
	---------------------------------  Tolltip  ------------------------------------
	============================================================================= */

	$('[data-tooltip-tit]')
		.hover(
			function () {
				$('<div class="div-tooltip-tit"></div>')
					.text($(this).attr('data-tooltip-tit'))
					.appendTo('body')
					.fadeIn('slow');
			},
			function () {
				$('.div-tooltip-tit').remove();
			},
		)
		.mousemove(function (e) {
			$('.div-tooltip-tit').css({
				top: e.pageY + 10,
				left: e.pageX + 20,
			});
		});

	$('[data-tooltip-sub]')
		.hover(
			function () {
				$('<div class="div-tooltip-sub"></div>')
					.text($(this).attr('data-tooltip-sub'))
					.appendTo('body')
					.fadeIn('slow');
			},
			function () {
				$('.div-tooltip-sub').remove();
			},
		)
		.mousemove(function (e) {
			$('.div-tooltip-sub').css({
				top: e.pageY + -15,
				left: e.pageX + 30,
			});
		});

	/* =============================================================================
	-------------------------------  Progress Bar  ---------------------------------
	============================================================================= */

	wind.on('scroll', function () {
		$('.skill-progress .progres').each(function () {
			const bottom_of_object =
				$(this).offset().top + $(this).outerHeight();
			const bottom_of_window = $(window).scrollTop() + $(window).height();
			const myVal = $(this).attr('data-value');
			if (bottom_of_window > bottom_of_object) {
				$(this).css({
					width: myVal,
				});
			}
		});
	});

	/* =============================================================================
	-----------------------------  Trigger Plugins  --------------------------------
	============================================================================= */

	/* ========== Sticky ========== */

	$('#sticky_item').stick_in_parent();

	/* ========== YouTubePopUp ========== */

	// $('a.vid').YouTubePopUp();

	/* ========== parallaxie ========== */

	// $('.parallaxie').parallaxie({
	// 	speed: 0.8,
	// 	size: 'cover',
	// });

	/* ========== paroller ========== */

	// $('.my-paroller').paroller();

	/* ========== magnificPopup ========== */

	// $('.popup-img , .gallery').magnificPopup({
	// 	delegate: '.popimg',
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true,
	// 	},
	// });

	/* =========== hover3d =========== */

	// $('.hover3d').hover3d({
	// 	selector: '.hover3d-child',
	// 	invert: true,
	// });

	/* =========== countUp =========== */

	$('.number-sec .count').countUp({
		delay: 10,
		time: 500,
	});

	/* ===========  Splitting  =========== */

	Splitting();

	/* =============================================================================
	-----------------------------  Parallax Animation  -----------------------------
	============================================================================= */

	(function () {
		const link = $('.hover-this');
		const cursor = $('.cursor');
		const cursorPointerElements = $('a, .cursor-pointer');
		const elements = $('.rolling-text');

		const animateit = function (e) {
			const hoverAnim = $(this).find('.hover-anim');
			const { offsetX: x, offsetY: y } = e;
			const { offsetWidth: width, offsetHeight: height } = this;
			const move = 25;
			const xMove = (x / width) * (move * 2) - move;
			const yMove = (y / height) * (move * 2) - move;
			hoverAnim.css('transform', `translate(${xMove}px, ${yMove}px)`);
			if (e.type === 'mouseleave') hoverAnim.css('transform', '');
		};

		const editCursor = (e) => {
			const { clientX: x, clientY: y } = e;
			cursor.css({ left: `${x}px`, top: `${y}px` });
		};

		link.on('mousemove', animateit).on('mouseleave', animateit);
		$(window).on('mousemove', editCursor);

		const cursorElement = $('.cursor');
		cursorPointerElements.on('mouseenter', () => {
			cursorElement.addClass('cursor-active');
		}).on('mouseleave', () => {
			cursorElement.removeClass('cursor-active');
		});

		elements.each(function () {
			const innerText = $(this).text().trim();
			$(this).empty();

			const textContainer = $('<div>').addClass('block');

			for (const letter of innerText) {
				const span = $('<span>').addClass('letter').text(letter.trim() === '' ? '\xa0' : letter);
				textContainer.append(span);
			}

			$(this).append(textContainer.clone()).append(textContainer.clone());
		});

		elements.on('mouseenter', function () {
			$(this).removeClass('play');
		});
	})()

	/* =============================================================================
	---------------------------------  Preloader  ----------------------------------
	============================================================================= */

	const body = $('body');
	body.addClass('loaded');
	setTimeout(function () {
		body.removeClass('loaded');
	}, 1500);

	/* =============================================================================
	-----------------------------  isotope Masonery   ------------------------------
	============================================================================= */

	// $('.gallery').isotope({
	// 	itemSelector: '.items',
	// });

	// const $gallery = $('.gallery').isotope();

	// $('.filtering').on('click', 'span', function () {
	// 	const filterValue = $(this).attr('data-filter');
	// 	$gallery.isotope({ filter: filterValue });
	// });

	// $('.filtering').on('click', 'span', function () {
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });

	/* =============================================================================
	-----------------------------  Contact Valdition   -----------------------------
	============================================================================= */

	$('#contact-form').validator();
	$('#contact-form').on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			const url = 'contact.php';

			$.ajax({
				type: 'POST',
				url,
				data: $(this).serialize(),
				success(data) {
					const messageAlert = `alert-${data.type}`;
					const messageText = data.message;

					const alertBox = `<div class="alert ${messageAlert} alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>${messageText}</div>`;
					if (messageAlert && messageText) {
						$('#contact-form').find('.messages').html(alertBox);
						$('#contact-form')[0].reset();
					}
				},
			});
			return false;
		}
	});

	/* =============================================================================
	-------------------------------  Wow Animation   -------------------------------
	============================================================================= */

	(function () {
		wow = new WOW({
			animateClass: 'animated',
			offset: 100,
		});
		wow.init();
	})()

	/* =============================================================================
	-----------------------------  Navbar Dropdown   ------------------------------
	============================================================================= */

	const width = $(window).width();
	if (width < 991) {
		('use strict');

		$('.navbar .navbar-nav').on('click', '.nav-link', function () {
			$('.navbar .navbar-nav .dropdown .dropdown-menu').removeClass(
				'show',
			);

			$(this).parent().find('.dropdown-menu').addClass('show');
		});
	}

	$('[data-carousel="swiper"]').each(function () {
		const containerId = $(this).find('[data-swiper="container"]').attr('id');
		const paginationId = $(this).find('[data-swiper="pagination"]').attr('id');
		const prevId = $(this).find('[data-swiper="prev"]').attr('id');
		const nextId = $(this).find('[data-swiper="next"]').attr('id');
		const items = $(this).data('items');
		const autoplay = $(this).data('autoplay');
		const initialSlide = $(this).data('initial');
		const loop = $(this).data('loop');
		const parallax = $(this).data('parallax');
		const space = $(this).data('space');
		const speed = $(this).data('speed');
		const center = $(this).data('center');
		const effect = $(this).data('effect');
		const direction = $(this).data('direction');
		const mousewheel = $(this).data('mousewheel');

		let conf = {};

		if ($(this).hasClass('swiper5')) {
			conf = {
				breakpoints: {
					0: { slidesPerView: 2 },
					640: { slidesPerView: 3 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 5 }
				}
			};
		} else if ($(this).hasClass('swiper4')) {
			conf = {
				breakpoints: {
					0: { slidesPerView: 1, spaceBetween: 10 },
					640: { slidesPerView: 2, spaceBetween: 30 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 }
				}
			};
		} else if ($(this).hasClass('work-swiper')) {
			conf = {
				pagination: { el: '.swiper-pagination', clickable: true },
				navigation: { nextEl: '.work-controls .swiper-button-next', prevEl: '.work-controls .swiper-button-prev' },
				breakpoints: {
					0: { slidesPerView: 1 },
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 2 }
				}
			};
		} else if ($(this).hasClass('testim-swiper')) {
			conf = {
				pagination: { el: '.swiper-pagination', clickable: true },
				navigation: { nextEl: '.testim-controls .swiper-button-next', prevEl: '.testim-controls .swiper-button-prev' },
				breakpoints: {
					0: { slidesPerView: 1 },
					640: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					1024: { slidesPerView: 2 }
				}
			};
		} else if ($(this).hasClass('pagination')) {
			conf = { pagination: { el: '.swiper-pagination', clickable: true } };
		}

		// Apply individual settings
		if (items) conf.slidesPerView = items;
		if (autoplay) conf.autoplay = autoplay;
		if (initialSlide) conf.initialSlide = initialSlide;
		if (loop) conf.loop = loop;
		if (parallax) conf.parallax = parallax;
		if (space) conf.spaceBetween = space;
		if (speed) conf.speed = speed;
		if (center) conf.centeredSlides = center;
		if (mousewheel) conf.mousewheel = mousewheel;
		if (effect) conf.effect = effect;
		if (direction) conf.direction = direction;
		if (prevId) conf.prevButton = `#${prevId}`;
		if (nextId) conf.nextButton = `#${nextId}`;
		if (paginationId) conf.pagination = `#${paginationId}`, conf.paginationClickable = true;

		// Initialize swiper if container exists
		if (containerId) new Swiper(`#${containerId}`, conf);
	});

	// Preloader animation
	const tl = gsap.timeline();
	tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', { delay: 1.5, y: -100, opacity: 0 })
		.to($('#svg'), { duration: 0.5, attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z' }, ease: 'power2.easeIn' })
		.to($('#svg'), { duration: 0.5, attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z' }, ease: 'power2.easeOut' })
		.to('.loader-wrap', { y: -1500 })
		.to('.loader-wrap', { zIndex: -1, display: 'none' })
		.from($('header'), { y: 200 }, '-=1.5')
		.from($('header .container'), { y: 40, opacity: 0, delay: 0.3 }, '-=1.5');

	/* =============================================================================
	-----------------------------  Button scroll up   ------------------------------
	============================================================================= */

	(function () {
		const progressPath = $('.progress-wrap path')[0];
		const pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

		const updateProgress = function () {
			const scroll = $(window).scrollTop();
			const height = $(document).height() - $(window).height();
			const progress = pathLength - (scroll * pathLength) / height;
			progressPath.style.strokeDashoffset = progress;
		};

		updateProgress();
		$(window).scroll(updateProgress);

		const offset = 150;
		const duration = 550;

		$(window).on('scroll', function () {
			$('.progress-wrap').toggleClass('active-progress', $(this).scrollTop() > offset);
		});

		$('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		});

	})()
});

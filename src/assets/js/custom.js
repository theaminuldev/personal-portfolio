/**
 * Custom JS
 * @description Place your custom scripts here
 * @var $ jQuery
 * @see https://api.jquery.com/
 */
import $ from 'jquery';

/**
 * Init Splitting.js
 * @description Splitting is a JavaScript microlibrary for splitting strings into individual characters, words, and lines, and exporting them as HTML elements.
 * @var Splitting
 * @see https://splitting.js.org/
 */
import Splitting from 'splitting';
import 'splitting/dist/splitting-cells.css';
import 'splitting/dist/splitting.css';

/** Init CountUp.js
 * @description CountUp.js is a dependency-free, lightweight JavaScript "class" that can be used to quickly create animations that display numerical data in a more interesting way.
 * @var CountUp 
 * @see https://inorganik.github.io/countUp.js/
 *
*/
import { CountUp } from 'countup.js';

/**
 * Init scrollit.js
 * @description A jQuery plugin that makes it easy to create paginated, feature-rich, single-page websites out of existing content.
 * @var scrollIt
 * @see https://github.com/cmpolis/scrollIt.js
 */


/**
 * Init 'sticky-kit';
 * @description Sticky-kit provides an easy way to attach elements to the page when the user scrolls such that the element is always visible.
 * @var sticky-kit
 * @see http://leafo.net/sticky-kit/
 */
import 'sticky-kit/dist/sticky-kit';

/** 
 * Init 'wow.js';
 * @description Reveal CSS animation as you scroll down a page.
 * @var WOW
 * @see https://wowjs.uk/
 *
*/
import * as wowjs from 'wowjs';
const WOW = wowjs.WOW;

/**
 * Init Swiper 
 * @description Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior.
 * @var Swiper
 * @see https://swiperjs.com/
 */
import Swiper from 'swiper';
import 'swiper/css';

/**
 * Init Gsap 
 * @description GreenSock Animation Platform (GSAP) is a suite of tools for scripted animation.
 * @var gsap
 * @see https://greensock.com/gsap/
 */
import { gsap } from 'gsap';

/**
 * Init Popper 
 * @description Tooltip & Popover Positioning Engine
 * @var Popper
 * @see https://popper.js.org/
 */
import '@popperjs/core';


/**
 * Init bootstrap
 * @description The most popular front-end framework for developing responsive, mobile-first projects on the web.
 * @var bootstrap
 * @see https://getbootstrap.com/
 * 
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/**
 * Init animate.css
 * @description A cross-browser library of CSS animations. As easy to use as an easy thing.
 * @var animate.css
 * @see https://animate.style/
 */
import 'animate.css/animate.min.css';

/**
 * Init fontawesome
 * @description The world's most popular and easiest to use icon set just got an upgrade. More icons. More styles.
 * @var fontawesome
 * @see https://fontawesome.com/
 */
import '@fortawesome/fontawesome-free/css/all.min.css';

$(document).ready(function () {
	// CountUp.js example
	const options = {
		separator: '',
		decimal: '.4',
		prefix: '77',
		suffix: '7',
	};
	new CountUp('myTargetElement', 7897, options)

	// Splitting.js example
	const results = Splitting({
		target: '.image',
		by: 'cells',
		image: true,
		cols: 2,
		rows: 2
	});

	// scrollit.js example
	$.scrollIt({
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTime: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset: 0
	});

	// sticky-kit example
	$('#sticky_item').stick_in_parent();

	// Wow js example
	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
	});
	wow.init();

	// Swiper example
	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	// Gsap example
	gsap.timeline()
		.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', { delay: 1.5, y: -100, opacity: 0 })
		.to($('#svg'), { duration: 0.5, attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z' }, ease: 'power2.easeIn' })
		.to($('#svg'), { duration: 0.5, attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z' }, ease: 'power2.easeOut' })
		.to('.loader-wrap', { y: -1500, zIndex: -1, display: 'none' })
		.from($('header'), { y: 200 }, '-=1.5')
		.from($('header .container'), { y: 40, opacity: 0, stagger: 0.3 }, '-=1.5');
});

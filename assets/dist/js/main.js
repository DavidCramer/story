/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global wp, skel */

/**
 * Story by HTML5 UP
 * html5up.net | @ajlkn
 * Free for personal and commercial use under the CCA 3.0 license
 * (html5up.net/license)
 */

(function ($) {
	'use strict';

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function () {

		var $window = $(window),
		    $body = $('body'),
		    $wrapper = $('#wrapper');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
		});

		// Browser fixes.

		// IE: Flexbox min-height bug.
		if (skel.vars.browser == 'ie') {
			(function () {

				var flexboxFixTimeoutId;

				$window.on('resize.flexbox-fix', function () {

					var $x = $('.fullscreen');

					clearTimeout(flexboxFixTimeoutId);

					flexboxFixTimeoutId = setTimeout(function () {

						if ($x.prop('scrollHeight') > $window.height()) {
							$x.css('height', 'auto');
						} else {
							$x.css('height', '100vh');
						}
					}, 250);
				}).triggerHandler('resize.flexbox-fix');
			})();
		}

		// Object fit workaround.
		if (!skel.canUse('object-fit')) {
			(function () {

				$('.banner .image, .spotlight .image').each(function () {

					var $this = $(this),
					    $img = $this.children('img'),
					    positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

					// Set image.
					$this.css('background-image', 'url("' + $img.attr('src') + '")').css('background-repeat', 'no-repeat').css('background-size', 'cover');

					// Set position.
					switch (positionClass.length > 1 ? positionClass[1] : '') {

						case 'left':
							$this.css('background-position', 'left');
							break;

						case 'right':
							$this.css('background-position', 'right');
							break;

						default:
						case 'center':
							$this.css('background-position', 'center');
							break;

					}

					// Hide original.
					$img.css('opacity', '0');
				});
			})();
		}

		// Smooth scroll.
		$('.smooth-scroll').scrolly();
		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

		// Wrapper.
		$wrapper.children().scrollex({
			top: '30vh',
			bottom: '30vh',
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) {
					$this.addClass('is-inactive');
				}
			}
		});

		// Items.
		$('.items').scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) {
					$this.addClass('is-inactive');
				}
			}
		}).children().wrapInner('<div class="inner"></div>');

		// Gallery.
		$('.gallery').wrapInner('<div class="inner"></div>').prepend(skel.vars.mobile ? '' : '<div class="forward"></div><div class="backward"></div>').scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) {
					$this.addClass('is-inactive');
				}
			}
		}).children('.inner')
		//.css('overflow', 'hidden')
		.css('overflow-y', skel.vars.mobile ? 'visible' : 'hidden').css('overflow-x', skel.vars.mobile ? 'scroll' : 'hidden').scrollLeft(0);

		// Style #1.
		// ...

		// Style #2.
		$('.gallery').on('wheel', '.inner', function (event) {

			var $this = $(this),
			    delta = event.originalEvent.deltaX * 10;

			// Cap delta.
			if (delta > 0) {
				delta = Math.min(25, delta);
			} else if (delta < 0) {
				delta = Math.max(-25, delta);
			}

			// Scroll.
			$this.scrollLeft($this.scrollLeft() + delta);
		}).on('mouseenter', '.forward, .backward', function (event) {

			var $this = $(this),
			    $inner = $this.siblings('.inner'),
			    direction = $this.hasClass('forward') ? 1 : -1;

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);

			// Start interval.
			this._gallery_moveIntervalId = setInterval(function () {
				$inner.scrollLeft($inner.scrollLeft() + 5 * direction);
			}, 10);
		}).on('mouseleave', '.forward, .backward', function (event) {

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);
		});

		// Lightbox.
		$('.gallery.lightbox').on('click', 'a', function (event) {

			var $a = $(this),
			    $gallery = $a.parents('.gallery'),
			    $modal = $gallery.children('.modal'),
			    $modalImg = $modal.find('img'),
			    href = $a.attr('href');

			// Not an image? Bail.
			if (!href.match(/\.(jpg|gif|png|mp4)$/)) {
				return;
			}

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Locked? Bail.
			if ($modal[0]._locked) {
				return;
			}

			// Lock.
			$modal[0]._locked = true;

			// Set src.
			$modalImg.attr('src', href);

			// Set visible.
			$modal.addClass('visible');

			// Focus.
			$modal.focus();

			// Delay.
			setTimeout(function () {

				// Unlock.
				$modal[0]._locked = false;
			}, 600);
		}).on('click', '.modal', function (event) {

			var $modal = $(this),
			    $modalImg = $modal.find('img');

			// Locked? Bail.
			if ($modal[0]._locked) {
				return;
			}

			// Already hidden? Bail.
			if (!$modal.hasClass('visible')) {
				return;
			}

			// Lock.
			$modal[0]._locked = true;

			// Clear visible, loaded.
			$modal.removeClass('loaded');

			// Delay.
			setTimeout(function () {

				$modal.removeClass('visible');

				setTimeout(function () {

					// Clear src.
					$modalImg.attr('src', '');

					// Unlock.
					$modal[0]._locked = false;

					// Focus.
					$body.focus();
				}, 475);
			}, 125);
		}).on('keypress', '.modal', function (event) {

			var $modal = $(this);

			// Escape? Hide modal.
			if (event.keyCode == 27) {
				$modal.trigger('click');
			}
		}).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find('img').on('load', function (event) {

			var $modalImg = $(this),
			    $modal = $modalImg.parents('.modal');

			setTimeout(function () {

				// No longer visible? Bail.
				if (!$modal.hasClass('visible')) {
					return;
				}

				// Set loaded.
				$modal.addClass('loaded');
			}, 275);
		});
	});
})(jQuery);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGY0OGE0ZGYzZjU5ODczOTdmODAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyJdLCJuYW1lcyI6WyIkIiwic2tlbCIsImJyZWFrcG9pbnRzIiwieGxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsInhzbWFsbCIsInh4c21hbGwiLCIkd2luZG93Iiwid2luZG93IiwiJGJvZHkiLCIkd3JhcHBlciIsImFkZENsYXNzIiwib24iLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJwbGFjZWhvbGRlciIsInByaW9yaXRpemUiLCJicmVha3BvaW50IiwiYWN0aXZlIiwidmFycyIsImJyb3dzZXIiLCJmbGV4Ym94Rml4VGltZW91dElkIiwiJHgiLCJjbGVhclRpbWVvdXQiLCJwcm9wIiwiaGVpZ2h0IiwiY3NzIiwidHJpZ2dlckhhbmRsZXIiLCJjYW5Vc2UiLCJlYWNoIiwiJHRoaXMiLCIkaW1nIiwiY2hpbGRyZW4iLCJwb3NpdGlvbkNsYXNzIiwicGFyZW50IiwiYXR0ciIsIm1hdGNoIiwibGVuZ3RoIiwic2Nyb2xseSIsImFuY2hvciIsInNjcm9sbGV4IiwidG9wIiwiYm90dG9tIiwiaW5pdGlhbGl6ZSIsInRlcm1pbmF0ZSIsImVudGVyIiwibGVhdmUiLCJoYXNDbGFzcyIsImRlbGF5Iiwid3JhcElubmVyIiwicHJlcGVuZCIsIm1vYmlsZSIsInNjcm9sbExlZnQiLCJldmVudCIsImRlbHRhIiwib3JpZ2luYWxFdmVudCIsImRlbHRhWCIsIk1hdGgiLCJtaW4iLCJtYXgiLCIkaW5uZXIiLCJzaWJsaW5ncyIsImRpcmVjdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJfZ2FsbGVyeV9tb3ZlSW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiJGEiLCIkZ2FsbGVyeSIsInBhcmVudHMiLCIkbW9kYWwiLCIkbW9kYWxJbWciLCJmaW5kIiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwi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d0ZFaEUsRUF4RkYsQ0F3Rk0sVUF4Rk4sRUF3RmtCLFFBeEZsQixFQXdGNEIsVUFBVXlDLEtBQVYsRUFBa0I7O0FBRTVDLE9BQUlnQixTQUFTdkUsRUFBRyxJQUFILENBQWI7O0FBRUE7QUFDQSxPQUFLdUQsTUFBTXdCLE9BQU4sSUFBaUIsRUFBdEIsRUFBMkI7QUFDMUJSLFdBQU9TLE9BQVAsQ0FBZ0IsT0FBaEI7QUFDQTtBQUVELEdBakdGLEVBa0dFNUIsT0FsR0YsQ0FrR1csZ0ZBbEdYLEVBbUdFcUIsSUFuR0YsQ0FtR1EsS0FuR1IsRUFvR0UzRCxFQXBHRixDQW9HTSxNQXBHTixFQW9HYyxVQUFVeUMsS0FBVixFQUFrQjs7QUFFOUIsT0FBSWlCLFlBQVl4RSxFQUFHLElBQUgsQ0FBaEI7QUFBQSxPQUNDdUUsU0FBU0MsVUFBVUYsT0FBVixDQUFtQixRQUFuQixDQURWOztBQUdBdkQsY0FBWSxZQUFXOztBQUV0QjtBQUNBLFFBQUssQ0FBQ3dELE9BQU90QixRQUFQLENBQWlCLFNBQWpCLENBQU4sRUFBcUM7QUFDcEM7QUFDQTs7QUFFRDtBQUNBc0IsV0FBTzFELFFBQVAsQ0FBaUIsUUFBakI7QUFFQSxJQVZELEVBVUcsR0FWSDtBQVlBLEdBckhGO0FBdUhBLEVBaFdEO0FBa1dBLENBOVdELEVBOFdJb0UsTUE5V0osRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGY0OGE0ZGYzZjU5ODczOTdmODAiLCIvKiBnbG9iYWwgd3AsIHNrZWwgKi9cblxuLyoqXG4gKiBTdG9yeSBieSBIVE1MNSBVUFxuICogaHRtbDV1cC5uZXQgfCBAYWpsa25cbiAqIEZyZWUgZm9yIHBlcnNvbmFsIGFuZCBjb21tZXJjaWFsIHVzZSB1bmRlciB0aGUgQ0NBIDMuMCBsaWNlbnNlXG4gKiAoaHRtbDV1cC5uZXQvbGljZW5zZSlcbiAqL1xuXG4oZnVuY3Rpb24oICQgKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRza2VsLmJyZWFrcG9pbnRzKCB7XG5cdFx0eGxhcmdlOiAnKG1heC13aWR0aDogMTY4MHB4KScsXG5cdFx0bGFyZ2U6ICcobWF4LXdpZHRoOiAxMjgwcHgpJyxcblx0XHRtZWRpdW06ICcobWF4LXdpZHRoOiA5ODBweCknLFxuXHRcdHNtYWxsOiAnKG1heC13aWR0aDogNzM2cHgpJyxcblx0XHR4c21hbGw6ICcobWF4LXdpZHRoOiA0ODBweCknLFxuXHRcdHh4c21hbGw6ICcobWF4LXdpZHRoOiAzNjBweCknXG5cdH0gKTtcblxuXHQkKCBmdW5jdGlvbigpIHtcblxuXHRcdHZhciAkd2luZG93ID0gJCggd2luZG93ICksXG5cdFx0XHQkYm9keSA9ICQoICdib2R5JyApLFxuXHRcdFx0JHdyYXBwZXIgPSAkKCAnI3dyYXBwZXInICk7XG5cblx0XHQvLyBEaXNhYmxlIGFuaW1hdGlvbnMvdHJhbnNpdGlvbnMgdW50aWwgdGhlIHBhZ2UgaGFzIGxvYWRlZC5cblx0XHQkYm9keS5hZGRDbGFzcyggJ2lzLWxvYWRpbmcnICk7XG5cblx0XHQkd2luZG93Lm9uKCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkYm9keS5yZW1vdmVDbGFzcyggJ2lzLWxvYWRpbmcnICk7XG5cdFx0XHR9LCAxMDAgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBGaXg6IFBsYWNlaG9sZGVyIHBvbHlmaWxsLlxuXHRcdCQoICdmb3JtJyApLnBsYWNlaG9sZGVyKCk7XG5cblx0XHQvLyBQcmlvcml0aXplIFwiaW1wb3J0YW50XCIgZWxlbWVudHMgb24gbWVkaXVtLlxuXHRcdHNrZWwub24oICcrbWVkaXVtIC1tZWRpdW0nLCBmdW5jdGlvbigpIHtcblx0XHRcdCQucHJpb3JpdGl6ZShcblx0XHRcdFx0Jy5pbXBvcnRhbnRcXFxcMjggbWVkaXVtXFxcXDI5Jyxcblx0XHRcdFx0c2tlbC5icmVha3BvaW50KCAnbWVkaXVtJyApLmFjdGl2ZVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cblx0XHQvLyBCcm93c2VyIGZpeGVzLlxuXG5cdFx0Ly8gSUU6IEZsZXhib3ggbWluLWhlaWdodCBidWcuXG5cdFx0aWYgKCBza2VsLnZhcnMuYnJvd3NlciA9PSAnaWUnICkge1xuXHRcdFx0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdHZhciBmbGV4Ym94Rml4VGltZW91dElkO1xuXG5cdFx0XHRcdCR3aW5kb3cub24oICdyZXNpemUuZmxleGJveC1maXgnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdHZhciAkeCA9ICQoICcuZnVsbHNjcmVlbicgKTtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCggZmxleGJveEZpeFRpbWVvdXRJZCApO1xuXG5cdFx0XHRcdFx0ZmxleGJveEZpeFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRpZiAoICR4LnByb3AoICdzY3JvbGxIZWlnaHQnICkgPiAkd2luZG93LmhlaWdodCgpICkge1xuXHRcdFx0XHRcdFx0XHQkeC5jc3MoICdoZWlnaHQnLCAnYXV0bycgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkeC5jc3MoICdoZWlnaHQnLCAnMTAwdmgnICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9LCAyNTAgKTtcblxuXHRcdFx0XHR9ICkudHJpZ2dlckhhbmRsZXIoICdyZXNpemUuZmxleGJveC1maXgnICk7XG5cblx0XHRcdH0pKCk7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0IGZpdCB3b3JrYXJvdW5kLlxuXHRcdGlmICggIXNrZWwuY2FuVXNlKCAnb2JqZWN0LWZpdCcgKSApIHtcblx0XHRcdChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQkKCAnLmJhbm5lciAuaW1hZ2UsIC5zcG90bGlnaHQgLmltYWdlJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxuXHRcdFx0XHRcdFx0JGltZyA9ICR0aGlzLmNoaWxkcmVuKCAnaW1nJyApLFxuXHRcdFx0XHRcdFx0cG9zaXRpb25DbGFzcyA9ICR0aGlzLnBhcmVudCgpLmF0dHIoICdjbGFzcycgKS5tYXRjaCggL2ltYWdlLXBvc2l0aW9uLShbYS16XSspLyApO1xuXG5cdFx0XHRcdFx0Ly8gU2V0IGltYWdlLlxuXHRcdFx0XHRcdCR0aGlzXG5cdFx0XHRcdFx0XHQuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgJGltZy5hdHRyKCAnc3JjJyApICsgJ1wiKScgKVxuXHRcdFx0XHRcdFx0LmNzcyggJ2JhY2tncm91bmQtcmVwZWF0JywgJ25vLXJlcGVhdCcgKVxuXHRcdFx0XHRcdFx0LmNzcyggJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicgKTtcblxuXHRcdFx0XHRcdC8vIFNldCBwb3NpdGlvbi5cblx0XHRcdFx0XHRzd2l0Y2ggKHBvc2l0aW9uQ2xhc3MubGVuZ3RoID4gMSA/IHBvc2l0aW9uQ2xhc3NbIDEgXSA6ICcnKSB7XG5cblx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdFx0XHQkdGhpcy5jc3MoICdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ2xlZnQnICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRcdCR0aGlzLmNzcyggJ2JhY2tncm91bmQtcG9zaXRpb24nLCAncmlnaHQnICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0XHRcdFx0JHRoaXMuY3NzKCAnYmFja2dyb3VuZC1wb3NpdGlvbicsICdjZW50ZXInICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSGlkZSBvcmlnaW5hbC5cblx0XHRcdFx0XHQkaW1nLmNzcyggJ29wYWNpdHknLCAnMCcgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH0pKCk7XG5cdFx0fVxuXG5cdFx0Ly8gU21vb3RoIHNjcm9sbC5cblx0XHQkKCAnLnNtb290aC1zY3JvbGwnICkuc2Nyb2xseSgpO1xuXHRcdCQoICcuc21vb3RoLXNjcm9sbC1taWRkbGUnICkuc2Nyb2xseSgge2FuY2hvcjogJ21pZGRsZSd9ICk7XG5cblx0XHQvLyBXcmFwcGVyLlxuXHRcdCR3cmFwcGVyLmNoaWxkcmVuKClcblx0XHRcdC5zY3JvbGxleCgge1xuXHRcdFx0XHR0b3A6ICczMHZoJyxcblx0XHRcdFx0Ym90dG9tOiAnMzB2aCcsXG5cdFx0XHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2lzLWluYWN0aXZlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0ZXJtaW5hdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2lzLWluYWN0aXZlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlbnRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCAnaXMtaW5hY3RpdmUnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxlYXZlOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcblxuXHRcdFx0XHRcdGlmICggJHRoaXMuaGFzQ2xhc3MoICdvbnNjcm9sbC1iaWRpcmVjdGlvbmFsJyApICkge1xuXHRcdFx0XHRcdFx0JHRoaXMuYWRkQ2xhc3MoICdpcy1pbmFjdGl2ZScgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0Ly8gSXRlbXMuXG5cdFx0JCggJy5pdGVtcycgKVxuXHRcdFx0LnNjcm9sbGV4KCB7XG5cdFx0XHRcdHRvcDogJzMwdmgnLFxuXHRcdFx0XHRib3R0b206ICczMHZoJyxcblx0XHRcdFx0ZGVsYXk6IDUwLFxuXHRcdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoICdpcy1pbmFjdGl2ZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGVybWluYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICdpcy1pbmFjdGl2ZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZW50ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2lzLWluYWN0aXZlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsZWF2ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XG5cblx0XHRcdFx0XHRpZiAoICR0aGlzLmhhc0NsYXNzKCAnb25zY3JvbGwtYmlkaXJlY3Rpb25hbCcgKSApIHtcblx0XHRcdFx0XHRcdCR0aGlzLmFkZENsYXNzKCAnaXMtaW5hY3RpdmUnICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdC53cmFwSW5uZXIoICc8ZGl2IGNsYXNzPVwiaW5uZXJcIj48L2Rpdj4nICk7XG5cblx0XHQvLyBHYWxsZXJ5LlxuXHRcdCQoICcuZ2FsbGVyeScgKVxuXHRcdFx0LndyYXBJbm5lciggJzxkaXYgY2xhc3M9XCJpbm5lclwiPjwvZGl2PicgKVxuXHRcdFx0LnByZXBlbmQoIHNrZWwudmFycy5tb2JpbGUgPyAnJyA6ICc8ZGl2IGNsYXNzPVwiZm9yd2FyZFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWNrd2FyZFwiPjwvZGl2PicgKVxuXHRcdFx0LnNjcm9sbGV4KCB7XG5cdFx0XHRcdHRvcDogJzMwdmgnLFxuXHRcdFx0XHRib3R0b206ICczMHZoJyxcblx0XHRcdFx0ZGVsYXk6IDUwLFxuXHRcdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoICdpcy1pbmFjdGl2ZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGVybWluYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICdpcy1pbmFjdGl2ZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZW50ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2lzLWluYWN0aXZlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsZWF2ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XG5cblx0XHRcdFx0XHRpZiAoICR0aGlzLmhhc0NsYXNzKCAnb25zY3JvbGwtYmlkaXJlY3Rpb25hbCcgKSApIHtcblx0XHRcdFx0XHRcdCR0aGlzLmFkZENsYXNzKCAnaXMtaW5hY3RpdmUnICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmNoaWxkcmVuKCAnLmlubmVyJyApXG5cdFx0XHQvLy5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpXG5cdFx0XHQuY3NzKCAnb3ZlcmZsb3cteScsIHNrZWwudmFycy5tb2JpbGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyApXG5cdFx0XHQuY3NzKCAnb3ZlcmZsb3cteCcsIHNrZWwudmFycy5tb2JpbGUgPyAnc2Nyb2xsJyA6ICdoaWRkZW4nIClcblx0XHRcdC5zY3JvbGxMZWZ0KCAwICk7XG5cblx0XHQvLyBTdHlsZSAjMS5cblx0XHQvLyAuLi5cblxuXHRcdC8vIFN0eWxlICMyLlxuXHRcdCQoICcuZ2FsbGVyeScgKVxuXHRcdFx0Lm9uKCAnd2hlZWwnLCAnLmlubmVyJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcblx0XHRcdFx0XHRkZWx0YSA9IChldmVudC5vcmlnaW5hbEV2ZW50LmRlbHRhWCAqIDEwKTtcblxuXHRcdFx0XHQvLyBDYXAgZGVsdGEuXG5cdFx0XHRcdGlmICggZGVsdGEgPiAwICkge1xuXHRcdFx0XHRcdGRlbHRhID0gTWF0aC5taW4oIDI1LCBkZWx0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XG5cdFx0XHRcdFx0ZGVsdGEgPSBNYXRoLm1heCggLTI1LCBkZWx0YSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2Nyb2xsLlxuXHRcdFx0XHQkdGhpcy5zY3JvbGxMZWZ0KCAkdGhpcy5zY3JvbGxMZWZ0KCkgKyBkZWx0YSApO1xuXG5cdFx0XHR9IClcblx0XHRcdC5vbiggJ21vdXNlZW50ZXInLCAnLmZvcndhcmQsIC5iYWNrd2FyZCcsIGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXG5cdFx0XHRcdFx0JGlubmVyID0gJHRoaXMuc2libGluZ3MoICcuaW5uZXInICksXG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0gKCR0aGlzLmhhc0NsYXNzKCAnZm9yd2FyZCcgKSA/IDEgOiAtMSk7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgbW92ZSBpbnRlcnZhbC5cblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5fZ2FsbGVyeV9tb3ZlSW50ZXJ2YWxJZCApO1xuXG5cdFx0XHRcdC8vIFN0YXJ0IGludGVydmFsLlxuXHRcdFx0XHR0aGlzLl9nYWxsZXJ5X21vdmVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCRpbm5lci5zY3JvbGxMZWZ0KCAkaW5uZXIuc2Nyb2xsTGVmdCgpICsgKDUgKiBkaXJlY3Rpb24pICk7XG5cdFx0XHRcdH0sIDEwICk7XG5cblx0XHRcdH0gKVxuXHRcdFx0Lm9uKCAnbW91c2VsZWF2ZScsICcuZm9yd2FyZCwgLmJhY2t3YXJkJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIENsZWFyIG1vdmUgaW50ZXJ2YWwuXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuX2dhbGxlcnlfbW92ZUludGVydmFsSWQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0Ly8gTGlnaHRib3guXG5cdFx0JCggJy5nYWxsZXJ5LmxpZ2h0Ym94JyApXG5cdFx0XHQub24oICdjbGljaycsICdhJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdHZhciAkYSA9ICQoIHRoaXMgKSxcblx0XHRcdFx0XHQkZ2FsbGVyeSA9ICRhLnBhcmVudHMoICcuZ2FsbGVyeScgKSxcblx0XHRcdFx0XHQkbW9kYWwgPSAkZ2FsbGVyeS5jaGlsZHJlbiggJy5tb2RhbCcgKSxcblx0XHRcdFx0XHQkbW9kYWxJbWcgPSAkbW9kYWwuZmluZCggJ2ltZycgKSxcblx0XHRcdFx0XHRocmVmID0gJGEuYXR0ciggJ2hyZWYnICk7XG5cblx0XHRcdFx0Ly8gTm90IGFuIGltYWdlPyBCYWlsLlxuXHRcdFx0XHRpZiAoICFocmVmLm1hdGNoKCAvXFwuKGpwZ3xnaWZ8cG5nfG1wNCkkLyApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByZXZlbnQgZGVmYXVsdC5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0Ly8gTG9ja2VkPyBCYWlsLlxuXHRcdFx0XHRpZiAoICRtb2RhbFsgMCBdLl9sb2NrZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9jay5cblx0XHRcdFx0JG1vZGFsWyAwIF0uX2xvY2tlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gU2V0IHNyYy5cblx0XHRcdFx0JG1vZGFsSW1nLmF0dHIoICdzcmMnLCBocmVmICk7XG5cblx0XHRcdFx0Ly8gU2V0IHZpc2libGUuXG5cdFx0XHRcdCRtb2RhbC5hZGRDbGFzcyggJ3Zpc2libGUnICk7XG5cblx0XHRcdFx0Ly8gRm9jdXMuXG5cdFx0XHRcdCRtb2RhbC5mb2N1cygpO1xuXG5cdFx0XHRcdC8vIERlbGF5LlxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdC8vIFVubG9jay5cblx0XHRcdFx0XHQkbW9kYWxbIDAgXS5fbG9ja2VkID0gZmFsc2U7XG5cblx0XHRcdFx0fSwgNjAwICk7XG5cblx0XHRcdH0gKVxuXHRcdFx0Lm9uKCAnY2xpY2snLCAnLm1vZGFsJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdHZhciAkbW9kYWwgPSAkKCB0aGlzICksXG5cdFx0XHRcdFx0JG1vZGFsSW1nID0gJG1vZGFsLmZpbmQoICdpbWcnICk7XG5cblx0XHRcdFx0Ly8gTG9ja2VkPyBCYWlsLlxuXHRcdFx0XHRpZiAoICRtb2RhbFsgMCBdLl9sb2NrZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWxyZWFkeSBoaWRkZW4/IEJhaWwuXG5cdFx0XHRcdGlmICggISRtb2RhbC5oYXNDbGFzcyggJ3Zpc2libGUnICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9jay5cblx0XHRcdFx0JG1vZGFsWyAwIF0uX2xvY2tlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgdmlzaWJsZSwgbG9hZGVkLlxuXHRcdFx0XHQkbW9kYWxcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdsb2FkZWQnICk7XG5cblx0XHRcdFx0Ly8gRGVsYXkuXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0JG1vZGFsXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoICd2aXNpYmxlJyApO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIENsZWFyIHNyYy5cblx0XHRcdFx0XHRcdCRtb2RhbEltZy5hdHRyKCAnc3JjJywgJycgKTtcblxuXHRcdFx0XHRcdFx0Ly8gVW5sb2NrLlxuXHRcdFx0XHRcdFx0JG1vZGFsWyAwIF0uX2xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHQvLyBGb2N1cy5cblx0XHRcdFx0XHRcdCRib2R5LmZvY3VzKCk7XG5cblx0XHRcdFx0XHR9LCA0NzUgKTtcblxuXHRcdFx0XHR9LCAxMjUgKTtcblxuXHRcdFx0fSApXG5cdFx0XHQub24oICdrZXlwcmVzcycsICcubW9kYWwnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0dmFyICRtb2RhbCA9ICQoIHRoaXMgKTtcblxuXHRcdFx0XHQvLyBFc2NhcGU/IEhpZGUgbW9kYWwuXG5cdFx0XHRcdGlmICggZXZlbnQua2V5Q29kZSA9PSAyNyApIHtcblx0XHRcdFx0XHQkbW9kYWwudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKVxuXHRcdFx0LnByZXBlbmQoICc8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJJbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cImlubmVyXCI+PGltZyBzcmM9XCJcIiAvPjwvZGl2PjwvZGl2PicgKVxuXHRcdFx0LmZpbmQoICdpbWcnIClcblx0XHRcdC5vbiggJ2xvYWQnLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0dmFyICRtb2RhbEltZyA9ICQoIHRoaXMgKSxcblx0XHRcdFx0XHQkbW9kYWwgPSAkbW9kYWxJbWcucGFyZW50cyggJy5tb2RhbCcgKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdC8vIE5vIGxvbmdlciB2aXNpYmxlPyBCYWlsLlxuXHRcdFx0XHRcdGlmICggISRtb2RhbC5oYXNDbGFzcyggJ3Zpc2libGUnICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU2V0IGxvYWRlZC5cblx0XHRcdFx0XHQkbW9kYWwuYWRkQ2xhc3MoICdsb2FkZWQnICk7XG5cblx0XHRcdFx0fSwgMjc1ICk7XG5cblx0XHRcdH0gKTtcblxuXHR9ICk7XG5cbn0pKCBqUXVlcnkgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
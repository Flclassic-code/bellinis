	$(document).ready(function() {


		/* header fixed top */
		var f = true;
		$(window).on('scroll', function() {

			var scrTop = $(window).scrollTop();
			var headerHeight = $('.header').height();

			if (scrTop > headerHeight && f) {
				f = false;

				$('.header').addClass('header_fixed');
				$('.section-1').css({
					paddingTop: headerHeight
				})
			} else if (scrTop <= headerHeight && !f) {
				f = true;
				$('.header').removeClass('header_fixed');
				$('.section-1').removeAttr('style');
			}

		});

	            // Tabs

	            $('.menu-tabs-list').on('click', 'li:not(.active-list)', function() {
	              $(this)
	              .addClass('active-list').siblings().removeClass('active-list')
	              .closest('.section-3').find('.tab-content-box').removeClass('tab-content-active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('tab-content-active').css('display', 'block').animate({opacity: '1'}, 600);
	            })


	            // parallax //
	            // $('.parallax-window').parallax({ imageSrc: 'img/bg-form.jpg' });
	            $('.parallax-window-2').parallax({ imageSrc: 'img/paralax-2.jpg' });
	            $('.parallax-window-3').parallax({ imageSrc: 'img/header.jpg' });




	            // masonry//
	            // $('.grid').masonry({
	            //   // options
	            //   itemSelector: '.grid-item',
	            //   columnWidth: 200
	            // })

	            /* mobile check */
	            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	                // $('html, body').css('min-width', '1320px').addClass('mobile');
	                // $('html').css('width', window.innerWidth + 'px');
	              }


	              $('.js-hamburger').on('click', function(e) {
	              	e.preventDefault();
	              	$(this).toggleClass('is-active');
	              	$('.nav-menu').toggleClass('menu_active');
	              });
	              // $('.nav-menu li a').click(function() {
	              	// $(this).closest('.nav-menu').removeClass('menu_active');
	              	// $('.hamburger').removeClass('is-active');
	              // });
	              $(".send").on('click', function(e) {
	              	e.preventDefault();

	              	var form = $(this).parents("form");

	              	form.find("input").each(function() {

	              		var inp = $(this);
	              		var req = $(this).data("req");
	              		if (inp.attr('type') === 'email') {
	              			var em = inp.val();

	              			if (!validateEmail(em)) {
	              				inp.addClass("error");
	              			} else {
	              				inp.removeClass("error");
	              			}
	              		} else if (req === 1 && !inp.val().length) {
	              			inp.addClass("error");
	              		} else {
	              			inp.removeClass("error");
	              		}

	              	});

	              	if (form.find(".error").length) {
	              		return false;
	              	} else {
	              		$.ajax({
	              			type: "POST",
	              			url: form.attr('action'),
	              			data: form.serialize(),
	              			success: function(response) {

	              				$(':input')
	              				.not(':button, :submit, :reset, :hidden')
	              				.val('')
	              				.removeAttr('checked')
	              				.removeAttr('selected');

	              				$.fancybox.close();
	              				var message = $('.modal');
	              				$.fancybox.open(message);

	              			}
	              		});
	              	}
	              });






	              $(document).ready(function() {



	              	$('.nav-menu a[href^="#"]').on('click', function(event) {
	              		var target = $($(this).attr('href'));
	              		if (target.length) {
	              			event.preventDefault();
	              			event.stopImmediatePropagation();
	              			$('html, body').animate({
	              				scrollTop: target.offset().top - 50
	              			}, 600, function() {
	              				if ( $('.nav-menu1').hasClass('menu_active') ) {
	              					 $('.nav-menu1').removeClass('menu_active');
	              					 $('.js-hamburger').removeClass('is-active');
	              				}
	              			});
	              		}

	              	});


	              });

	              $(window).scroll(function() {
	              	var scrollDistance = $(window).scrollTop();

	              	$('.page-section').each(function(i) {

	              		if ($(this).position().top - 66 <= scrollDistance) {
	              			$('#nav-menu-one li.active-li').removeClass('active-li');
	              			$('#nav-menu-two li.active-li').removeClass('active-li');
	              			
	              			$('#nav-menu-one li').eq(i).addClass('active-li');
	              			$('#nav-menu-two li').eq(i).addClass('active-li');
	              		}
	              	});
	              }).scroll();




	              $('.up-button').on('click', function(e) {
	              	e.preventDefault();
	              	$('html, body').animate({
	              		scrollTop: 0
	              	}, 700);

	              });
	              $(document).ready(function() {
	                    // $('a[href^="#"]').bind('click', function(e) {
	                    //     e.preventDefault();
	                    //     var target = $(this).attr("href");
	                    //     console.log(target);

	                    //     $('html, body').animate({
	                    //         scrollTop: $(target).offset().top - 66
	                    //     }, 600, function() {
	                    //         location.hash = target;
	                    //     });

	                    //     // return false;
	                    // });
	                  });



	              $('.up-button').on('click', function(e) {
	              	e.preventDefault();
	              	$('html, body').animate({
	              		scrollTop: 0
	              	}, 700);

	              });


	              if ($('.up-button').length) {
	              	window.onscroll = function() {
	              		var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
	              		if (topToDocument > 800) {
	              			$('.up-button').addClass('up-button_show');
	              		} else {
	              			$('.up-button').removeClass('up-button_show');
	              		}
	              	}
	              }


	                // $('.scroll-box').mCustomScrollbar({
	                //   theme:"rounded-dots",
	                //   scrollInertia:400
	                // });


	                // var scr = $(".main-wrapper").height() > $('body').height();

	                // var flsm1 = true; 
	                // var flsm2 = true; 

	                // $(window).on('load resize', function() {

	                //  /*CHECK WIDTH 1 ITERATION*/
	                //  if (window.innerWidth <= 991) {
	                //    flsm2 = true;
	                //    if (flsm1) {
	                //      flsm1 = false;

	                //    }
	                //  } else {
	                //    flsm1 = true;
	                //    if (flsm2) {
	                //      flsm2 = false; 

	                //    }
	                //  }

	                // });





	                /* SLICK_SLIDER */
	                if ($('.events-slider').length) {
	                	$('.events-slider').slick({
	                		slidesToShow: 1,
	                		slidesToScroll: 1,
	                		dots: false,
	                		centerMode: false,
	                		prevArrow: '.arrow-prev',
	                		nextArrow: '.arrow-next',
	                		centerPadding: '30px',
	                		touchMove: false,
	                		draggable: false,
	                		autoplay: true,
	                		autoplaySpeed: 2500,
	                		speed: 800,

	                		responsive: [{
	                			breakpoint: 992,
	                			settings: {
	                				dots: false,
	                				slidesToShow: 1,
	                				slidesToScroll: 1
	                			}
	                		},
	                		{
	                			breakpoint: 668,
	                			settings: {
	                				dots: false,
	                				slidesToShow: 1,
	                				slidesToScroll: 1
	                			}
	                		}
	                		]
	                	});
	                };


	                /* SLICK_SLIDER */
	                if ($('.slider-response').length) {
	                	$('.slider-response').slick({
	                		slidesToShow: 1,
	                		slidesToScroll: 1,
	                		dots: true,
	                		centerMode: false,
	                		prevArrow: false,
	                		nextArrow: false,
	                		centerPadding: '30px',
	                		touchMove: true,
	                		draggable: false,
	                		autoplay: true,
	                		autoplaySpeed: 2500,
	                		speed: 800,
	                		responsive: [{
	                			breakpoint: 992,
	                			settings: {
	                				dots: true,
	                				slidesToShow: 1,
	                				slidesToScroll: 1,
	                				touchMove: true,
	                			}
	                		},
	                		{
	                			breakpoint: 668,
	                			settings: {
	                				dots: true,
	                				slidesToShow: 1,
	                				slidesToScroll: 1,
	                				touchMove: true,
	                			}
	                		}
	                		]
	                	});
	                };



	                /*MATCHHEIGHT*/
	                // $('.your-class').matchHeight()


	                /*FANCYBOX*/

	                // var regDigits = new RegExp('^\\d+$');

	                // $('input[type=tel]').keypress(function (e) {

	                // 	var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

	                // 	if (!regDigits.test(key)) {
	                // 		e.preventDefault();
	                // 		return false;
	                // 	}
	                // });

	                // $('input[type=email]').keyup(function() {
	                // 	var thisVal = $(this);
	                // 	thisVal.val(thisVal.val().replace(/[^\x00-\x7F]+/i, ""))

	                // });


	                /*MASK JQUERY*/
	                $('input[type=tel]').mask("+38 (999) 999-99-99");


	                /*HIDE PLACEHOLDER*/
	                $('input,textarea').focus(function() {
	                	$(this).data('placeholder', $(this).attr('placeholder'))
	                	.attr('placeholder', '');
	                }).blur(function() {
	                	$(this).attr('placeholder', $(this).data('placeholder'));
	                });


	                /* SUBMIT BUTTON DISABLED */
	                // $('.checked').on('click', function(e) {
	                //  e.preventDefault(); 
	                //  var button = $(this).closest('form').find('button');
	                //  var buttonVal = $(this).closest('form').find('button').prop('disabled');
	                //  $(this).toggleClass('active');
	                //  if (!buttonVal) {
	                //    button.prop('disabled', true);
	                //  } else {
	                //    button.prop('disabled', false);
	                //  }
	                // });



	                /*  wordpress regexp tel: */
	                // if ($('a[href^="tel:"]').length > 1) {

	                //  $('a[href^="tel:"]').each(function() {

	                //    var phone = $(this).text();
	                //    phone = phone.replace(/\D+/g,"");

	                //    $(this).attr('href', 'tel:+'+phone);
	                //  });
	                // } else {
	                //  var phone = $('a[href^="tel:"]').text();
	                //  phone = phone.replace(/\D+/g,"");
	                //  $('a[href^="tel:"').attr('href', 'tel:+'+phone);
	                // }


	                /*YANDEX MAP*/
	                // if ($('#map-canvas').length) {
	                //  ymaps.ready(init);
	                //  function init(){
	                //    var myMap=new ymaps.Map("map-canvas",{
	                //      center:[55.854661, 37.585736],
	                //      zoom:13,
	                //      controls:['zoomControl']
	                //    }),
	                //    Placemark1=new ymaps.Placemark([55.854661, 37.585736],{
	                //      balloonContent:'',
	                //      hintContent:'',
	                //    },{
	                //      preset:'islands#redDotIcon'
	                //    })
	                //    myMap.geoObjects.add(Placemark1);
	                //    myMap.behaviors.disable('scrollZoom');
	                //  }
	                // };


	                /*deletecookie*/
	                // $(document).on('click', 'a', function() {
	                //  if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	                //    eraseCookie('txt-c');
	                //    eraseCookie('select-c');
	                //  }
	                // });


	                /*check-form*/
	                // $('#feedback-valid-1').validate({
	                //  rules:{
	                //    "phone":{required:true}
	                //  },
	                //  messages:{
	                //    "phone":{required:""}
	                //  },
	                //  submitHandler: function(form){
	                //    $(form).ajaxSubmit({
	                //      success: function(data) {
	                //        if (data == "true")
	                //        {
	                //          $(':input','#feedback-valid-1')
	                //          .not(':button, :submit, :reset, :hidden')
	                //          .val('')
	                //          .removeAttr('checked')
	                //          .removeAttr('selected');
	                //            // window.location.href = "thx1.html";
	                //            $.fancybox.close()
	                //            var message = $('.modal');
	                //            $.fancybox(message);

	                //          }
	                //        }  
	                //      }); 
	                //  }
	                // });


	                // function createCookie(name,value,days) {
	                //  var expires = "";
	                //  if (days) {
	                //    var date = new Date();
	                //    date.setTime(date.getTime() + (days*24*60*60*1000));
	                //    expires = "; expires=" + date.toUTCString();
	                //  }
	                //  document.cookie = name + "=" + value + expires + "; path=/";
	                // }

	                // function readCookie(name) {
	                //  var nameEQ = name + "=";
	                //  var ca = document.cookie.split(';');
	                //  for(var i=0;i < ca.length;i++) {
	                //    var c = ca[i];
	                //    while (c.charAt(0)==' ') c = c.substring(1,c.length);
	                //    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	                //  }
	                //  return undefined;
	                // }

	                // function eraseCookie(name) {
	                //  createCookie(name,"",-1);
	                // }





	                /*  ripple effect */
	                //  $(".button").on('click', function (e) {

	                //  // Remove any old one
	                //  $(".ripple").remove();

	                //  // Setup
	                //  var posX = $(this).offset().left,
	                //  posY = $(this).offset().top,
	                //  buttonWidth = $(this).width(),
	                //  buttonHeight =  $(this).height();

	                //  // Add the element
	                //  $(this).prepend("<span class='ripple'></span>");

	                //  // Make it round!
	                //  if(buttonWidth >= buttonHeight) {
	                //    buttonHeight = buttonWidth;
	                //  } else {
	                //    buttonWidth = buttonHeight; 
	                //  }

	                //  // Get the center of the element
	                //  var x = e.pageX - posX - buttonWidth / 2;
	                //  var y = e.pageY - posY - buttonHeight / 2;

	                //  // Add the ripples CSS and start the animation
	                //  $(".ripple").css({
	                //    width: buttonWidth,
	                //    height: buttonHeight,
	                //    top: y + 'px',
	                //    left: x + 'px'
	                //  }).addClass("rippleEffect");
	                // });

	                function validateEmail(email) {
	                	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	                	return re.test(email);
	                }


	              });


	            /*!
	             * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
	             * @copyright 2016 PixelCog, Inc.
	             * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
	             */

	             ;
	             (function($, window, document, undefined) {

	                // Polyfill for requestAnimationFrame
	                // via: https://gist.github.com/paulirish/1579671

	                (function() {
	                	var lastTime = 0;
	                	var vendors = ['ms', 'moz', 'webkit', 'o'];
	                	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	                		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	                		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	                	}

	                	if (!window.requestAnimationFrame)
	                		window.requestAnimationFrame = function(callback) {
	                			var currTime = new Date().getTime();
	                			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	                			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	                				timeToCall);
	                			lastTime = currTime + timeToCall;
	                			return id;
	                		};

	                		if (!window.cancelAnimationFrame)
	                			window.cancelAnimationFrame = function(id) {
	                				clearTimeout(id);
	                			};
	                		}());


	                // Parallax Constructor

	                function Parallax(element, options) {
	                	var self = this;

	                	if (typeof options == 'object') {
	                		delete options.refresh;
	                		delete options.render;
	                		$.extend(this, options);
	                	}

	                	this.$element = $(element);

	                	if (!this.imageSrc && this.$element.is('img')) {
	                		this.imageSrc = this.$element.attr('src');
	                	}

	                	var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

	                	if (positions.length < 1) {
	                		positions.push('center');
	                	}
	                	if (positions.length == 1) {
	                		positions.push(positions[0]);
	                	}

	                	if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
	                		positions = [positions[1], positions[0]];
	                	}

	                	if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
	                	if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

	                	self.positionX = positions[0];
	                	self.positionY = positions[1];

	                	if (this.positionX != 'left' && this.positionX != 'right') {
	                		if (isNaN(parseInt(this.positionX))) {
	                			this.positionX = 'center';
	                		} else {
	                			this.positionX = parseInt(this.positionX);
	                		}
	                	}

	                	if (this.positionY != 'top' && this.positionY != 'bottom') {
	                		if (isNaN(parseInt(this.positionY))) {
	                			this.positionY = 'center';
	                		} else {
	                			this.positionY = parseInt(this.positionY);
	                		}
	                	}

	                	this.position =
	                	this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' +
	                	this.positionY + (isNaN(this.positionY) ? '' : 'px');

	                	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	                		if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
	                			this.$element.css({
	                				backgroundImage: 'url(' + this.imageSrc + ')',
	                				backgroundSize: 'cover',
	                				backgroundPosition: this.position
	                			});
	                		}
	                		return this;
	                	}

	                	if (navigator.userAgent.match(/(Android)/)) {
	                		if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
	                			this.$element.css({
	                				backgroundImage: 'url(' + this.imageSrc + ')',
	                				backgroundSize: 'cover',
	                				backgroundPosition: this.position
	                			});
	                		}
	                		return this;
	                	}

	                	this.$mirror = $('<div />').prependTo(this.mirrorContainer);

	                	var slider = this.$element.find('>.parallax-slider');
	                	var sliderExisted = false;

	                	if (slider.length == 0)
	                		this.$slider = $('<img />').prependTo(this.$mirror);
	                	else {
	                		this.$slider = slider.prependTo(this.$mirror)
	                		sliderExisted = true;
	                	}

	                	this.$mirror.addClass('parallax-mirror').css({
	                		visibility: 'hidden',
	                		zIndex: this.zIndex,
	                		position: 'fixed',
	                		top: 0,
	                		left: 0,
	                		overflow: 'hidden'
	                	});

	                	this.$slider.addClass('parallax-slider').one('load', function() {
	                		if (!self.naturalHeight || !self.naturalWidth) {
	                			self.naturalHeight = this.naturalHeight || this.height || 1;
	                			self.naturalWidth = this.naturalWidth || this.width || 1;
	                		}
	                		self.aspectRatio = self.naturalWidth / self.naturalHeight;

	                		Parallax.isSetup || Parallax.setup();
	                		Parallax.sliders.push(self);
	                		Parallax.isFresh = false;
	                		Parallax.requestRender();
	                	});

	                	if (!sliderExisted)
	                		this.$slider[0].src = this.imageSrc;

	                	if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
	                		this.$slider.trigger('load');
	                	}

	                }


	                // Parallax Instance Methods

	                $.extend(Parallax.prototype, {
	                	speed: 0.2,
	                	bleed: 0,
	                	zIndex: -100,
	                	iosFix: true,
	                	androidFix: true,
	                	position: 'center',
	                	overScrollFix: false,
	                	mirrorContainer: 'body',

	                	refresh: function() {
	                		this.boxWidth = this.$element.outerWidth();
	                		this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
	                		this.boxOffsetTop = this.$element.offset().top - this.bleed;
	                		this.boxOffsetLeft = this.$element.offset().left;
	                		this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

	                		var winHeight = Parallax.winHeight;
	                		var docHeight = Parallax.docHeight;
	                		var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
	                		var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
	                		var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
	                		var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
	                		var margin;

	                		if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
	                			this.imageWidth = imageHeightMin * this.aspectRatio | 0;
	                			this.imageHeight = imageHeightMin;
	                			this.offsetBaseTop = imageOffsetMin;

	                			margin = this.imageWidth - this.boxWidth;

	                			if (this.positionX == 'left') {
	                				this.offsetLeft = 0;
	                			} else if (this.positionX == 'right') {
	                				this.offsetLeft = -margin;
	                			} else if (!isNaN(this.positionX)) {
	                				this.offsetLeft = Math.max(this.positionX, -margin);
	                			} else {
	                				this.offsetLeft = -margin / 2 | 0;
	                			}
	                		} else {
	                			this.imageWidth = this.boxWidth;
	                			this.imageHeight = this.boxWidth / this.aspectRatio | 0;
	                			this.offsetLeft = 0;

	                			margin = this.imageHeight - imageHeightMin;

	                			if (this.positionY == 'top') {
	                				this.offsetBaseTop = imageOffsetMin;
	                			} else if (this.positionY == 'bottom') {
	                				this.offsetBaseTop = imageOffsetMin - margin;
	                			} else if (!isNaN(this.positionY)) {
	                				this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, -margin);
	                			} else {
	                				this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
	                			}
	                		}
	                	},

	                	render: function() {
	                		var scrollTop = Parallax.scrollTop;
	                		var scrollLeft = Parallax.scrollLeft;
	                		var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
	                		var scrollBottom = scrollTop + Parallax.winHeight;

	                		if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
	                			this.visibility = 'visible';
	                			this.mirrorTop = this.boxOffsetTop - scrollTop;
	                			this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
	                			this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
	                		} else {
	                			this.visibility = 'hidden';
	                		}

	                		this.$mirror.css({
	                			transform: 'translate3d(' + this.mirrorLeft + 'px, ' + (this.mirrorTop - overScroll) + 'px, 0px)',
	                			visibility: this.visibility,
	                			height: this.boxHeight,
	                			width: this.boxWidth
	                		});

	                		this.$slider.css({
	                			transform: 'translate3d(' + this.offsetLeft + 'px, ' + this.offsetTop + 'px, 0px)',
	                			position: 'absolute',
	                			height: this.imageHeight,
	                			width: this.imageWidth,
	                			maxWidth: 'none'
	                		});
	                	}
	                });


	                // Parallax Static Methods

	                $.extend(Parallax, {
	                	scrollTop: 0,
	                	scrollLeft: 0,
	                	winHeight: 0,
	                	winWidth: 0,
	                	docHeight: 1 << 30,
	                	docWidth: 1 << 30,
	                	sliders: [],
	                	isReady: false,
	                	isFresh: false,
	                	isBusy: false,

	                	setup: function() {
	                		if (this.isReady) return;

	                		var self = this;

	                		var $doc = $(document),
	                		$win = $(window);

	                		var loadDimensions = function() {
	                			Parallax.winHeight = $win.height();
	                			Parallax.winWidth = $win.width();
	                			Parallax.docHeight = $doc.height();
	                			Parallax.docWidth = $doc.width();
	                		};

	                		var loadScrollPosition = function() {
	                			var winScrollTop = $win.scrollTop();
	                			var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
	                			var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
	                			Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
	                			Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
	                			Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
	                		};

	                		$win.on('resize.px.parallax load.px.parallax', function() {
	                			loadDimensions();
	                			self.refresh();
	                			Parallax.isFresh = false;
	                			Parallax.requestRender();
	                		})
	                		.on('scroll.px.parallax load.px.parallax', function() {
	                			loadScrollPosition();
	                			Parallax.requestRender();
	                		});

	                		loadDimensions();
	                		loadScrollPosition();

	                		this.isReady = true;

	                		var lastPosition = -1;

	                		function frameLoop() {
	                            if (lastPosition == window.pageYOffset) { // Avoid overcalculations
	                            	window.requestAnimationFrame(frameLoop);
	                            	return false;
	                            } else lastPosition = window.pageYOffset;

	                            self.render();
	                            window.requestAnimationFrame(frameLoop);
	                          }

	                          frameLoop();
	                        },

	                        configure: function(options) {
	                        	if (typeof options == 'object') {
	                        		delete options.refresh;
	                        		delete options.render;
	                        		$.extend(this.prototype, options);
	                        	}
	                        },

	                        refresh: function() {
	                        	$.each(this.sliders, function() { this.refresh(); });
	                        	this.isFresh = true;
	                        },

	                        render: function() {
	                        	this.isFresh || this.refresh();
	                        	$.each(this.sliders, function() { this.render(); });
	                        },

	                        requestRender: function() {
	                        	var self = this;
	                        	self.render();
	                        	self.isBusy = false;
	                        },
	                        destroy: function(el) {
	                        	var i,
	                        	parallaxElement = $(el).data('px.parallax');
	                        	parallaxElement.$mirror.remove();
	                        	for (i = 0; i < this.sliders.length; i += 1) {
	                        		if (this.sliders[i] == parallaxElement) {
	                        			this.sliders.splice(i, 1);
	                        		}
	                        	}
	                        	$(el).data('px.parallax', false);
	                        	if (this.sliders.length === 0) {
	                        		$(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
	                        		this.isReady = false;
	                        		Parallax.isSetup = false;
	                        	}
	                        }
	                      });


	                // Parallax Plugin Definition

	                function Plugin(option) {
	                	return this.each(function() {
	                		var $this = $(this);
	                		var options = typeof option == 'object' && option;

	                		if (this == window || this == document || $this.is('body')) {
	                			Parallax.configure(options);
	                		} else if (!$this.data('px.parallax')) {
	                			options = $.extend({}, $this.data(), options);
	                			$this.data('px.parallax', new Parallax(this, options));
	                		} else if (typeof option == 'object') {
	                			$.extend($this.data('px.parallax'), options);
	                		}
	                		if (typeof option == 'string') {
	                			if (option == 'destroy') {
	                				Parallax.destroy(this);
	                			} else {
	                				Parallax[option]();
	                			}
	                		}
	                	});
	                }

	                var old = $.fn.parallax;

	                $.fn.parallax = Plugin;
	                $.fn.parallax.Constructor = Parallax;


	                // Parallax No Conflict

	                $.fn.parallax.noConflict = function() {
	                	$.fn.parallax = old;
	                	return this;
	                };


	                // Parallax Data-API

	                $(function() {
	                	$('[data-parallax="scroll"]').parallax();
	                });

	              }(jQuery, window, document));
$(function(){

// Swiper
var mySwiper = new Swiper ('.swiper-container', {
    direction : 'horizontal',
    spaceBetween : 0,
    slidesPerView: 3,
	loop: true,
	stopOnLastSlide : false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    450: {
        slidesPerView: 1,
        spaceBetween: 0,
	},

	661: {
        slidesPerView: 2,
        spaceBetween: 0,
	},
	900: {
		slidesPerView: 2,
		spaceBetween: 0,
	},

	960:{
		slidesPerView: 3,
		spaceBetween: 0,
	},
    1024: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    }
});

// Parallax

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// TABS
let tab = document.querySelectorAll ('.review-btn__tab'),
	tabsWrap = document.querySelector ('.review-tabs__buttons'),
	tabContent = document.querySelectorAll ('.review__tab');

	function hideTabReview (a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabReview (1);

	function showTabReview (b) {
		if (tabContent[b].classList.contains ('hide')) {
			tabContent[b].classList.remove ('hide');
			tabContent[b].classList.add ('show');
		}
	}

	tabsWrap.addEventListener ('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains ('review-btn__tab')) {
			for ( let i = 0; i < tab.length; i++) {
				if (target == tab [i]) {
					hideTabReview (0);
					showTabReview (i);
					break;
				}
			}
		}
	});

// Smoothly scroll
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



// HAMBURGER

$('.menuToggle').on('click', function() {
	$('.menu').slideToggle(300, function(){
		if( $(this).css('display') === "none"){
			$(this).removeAttr('style');
		}
	});
});

// FIXED MENU

$(window).on('scroll resize', function() {
	var pixelTop = $(window).scrollTop();
	if (pixelTop > 0 && $(document).width() > 998) {
		$('.menu-fixed').addClass('active');
	} else if (pixelTop < 1) {
		$('.menu-fixed').removeClass('active');
	}
});
});
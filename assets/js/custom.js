(function($){

	"use strict"; 

/* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

$('a[href*=#]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});

$("#scroll-up").click(function (e) {
	e.preventDefault();
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

/* ---------------------------------------------- /*
* Navbar
/* ---------------------------------------------- */

$('.header').sticky({
	topSpacing: 0
});

$('body').scrollspy({
	target: '.navbar-custom',
	offset: 70
})

/* ---------------------------------------------- /*
* Background image.
/* ---------------------------------------------- */

$(".js-height-full").height($(window).height());

$(window).resize(function(){
	$(".js-height-full").height($(window).height());
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	$('#home').css({'background-attachment': 'scroll'});
} else {
	$('#home').parallax('50%', 0.1);
}
/* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

var $portfolioContainer = $('.list-items-container');

$('#filter li').on('click', function (e) {
	e.preventDefault();

	$('#filter li').removeClass('active');
	$(this).addClass('active');

	var group = $(this).attr('data-group');
	var groupName = $(this).attr('data-group');

	$portfolioContainer.shuffle('shuffle', groupName );
});

$( document ).ready(function() {
    $('.simple-ajax-popup').magnificPopup({
	type: 'image',
	gallery:{enabled:true}
    });
});

/* ---------------------------------------------- /*
* WOW Animation When You Scroll
/* ---------------------------------------------- */
$( document ).ready(function() {
    new WOW().init();
});   
/* ---------------------------------------------- /*
* animated typing utility 
/* ---------------------------------------------- */
        
new TypeIt('#jesuis', {
  strings: ["Je Bilel BEn Youssef", "Designer & DÉVELOPPEUR WEB"],
  speed: 50,
  loop:true,
  loopDelay:10000,
  waitUntilVisible: true
}).go();
    
 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
    
  function sendEmail(){

	var params= {
		from_name : document.getElementById("fullname").value,
		email_id : document.getElementById("email_id").value,
		sujet: document.getElementById("sujet").value,
		message : document.getElementById("message")
	}
	emailjs.send('service_nqmlwsm','template_ext6s8u',params).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    },function(error) {
       console.log('FAILED...', error);
    })
  }

        // listen to the form submission
      




    /* ---------------------------------------------- /*
		 * Modal magnific popup
		/* ---------------------------------------------- */
    $(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
    
})(jQuery);



// function isValidEmailAddress(emailAddress) {
// 	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
// 	return pattern.test(emailAddress);
// };

/* ---------------------------------------------- /*
 * Contact form ajax
/* ---------------------------------------------- */

// $('#contact-form').submit(function(e) {

// 	e.preventDefault();

// 	var c_name = $('#c_name').val();
// 	var c_email = $('#c_email').val();
// 	var c_message = $('#c_message ').val();
// 	var response = $('#contact-form .ajax-response');
	
// 	var formData = {
// 		'name'       : c_name,
// 		'email'      : c_email,
// 		'message'    : c_message
// 	};

// 	if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
// 		response.fadeIn(500);
// 		response.html('<i class="fa fa-warning"></i> Corriger les erreurs et réessayer.');
// 	}

// 	else {
// 			 $.ajax({
// 					type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
// 					url         : 'assets/PHP/contact.php', // the url where we want to POST
// 					data        : formData, // our data object
// 					dataType    : 'json', // what type of data do we expect back from the server
// 					encode      : true,
// 					success		: function(res){
// 									var ret = $.parseJSON(JSON.stringify(res));
// 									response.html(ret.message).fadeIn(500);
// 					}
// 				});
// 		}           
// 		return false;
// 	});
$(function() {

// tabs
$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current1');
		$('.tab-content').removeClass('current1');

		$(this).addClass('current1');
		$("#"+tab_id).addClass('current1');
	})
//end tabs

	$.fn.numberPicker = function() {
		var dis = 'disabled';
		return this.each(function() {
			var picker = $(this),
			p = picker.find('button:last-child'),
			m = picker.find('button:first-child'),
			input = picker.find('input'),                 
			min = parseInt(input.attr('min'), 10),
			max = parseInt(input.attr('max'), 10),
			inputFunc = function(picker) {
				var i = parseInt(input.val(), 10);
				if ( (i <= min) || (!i) ) {
					input.val(min);
					p.prop(dis, false);
					m.prop(dis, true);
				} else if (i >= max) {
					input.val(max);
					p.prop(dis, true); 
					m.prop(dis, false);
				} else {
					p.prop(dis, false);
					m.prop(dis, false);
				}
			},
			changeFunc = function(picker, qty) {
				var q = parseInt(qty, 10),
				i = parseInt(input.val(), 10);
				if ((i < max && (q > 0)) || (i > min && !(q > 0))) {
					input.val(i + q);
					inputFunc(picker);
				}
			};
			m.on('click', function(){changeFunc(picker,-1);});
			p.on('click', function(){changeFunc(picker,1);});
			input.on('change', function(){inputFunc(picker);});
      inputFunc(picker); //init
    });
	};
	$(document).on('ready', function(){

		$('.plusminus').numberPicker();

	});
//dropdown ul
$('.select').on('click','.placeholder',function(){
  var parent = $(this).closest('.select');
  if ( ! parent.hasClass('is-open')){
    parent.addClass('is-open');
    $('.select.is-open').not(parent).removeClass('is-open');
  }else{
    parent.removeClass('is-open');
  }
}).on('click','ul>li',function(){
  var parent = $(this).closest('.select');
  parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
});

// dropdown menu
$(".Dropdown").on("click", function(){
  $(this).toggleClass('is-expanded');
});
//-end dropdown menu
// responsive menu
$.fn.menumaker = function(options) {  
	var cssmenu = $(this), settings = $.extend({
		format: "dropdown",
		sticky: false
	}, options);
	return this.each(function() {
		$(this).find(".button").on('click', function(){
			$(this).toggleClass('menu-opened');
			var mainmenu = $(this).next('ul');
			if (mainmenu.hasClass('open')) { 
				mainmenu.slideToggle().removeClass('open');
			}
			else {
				mainmenu.slideToggle().addClass('open');
				if (settings.format === "dropdown") {
					mainmenu.find('ul').show();
				}
			}
		});
		cssmenu.find('li ul').parent().addClass('has-sub');
		multiTg = function() {
			cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
			cssmenu.find('.submenu-button').on('click', function() {
				$(this).toggleClass('submenu-opened');
				if ($(this).siblings('ul').hasClass('open')) {
					$(this).siblings('ul').removeClass('open').slideToggle();
				}
				else {
					$(this).siblings('ul').addClass('open').slideToggle();
				}
			});
		};
		if (settings.format === 'multitoggle') multiTg();
		else cssmenu.addClass('dropdown');
		if (settings.sticky === true) cssmenu.css('position', 'fixed');
		resizeFix = function() {
			var mediasize = 768;
			if ($( window ).width() > mediasize) {
				cssmenu.find('ul').show();
			}
			if ($(window).width() <= mediasize) {
				cssmenu.find('ul').hide().removeClass('open');
			}
		};
		resizeFix();
		return $(window).on('resize', resizeFix);
	});
};

$(document).ready(function(){
	$("#cssmenu").menumaker({
		format: "multitoggle"
	});
});

//-end responsive menu
// input file
document.getElementById("FileAttachment").onchange = function () {
	document.getElementById("fileuploadurl").value = this.value;
};
//-input file
// scrollbar menu
$("#header .main-menu").mCustomScrollbar();
$("button").click(function(){
	$("#div1").fadeToggle();
				// Вариации:
				// $("#div2").fadeToggle("slow");
				// $("#div3").fadeToggle(3000);
			});
//-end scrollbar menu

// carousel
var owl = $("#carousel1");
owl.owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      pagination : false,
      paginationNumbers: false,
      itemsDesktop : [1279,3],
      itemsDesktopSmall : [991,2],
      itemsMobile: [600,1]
    });
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})
$("#carousel3").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination : false,
	 	paginationNumbers: false,
	 	dragBeforeAnimFinish : false,
	 	navigationText: ["",""],
    mouseDrag : false,
    touchDrag : false,
    singleItem:true

});
$("#carousel4").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination : false,
	 	paginationNumbers: false,
	 	dragBeforeAnimFinish : false,
	 	navigationText: ["",""],
    mouseDrag : false,
    touchDrag : false,
    singleItem:true

});
//-end carousel

// tile 
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
//-end tile

// superfish menu
$(document).ready(function(){
				// initialise plugin
				var example = $('#example').superfish({
					delay:       100000
				});
			});
$( ".current" ).on({
	mouseenter: function() {
		$( '#header' ).addClass( "inside" );
		$( '#header' ).removeClass( "inside1" );
	}, 
	mouseleave: function() {
		$( '#header' ).removeClass( "inside" );
		$( '#header' ).addClass( "inside1" );
	}
});
//-end superfish menu

});

// form validation
function showError(conteinerParentNode, errorMessage) {
	conteinerParentNode.className = 'error';
	var spanElem = document.createElement('span');
	spanElem.className = "error-message";
	spanElem.innerHTML = errorMessage;
	conteinerParentNode.appendChild(spanElem);
}

function resetError(conteinerParentNode) {
	conteinerParentNode.className = '';
	if (conteinerParentNode.lastChild.className == "error-message") {
		conteinerParentNode.removeChild(conteinerParentNode.lastChild);
	}
}

function validate(form) {
	var elems = form.elements;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

	resetError(elems.firstname.parentNode);
	if (!elems.firstname.value) {
		showError(elems.firstname.parentNode, 'Ошибка! Введите имя.');
		return false;
	}
	else if (elems.firstname.value.length < 3 ) {
		showError(elems.firstname.parentNode, 'Ошибка! Минимум 3 символа.');
		return false;
	}

	resetError(elems.telephone.parentNode);
	if (!elems.telephone.value) {
		showError(elems.telephone.parentNode, 'Ошибка! Введите телефон.');
		return false;
	}
	else if (elems.telephone.value.length < 9 ) {
		showError(elems.telephone.parentNode, 'Ошибка! Минимум 9 символов.');
		return false;
	}

	resetError(elems.email.parentNode);
	if(!elems.email.value) {
		showError(elems.email.parentNode, 'Ошибка! Введите Email.');
		return false;
	}
	else if (!regEmail.test(elems.email.value) == true){
		showError(elems.email.parentNode, 'Ошибка! Введите правельный Email.');
		return false;
	}
	resetError(elems.message.parentNode);
	if (!elems.message.value) {
		showError(elems.message.parentNode, 'Ошибка! Заполните поле ниже.');
		return false;
	}
	else if (elems.message.value.length < 3 ) {
		showError(elems.message.parentNode, 'Ошибка! Минимум 3 символа.');
		return false;
	}
	alert('success');
}
//-form validation

// owl carousel
$(document).ready(function() {
 
  var owl = $("#carousel2");
 
  owl.owlCarousel({
      slideSpeed : 300,
      pagination : false,
 		 	paginationNumbers: false,
      singleItem: true
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
})

//-end owl carousel
//vertical accordion
$ (function () {
	
	$('.team__item-triangle').on('click', function (e) {
		e.preventDefault();

		var
			$this = $(this),
			item = $this.closest('.team__item')
			container = $this.closest('.team__slider'),
			items = container.find('.team__item'),
			content = item.find('.team__item-img'),
			otherContent = container.find('.team__item-img');

			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
				otherContent.slideUp();
				content.slideDown();
			} else {
				item.removeClass('active');
				content.slideUp();
			}
    });

});
//slider
$ (function(){

	var burgerCarousel=$('.burger-slider').owlCarousel({
	items: 1,
	loop : true
	});
	$('.burger-slider_next').on('click',function(e){
		e.preventDefault();
		burgerCarousel.trigger('next.owl.carousel');
	});
	$('.burger-slider_prev').on('click',function(e){
		e.preventDefault();
		burgerCarousel.trigger('prev.owl.carousel');
	});
});

//mask
$(document).ready(function(){
  $('#phone').inputmask({"mask": "+7 (999) 999-99-99"}); //specifying options
  
});

//horizontal accordion
$ (function(){
   $('.menu-acco__trigger').on('click', function(e){
		e.preventDefault();
 				var $this = $(this),
				 content = $this.closest('.menu-acco'),
 				 item = $this.closest('.menu-acco__item'),
				 items = content.find('.menu-acco__item'),
				 activeItem = items.filter('.active'),
				 content = item.find('.menu-acco__content'),
				 activeContent = activeItem.find('.menu-acco__content');
			if (!item.hasClass('active')){

					 items.removeClass('active');
					 item.addClass('active');

					 activeContent.animate({
					 		'width': '0px'
					 });
					 content.animate({
					 	'width': '550px'
					 })
			} else {
				     item.removeClass('active');
				     content.animate({
					 'width': '0px'
				     });
			}

   });

   $(document).on('click',function(e){
 		
 		var $this=$(e.target);
 		 if(!$this.closest('.menu-acco').length){

 			$('.menu-acco__content').animate({
 				'width': '0px'
 			});
 			$('.menu-acco__item').removeClass('active');
 		 }

   });
  
});


//onepagescroll
$ (function() {


	var sections = $('.section'),
		display = $('.maincontent');
		inScroll = false;
	var scrollToSection= function(sectionEq) {
		var position=0;

		if(!inScroll){
			inScroll = true;
	
			position = (sections.eq(sectionEq).index() * -100)+'%';
			sections.eq(sectionEq).addClass('active')
			.siblings().removeClass('active');

			display.css({
				'transform': 'translate3d(0, ' + position + ', 0)'

			});
			setTimeout( function(){
				inScroll = false;
				$('.fixed-menu__item').eq(sectionEq).addClass('active')
				.siblings().removeClass('active');
			}, 1300)

		}

	}

	
	$ ('.wrapper').on('wheel', function(e){

		var deltaY = e.originalEvent.deltaY;
			activeSection = sections.filter('.active'),
			nextSection = activeSection.next(),
			prevSection = activeSection.prev()


			if (deltaY > 0){
				if (nextSection.length) {
					scrollToSection(nextSection.index());
				}
				
			}

			if (deltaY < 0){
				if (prevSection.length) {
					scrollToSection(prevSection.index());
				}
		
			}

		});
	$('.down-arrow').on('click', function(e){// переход с первой на 2 секцию
		e.preventDefault();
		scrollToSection('1');
	})
	$('.fixed-menu__link, .nav__link, .button__position, .but-place').on('click', function(e){
		e.preventDefault();
		var href = parseInt($(this).attr('href'));//переход по кнопке "заказать"
		scrollToSection(href);
	});
		$(document).on('keydown', function(e){

		var activeSection=sections.filter('.active'),
			nextSection=activeSection.next(),
			prevSection=activeSection.prev();

			switch (e.keyCode) {
				case 40 :
				if (nextSection.length){
					scrollToSection (nextSection.index());
				}
				break;

				case 38 :

				if (prevSection.length) {
					scrollToSection(prevSection.index());
				}
				break;
			}
	});

});
	


//modal window
$(function() {
	$(".comment__but").fancybox({
		type :'inline',
		maxWidth : 400,
		fitToView : false,
		padding : 0
	});
	$('.full-review__close').on('click', function (e){
		e.preventDefault();
		$.fancybox.close();
	});
});
 



 //map
 $ (function () {
        ymaps.ready(init);
        function init(){
           var myMap = new ymaps.Map('map', {
                center: [59.93, 30.28],
                controls: [],
                zoom: 12

            }); 
          // myMap.controls.add('zoomControl');
       myMap.behaviors.disable('scrollZoom');
        var myPlacemark = new ymaps.Placemark([59.92, 30.30], {}, 
        {
         iconLayout: 'default#image',
         iconImageHref: '../img/icons/map-marker.svg',
         iconImageSize: [40, 42],
         iconImageOffset: [-3, -42]
       });
       myMap.geoObjects.add(myPlacemark);  
           var myPlacemark = new ymaps.Placemark([59.94, 30.35], {}, 
        {
         iconLayout: 'default#image',
         iconImageHref: '../img/icons/map-marker.svg',
         iconImageSize: [40, 42],
         iconImageOffset: [-3, -42]
       });
       myMap.geoObjects.add(myPlacemark);
           var myPlacemark = new ymaps.Placemark([59.93, 30.37], {}, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [40, 42],
        iconImageOffset: [-3, -42]
       });
       myMap.geoObjects.add(myPlacemark);

        }

});


 //post
$(document).ready(function() { 
	$("#ajaxform").submit(function(){ 
		var form = $(this); 
		var error = false; 
		form.find('input, textarea').each( function(){ 
			if ($(this).val() == '') { 
				alert('Зaпoлнитe пoле "' +$(this).attr('placeholder')+'"!');
				error = true; 
              
			}
		});
		if (!error) { 
			var data = form.serialize(); 
			 $.ajax({ 
			   type: 'POST', 
			   url: '../js/action.php',
			  
			   data: data, 
		       beforeSend: function(data) {
		            form.find('input[type="submit"]').attr('disabled', 'disabled'); 
		          },
		       success: function(data){ 
		       		if (data['error']) { 
		       			 $.fancybox.open([ 
                        {href : "#error"} ],
                                      {   type: 'inline',   
                                       maxWidth : 250,
                                       fitToView : false,
                                       padding : 0
                                      
                                      }); 
		       		} else {
                      $.fancybox.open([ 
                        {href : "#success"} ],
                                      {type: 'inline',   
                                       maxWidth : 250,
                                       fitToView : false,
                                       padding : 0,
                                       afterClose : function(){
                                       form.trigger("reset");}
                                      });
              			$('.status-popup__close').on('click', function (e){
							e.preventDefault();
						$.fancybox.close();
						});
		       		}
                 
		         },
		      
		       	complete: function(data) { 
		            form.find('input[type="submit"]').prop('disabled', false); // 
		         }
		                  
			     });
		}
		return false; 
	});
});
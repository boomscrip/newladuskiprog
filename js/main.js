$(function(){
	$('.button_s').on('click', function(){
		$('.carate_more-info').slideToggle();
		$('.card_carate').css('display', 'none');
	});
});


$(function(){
	$('.button_multic').on('click', function(){
		$('.multic_more-info').slideToggle();
		$('.card_multic').css('display', 'none');
	});
});


	jQuery(function ($) {

	    $(window).scroll(function(){
	        $(".div").each(function () {
	          var window_top = $(window).scrollTop();
	          var div_top = $(this).offset().top;
	          var div_1 = $(this).attr('id');
	            if (window_top > div_top - 120){
	                $('#left-menu').find('li').removeClass('active');
	                $('#left-menu').find('li[class="'+div_1+'"]').addClass('active');
	            }
	            else{
	                $('#left-menu').find('li[class="'+div_1+'"]').removeClass('active');
	                };
	        });
	    });
	});

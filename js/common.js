
$(function() {

	var individual_price_table = $('.order').find('.first');
		var company_price_table = $('.order').find('.second');
	$('.bottom-wrapp').find('.first').on('click', function(){
			$(this).addClass('active');
			$(this).closest('.bottom-wrapp').removeClass('active');
			$(this).siblings().removeClass('active');
			individual_price_table.addClass('active');
			company_price_table.removeClass('active');
		});

		$('.bottom-wrapp').find('.second').on('click', function(){
			$(this).addClass('active');
			$(this).closest('.bottom-wrapp').addClass('active');
			$(this).siblings().removeClass('active');
			company_price_table.addClass('active');
			individual_price_table.removeClass('active');			
		});

});
$(document).ready(function() {
    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    }) 
    
    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    })
    
    $('.testimonials_slider').slick({
        autoHeight: true
    });
    
    $(".faq_item_header").click(function(event) {
        $(this).toggleClass("active").find('.faq_item_text').toggleClass("active");
    })
    

	$('.faq_item_header').click(function(){
		$(this).parents('.faq_item').toggleClass("active").find('.faq_item_text').slideToggle();
	})


    
    
})
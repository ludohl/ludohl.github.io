$(document).ready(function() {

	$('.btn-success').on('click', function(e) {
		e.preventDefault();
		alert('Hehe this form is not working...yet');
	});

	$('#arrow-down').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.content').offset().top
			}, 2000)
	});

	$('.navbar-right li').on('click',function(e){
		$('li').removeClass('active');
		$(this).addClass('active');
	})

});

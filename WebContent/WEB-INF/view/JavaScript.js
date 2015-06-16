$(document).ready(function(){
	$('#titulo').click(function(){
		$(this).parent().find('#descricao').slideToggle("slow");
	});
	$('#titulo2').click(function(){
		$(this).parent().find('#descricao2').slideToggle("slow");
	});
});

$(document).ready(function(){
	
	$('#fotos > img').hide();
	$('#fotos > img:first').show();
	
	$('#fotos').click(function(){
		nextSlide();
	});
});

function nextSlide(){
	$('#fotos > img:first').fadeOut(300, function(){
		$(this).appendTo('#fotos');
		$('#fotos> img:first').fadeIn(300);
	});
}


$(function() {

	$(".menucontenedor ul li").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	
	$(".menucontenedor ul li").click(function() {
		$(".menucontenedor ul li").removeClass("selected");		
		$(this).addClass("selected");
	});

});
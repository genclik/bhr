$(document).ready(function() {
	$(".addBook").each(function(){
		$(this).wrap('<div class="bookSheet"><div class="bookSheet"></div></div>');
		$(this).parents(".bookSheet").width($(this).outerWidth() -2);
	});
	
	$(".addChild").prepend('<span class="button"><span /></span>');
	$(".share").wrapInner('<span class="button"><span /></span>');
});

$(window).resize(function() {
	$(".addBook").each(function(){
		$(this).wrap('<div class="bookSheet"><div class="bookSheet"></div></div>');
		$(this).parents(".bookSheet").width($(this).outerWidth() -2);
	});
});
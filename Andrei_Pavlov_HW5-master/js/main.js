$(document).ready(function(){
	$("#content").on("click","#linktodown", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".gal-item").hover(function (event) {
		event.preventDefault();
		var img = $(this).children("img");
		img.css("opacity", "0.1");
		var btns = $(this).children("a");
		btns.css("display", "flex");
	}, function(){
		var img = $(this).children("img");
		img.css("opacity", "1");
		var btns = $(this).children("a");
		btns.css("display", "none");
	});

	$(".btn-zoom").on("click", function (event) {
		event.preventDefault();
		var parent = $(this).parent();

		var img = parent.children('img');
		var src = img.attr('src');
		// alert(src);

		var modal = parent.parent().children('#myModal');
		modal.css("display", "block");
		modal.css("background", "url(" + src + ")");
	});

	$("#closeModal").on("click", function (event) {
		modal = $(this).parent();
		modal.css("display", "none");
	});
});
 // $( function(){
 // 	if($(window).width() < '540'){
 // 		$("h2").css("font-size": "40px");
 // 	}
 // })
$( function(){

new WOW().init();

function fixedArrow(){     //Всю проверку и смену стилей лучше вынести в отдельную функцию и вызывать ее как при загрузке страницы, так и при скролле страницы.
	var scrollValue = $("html, body").scrollTop();
	if( scrollValue > 100){
		$(".fixed_arrow").css("display", "block");
	} else {
		$(".fixed_arrow").css("display", "none");
	}
}
fixedArrow();      //проверка при загрузке страницыпри скролле страницы

$(window).scroll(function() {   //при скролле страницы
  fixedArrow();
});


$("a").click(function(){
		var elem = $(this).attr("href");
		var dist = $(elem).offset().top;

		$("html, body").animate({"scrollTop": dist}, 1000);
		return false;
});



var numClick = 0;
$("nav button").click (function(){
	numClick += 1;
	amountClick ();
})

function amountClick (){
	if (numClick % 2 == 0){
		$(".main_title").css("display", "inline-block");
		$(".main_text").css("display", "block");
	} else {
		$(".main_title, .main_text").css("display", "none");
	}
}


// // $("nav button").click (function(){
// 		$("body, html").not("button").click(function(){
// 			$("nav button").addClass("collapsed");
// 			$("nav button").attr("aria-expanded", false);
// 			$(".navbar-collapse").removeClass("show");
// 		});
// // })


$('[data-fancybox="gallery"]').fancybox({
	loop: true
});


$(".play_video_style, .iphone").hover(function(){
  $(".iphone").css("box-shadow", "0 0 5px 8px #DD9B6C");
  $(".iphone").css("transition", "all 0.5s ease");
}, function () {  //вторая функция активируется при отведении мышки от указанных выше элементов
  $(".iphone").css("box-shadow", "none");
  $(".iphone").css("transition", "all 0.5s ease");
});


//E-mail Ajax Send
	$(".app_field").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../send.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".send_button").click (function(){
		location.href = 'https://thumbs.dreamstime.com/b/thank-you-card-cute-white-cat-yellow-dotted-background-hand-drawn-vector-illustration-180073641.jpg';
	});
	
})

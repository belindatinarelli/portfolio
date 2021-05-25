// $(window).scroll(function () {
// 	$('hero').toggleClass('scrolled', $(this).scrollTop() > 50);
// });

// $(function() {
//     //caches a jQuery object containing the header element
// 	var header = $(".hero");
	
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 500) {
//             header.removeClass('hero').addClass("scrolled");
//         } else {
//             header.removeClass("scrolled").addClass('hero');
//         }
//     });
// });

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	$('.hero img:nth-child(1)').css ({
		width: (100 + scroll/50) + '%'
	})
})

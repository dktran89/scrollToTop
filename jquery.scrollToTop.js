// Viết plugin mà không cần HTML
// Nên không dùng $.fn.ten-jquery, mà dùng $.ten-jquery
(function($){
	$.scrollToTop = function(options){
		var defaults = {
			timeScroll: 1000,
			timeShow: 500,
			timeHide: 700,
			classScroll: 'toTop'
		}; // gán properties cho defaults

		var t = $('<div class="'+defaults.classScroll+'"></div>'); // tạo class HTML
		var b = $('body');
		b.append(t); // gán class HTMl mới tạo vào body

		var options = $.extend(defaults, options); // tạo biến options ghi đè lên defaults

		var o = options;

		t.css({
			position: 'fixed',
			right: 0,
			bottom: 0,
			display: 'none'
		}).click(function(){
			b.animate({scrollTop : 0}, o.timeScroll);
		});

		$(document).scroll(function(){
			if( b.scrollTop() < 10){
				t.fadeOut(o.timeHide);
			} else {
			t.fadeIn(o.timeShow);
		}
		});
	}
})(jQuery);
$(document).ready(function(){
	$.scrollToTop({ // vì không có HTML, nên không dùng $('ten').scrollToTop
		timeScroll: 900,
		timeShow: 700,
		timeHide: 800
	});
});
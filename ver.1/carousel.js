$(document).ready(function(){

	$(".b-carousel-button-right").click(function(){ 
		$(".h-carousel-items").animate({left: "-250px"}, 200); 
		setTimeout(function () { 
			$(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"); 
			$(".h-carousel-items .b-carousel-block").eq(0).remove();
			$(".h-carousel-items").css({"left":"0px"}); 
		}, 300);
	});
	
	$(".b-carousel-button-left").click(function(){ 
		$(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items");
		$(".h-carousel-items").css({"left":"-250px"});
		$(".h-carousel-items").animate({left: "0px"}, 200);
		$(".h-carousel-items .b-carousel-block").eq(-1).remove();
	});
    
    $(document).ready(function(s) {
        var n;
        s(".tabs").on("click", "li:not(.active)", function() {
            n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
        }), s.fn.dmtabs = function(n) {
            s(this).addClass("active").siblings().removeClass("active"), n.find(".boxx").eq(s(this).index()).show(1, function() {
                s(this).addClass("open_tab")
            }).siblings(".boxx").hide(1, function() {
                s(this).removeClass("open_tab")
            })
        }
    })(jQuery);

});
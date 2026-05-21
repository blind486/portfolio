$(document).ready(function () {
	
    $("body").queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#fff1b0",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
	
	$('.fancybox a').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			closeBtn : false,
			autoSize : false,
			height:800,
			padding: 8
	});
	
	
});

window.addEventListener('DOMContentLoaded', function() {
    	$("body").queryLoader2();
});
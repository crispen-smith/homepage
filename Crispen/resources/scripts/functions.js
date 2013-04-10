// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

/*Call Picture fill inline so that results can be acted on. */



var scenes = $(".scene");

scenes.swipe ( {
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus,
			allowPageScroll:"vertical"
});

function swipeStatus(event, phase, direction, distance, fingers)
{ 
  
}

	function scrollImages(distance, duration)
		{
			var support = $.support
			scenes.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

			scenes.css("-webkit-transform", "translate3d("+value +"px,0px,0px)");
		}
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);
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

var width = $(window).width();

var sceneImgs = $(".bg");
var scenes = $(".scene");
scenes.css("position", "fixed");
scenes.css("left", function(index) {
	return String(((index * 200) - 50) + "%");
});
var lastScene = -(scenes.length-1);
var currentScene = firstScene = 0;
sceneImgs.swipe ( {
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus,
			allowPageScroll:"vertical"
});
var navAs = $("nav a");
navAs.removeAttr("href");
navAs.on("click", function(event) {
	currentIndex = -(jQuery.inArray(this, navAs));
	changeScene(currentIndex);
});

function swipeStatus(event, phase, direction, distance, fingers)
{ 
	if(phase == "end" && (direction == "left" || direction == "right") && distance > 120)
	{
		if(direction == "left") {
			if(currentScene == lastScene) return;
			currentScene--;
			changeScene(currentScene);
		}
		if(direction == "right") {
			if(currentScene == firstScene) return;
			currentScene++;
			changeScene(currentScene);
		}
	}
}

function changeScene(currentScene) {
	$(".selected").removeClass("selected");
	$(scenes).each(function(index, value) {
		newLeft =  String((((index+currentScene) * 200) - 50) + "%");
		$(this).animate({ "left": newLeft  }, 1000);
	});
	
	$($("nav a")[-(currentScene)]).addClass("selected");
}


});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);
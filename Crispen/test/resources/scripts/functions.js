(function($){


/* trigger when page is ready */
$(document).ready(function (){

/*Call Picture fill in the main body, prior to calling functions.js so that results can be acted on. */

var width = $(window).width();

var sceneImgs = $(".bg");
var scenes = $(".scene");
scenes.css("position", "fixed");
scenes.css("left", function(index) {
	//200 is a magic number derived from the fact that each image is 
	//200% of screen width and offset 50%
	return String(((index * 200) - 50) + "%");
});
var lastScene = -(scenes.length-1);
var currentScene = firstScene = 0;
sceneImgs.swipe ( {
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus,
			allowPageScroll:""
});
var navAs = $("nav a");
navAs.removeAttr("href");
navAs.on("click", function(event) {
	currentIndex = -(jQuery.inArray(this, navAs));
	changeScene(currentIndex);
});

function swipeStatus(event, phase, direction, distance, fingers)
{ 
	if(phase == "end" && (direction == "left" || direction == "right") && distance > 20)
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
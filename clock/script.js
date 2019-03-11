
$(document).ready(function(){

  setTimeout(function(){
    $(".red").addClass("alarm"); 
    $(".dot").addClass("alarm");
  }, 20000);

   $(".screen").click(function() { 
    $(".screen").addClass("snooze");
   	setTimeout(function(){
   		$(".grow").addClass("snooze");
   	},1000);
    setTimeout(function(){
   		$(".red").removeClass("alarm");
    	$(".dot").removeClass("alarm");
    	
    },2000);
    setTimeout(function() {
    	$(".screen").removeClass("snooze");
    	$(".dot").css("animation-name", "").delay(1500).css("animation-name", "animationC");
    },5000);
  });

}); 
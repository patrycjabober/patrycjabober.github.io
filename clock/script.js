
$(document).ready(function(){

  setTimeout(function(){
    $(".red").addClass("alarm"); 
    $(".dot").addClass("alarm");
  }, 30000);

   $(".red").click(function() { 
    $(".red").removeClass("alarm");
    $(".dot").removeClass("alarm");
  });

}); 
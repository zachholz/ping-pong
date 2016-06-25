// Business logic

var playPingPong = function(number) {
  for(i = 1; i <= number; i +=1) {   
    if(i % 15 === 0) {
      $("ul#counting").append("<li>pingpong</li>") 
    } else if(i % 5 === 0) {
      $("ul#counting").append("<li>pong</li>") 
    } else if(i % 3 === 0) {
      $("ul#counting").append("<li>ping</li>") 
    } else {
      $("ul#counting").append("<li>" + i + "</li>") 
    }
  }
}
  

// User interface logic
$(document).ready(function() {
  $("form").submit(function(event) {

  // refresh results list 
  $("button").click(function() {
    $("li").remove();
  });
    
  // collect user input
  var number = parseInt($("input#number").val());
  playPingPong(number);
  

  
  event.preventDefault();
  
  });
});
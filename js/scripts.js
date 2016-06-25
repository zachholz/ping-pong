// Business logic

var playPingPong = function(number) {
  for(i = 1; i <= number; i +=1) {   
    if(i % 15 === 0) {
      $("ul#counting").append("<li id='pingpong'>pingpong</li>") 
    } else if(i % 5 === 0) {
      $("ul#counting").append("<li id='pong'>pong</li>") 
    } else if(i % 3 === 0) {
      $("ul#counting").append("<li id='ping'>ping</li>") 
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
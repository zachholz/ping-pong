// business logic

var playPingPong = function(number) {
  for(i = 0; i <= number; i +=1) {
    $("ul#counting").append("<li>" + i + "</li>")    
//     if() {
//       // code for "ping" 
//     } else if() {
//       // code for "pong"
//     } else if() {
//       // code for "pingpong"
//     } else {
//       // code for regular counting
//     }
  }
}
  

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
  var number = parseInt($("input#number").val());
  playPingPong(number);
  
  event.preventDefault();
  
  });
});
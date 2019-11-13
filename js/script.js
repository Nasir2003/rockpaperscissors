// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW 
$("#shoot").click(function() { 

var user = $("#input").val(); 
    $("#userChoice").text(user)
var computer = Math.random(); 

if (computer > .67){ 
    $("#computerChoice").text("rock"); 

} else if (computer < .33){ 
    $("#computerChoice").text("scissors"); 

} else { 
    $("#computerChoice").text("paper");
}
 
});
 

// The function to run the todaycalendar and GMT

var todaycalendar = moment().format('dddd [the] Do [of] MMMM');
$("#currentDay").html(todaycalendar);

//  This code will run when the js code has been executed. 

$(document).ready(function () {

// The function to run when the save button is clicked.

    $(".saveBtn").on("click", function () {

// A variable for text and time.

        var text = $(this).siblings(".listing").val();
        var time = $(this).parent().attr("id");

// Local storage acting as a saver for text.

        localStorage.setItem(time, text);

    })

// Here i will declare the function

function LoggingPlanner() {

// I have declared the variable GMT and used formula to get the hour.

    var GMT = moment().hour();

// Setting a loop function to go over the timerbloack caption.

    $(".time-block").each(function () {
        var Lengthcapture = parseInt($(this).attr("id").split("hour")[1]);

// Needing to have an if/else statemnt to go through things if it is not this then go to this.
// The statement will check for the time block and if its less then the GMT, then the previos class will be added and the upcoming and current class names will be changed.

if (Lengthcapture < GMT) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}
// Now to the second part if the above is captured, if not then else if.

else if (Lengthcapture === GMT) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");    
}
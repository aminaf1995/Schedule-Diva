// Display today's day and date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // Activate save Button click listener 
    $(".saveBtn").on("click", function () {

     // Retrive nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    });

    function timeTracer() {
        //get current number of hours.
        var timeCurrent = parseInt(moment().format("H"));

        // loop over time blocks
        $(".textarea").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            // Check the time and see if the id's match
            if (blockTime < timeCurrent) {
                $(this).addClass("past");
            }
            else if (blockTime === timeCurrent) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Retrive items from local storage if there are any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
     $("#hour18 .description").val(localStorage.getItem("hour18"));
    
    timeTracer();
})

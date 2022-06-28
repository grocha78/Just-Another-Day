// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// current time at top of page
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").append(currentTime);

var createTask = function(taskText) {
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// saveBtn was clicked
$(".save-Btn").on("click", function() {
    var value = $(this).siblings(".input-text-area").val();
    console.log(value);
    var time = $(this).attr("id")
    console.log(time);
    localStorage.setItem(time, value);
});


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

var rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format("H"));
console.log(currentHour);

// makes a row id to compare
Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "#23c714");
      } else if ((currentHour < rowHour)){
        setColor(row, "#35b7df");
      } else {
        setColor(row, "lightgrey");
      }
    }
  });
  
  // function to set the background color based of hour
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  function save_data() {
    var input = document.getElementById('textArea8').value;
    localStorage.setItem('text8', input);
  }
  document.getElementById('textArea8').value = localStorage.getItem('text8');
  
  function save_data(e){
    var number = $(e).data('num');
    var input = document.getElementById('textArea' + number).value;
    localStorage.setItem('text' + number, input);
  }
  
  for(var i = 8; i <= 17; i++){
    document.getElementById('textArea' + i).value = localStorage.getItem('text' + i);
  }

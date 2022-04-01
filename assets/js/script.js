var tempData = []; // variable used for saving and loading data

var grabCurrentDay = function(){ // checks and displays what day it is
  var day = moment().format("[Today is] MMMM Do");
  $("#currentDay").text(day);
}

var changeColors = function(){ // changes the background color of the text boxes based on the time
  for (i = 9; i < 18; i++) {
    var currentHour = (moment().hour());
    if (i < currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-dark text-white");
    }
    else if(i === currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-danger");
    }
    else if(i > currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-white");
    }
  }
}

var saveData = function(data){ // saves the id num and inner text to the local storage
  tempData = [data, $("textarea[data-id="+data+"]").val()];
  localStorage.setItem("time-id "+data, JSON.stringify(tempData))
}

var loadData = function(){ //loads the text from the local storage
  for (i = 9; i < 18; i++) {
    tempData = localStorage.getItem("time-id "+i, JSON.stringify(tempData));
    tempData = JSON.parse(tempData);
    if (tempData){
      $("textarea[data-id="+i+"]").text(tempData[1]);
    }
  }
}

$(".save-btn").on("click", function(){ //listens for the save button to be clicked
  saveData($(this).attr("id"));
})

setInterval(function(){ //reload page data every 10 minutes
  grabCurrentDay();
  changeColors();
},(1000 * 60) *10)

grabCurrentDay();
changeColors();
loadData();
var currentDayEl = document.querySelector("#currentDay");
var containerEl = $("#container");

var grabCurrentDay = function(){
var day = "";
day = moment().format("[Today is] MMMM Do");
currentDayEl.innerHTML = day;
}


setInterval(function(){ //reload data every 15 minutes
grabCurrentDay();
},15000)

grabCurrentDay();
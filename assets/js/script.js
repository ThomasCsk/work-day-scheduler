
var grabCurrentDay = function(){
  var day = moment().format("[Today is] MMMM Do");
  $("#currentDay").text(day);
}

var changeColors = function(){
  for (i = 9; i < 18; i++) {
    var currentHour = (moment().hour());

    if (i < currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-dark text-white");
    }
    else if(i === currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-danger");
    }
    else if(i <= currentHour + 2){
      $("textarea[data-id="+i+"]").addClass("bg-warning");
    }
    else if(i > currentHour){
      $("textarea[data-id="+i+"]").addClass("bg-white");
    }
  }
}

var saveData = function(data){ // saves score and initials to the local storage
  var tempData = [data, $("textarea[data-id="+data+"]").val()];
  localStorage.setItem("time-id "+data, JSON.stringify(tempData))
  location.reload()
}


$(".save-btn").on("click", function(){
  saveData($(this).attr("id"));
})

setInterval(function(){ //reload data every 5 minutes
  grabCurrentDay();
  changeColors();
},(1000 * 60) *5)

grabCurrentDay();
changeColors();
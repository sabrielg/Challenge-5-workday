
function generateTimeblock (hour, value) {
    var timeBlockRow = $("<div>");
    timeBlockRow.addClass("row justify-content-center border-bottom border-light");

var timeBlockHour = $("<div>")
timeBlockHour.addClass("col-2 ml-2 bg-info text-light text-center p-2");
if (hour < 12) {
    timeBlockHour.text(hour%12+"AM")
}
else if(hour > 12) {
    timeBlockHour.text(hour%12+"PM")
}
else if(hour ==12) {
    timeBlockHour.text("12PM")
}
// timeBlockHour.text(hour)
console.log(hour%12)

var timeBlockDetail = $("<div>")
timeBlockDetail.addClass("col-6 border-right border-left border-light text-light p-2");
if(hour < moment().hour()) {
    timeBlockDetail.css("background-color", "orange")
    console.log("past")
}
else if(hour > moment().hour()) {
    timeBlockDetail.css("future")
    console.log("future")
}
else {
    timeBlockDetail.css("present")
    console.log("current")
}

var timeBlockInput = $("<textArea>")
timeBlockInput.attr("type", "text")
timeBlockInput.val(value)
timeBlockDetail.append(timeBlockInput)
if (localStorage.getItem(hour)) {
    timeBlockInput.val(localStorage.getItem(hour))
}

var timeBlockSave = $("<div>")
timeBlockSave.addClass("col-2 mr-2 bg-success p-2");
var saveIcon =$("<i>")
saveIcon.addClass("fas fa-save fa-4x justify-content-center")
timeBlockSave.append(saveIcon)
timeBlockSave.click(function (){
    // if(click.keyCode===13);
    console.log(timeBlockInput.val())
    console.log(hour)
    localStorage.setItem(hour, timeBlockInput.val() )
})

timeBlockRow.append(timeBlockHour, timeBlockDetail, timeBlockSave);
return timeBlockRow
}

for (let index = 0; index < 9; index++) {
    $("#timeDisplay").append(generateTimeblock(index+10,))
    // if this specific time block has value from the previous session (local storage) and be passed into here
}



// CLick a button, fill a form and save in local storage

// on page load you need to retrieve the information from local storage and pass it into the function

// we will need another parameter

// color-code rows
function generateTimeblock (hour, value) {
    var timeBlockRow = $("<div>");
    timeBlockRow.addClass("row justify-content-center border-bottom border-light");

var timeBlockHour = $("<div>")
timeBlockHour.addClass("col-2 ml-2 bg-info text-light text-center p-2");

timeBlockHour.text(hour)

var timeBlockDetail = $("<div>")
timeBlockDetail.addClass("col-6 bg-dark border-right border-left border-light text-light p-2");

var timeBlockInput = $("<textArea>")
timeBlockInput.attr("type", "text")
timeBlockInput.val(value)
timeBlockDetail.append(timeBlockInput)

var timeBlockSave = $("<div>")
timeBlockSave.addClass("col-2 mr-2 bg-success p-2");
var saveIcon =$("<i>")
saveIcon.addClass("fas fa-save fa-5x")
timeBlockSave.append(saveIcon)

timeBlockRow.append(timeBlockHour, timeBlockDetail, timeBlockSave);
return timeBlockRow
}

for (let index = 0; index < 9; index++) {
    $("#timeDisplay").append(generateTimeblock(index+10, ""))
    // if this specific time block has value from the previous session (local storage) and be passed into here
}

// CLick a button, fill a form and save in local storage

// on page load you need to retrieve the information from local storage and pass it into the function

// we will need another parameter

// color-code rows
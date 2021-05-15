let nine = $("#9");
let ten = $("#10");
let eleven = $("#11");
let twelve = $("#12");
let one = $("#13");
let two = $("#14");
let three = $("#15");
let four = $("#16");
let five = $("#17");
let six = $("#18");
let seven = $("#19");

let time = moment();


function scheduler() {
    $("#todaysDay").text(moment().format("dddd, MMMM do YYYY"))

    $(".time-block").each(function () {
        let idEl = $(this).attr("#id");
        let data = localStorage.getItem(idEl);

        if (data !== null) {
            $(this).children(".schedule").val(data);
        }
    });
}

scheduler();
let saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    let time = $(this).parent().attr("id");
    let data = $(this).siblings(".schedule").val();

    localStorage.setItem(time, data);
})

function timeTravel() {
    hour = time.hours();
    $(".time-block").each(function () {
        let currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }
        else if (currentHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

timeTravel();
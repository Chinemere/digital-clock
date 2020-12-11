
// Function that displays the time on the screem
window.onload = function digitalTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (hour <= 9 & minute <= 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

    } else if (hour > 9 & minute > 9) {
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;
    }

    if (hour <= 9 & minute > 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + minute;

    }
    else if (hour > 9 & minute <= 9) {
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + "0" + minute;

    }

}
setInterval(window.onload, 60, 000)

// function that writes the today's date day and month on the scrollig marquess
function days() {
    var monthOfTheYear = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    var daysOfTheWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESSDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var day = date.getDay();
    var todayDate = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    // for (var i = 0; i < daysOfTheWeek.length; i++) {
    //     if (i === day) {
    //         document.getElementById("today").innerHTML = "TODAY IS" + " " + daysOfTheWeek[i] + "," + " " + monthOfTheYear[month] + " " + todayDate + "," + " " + year + ".";

    //     }

    // }

    document.getElementById("today").innerHTML = "TODAY IS" + " " + daysOfTheWeek[day] + "," + " " + monthOfTheYear[month] + " " + todayDate + "," + " " + year + ".";
}
days()





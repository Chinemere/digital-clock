
// window.onload = function digitalTime() {
//     var date = new Date();
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     var zero1 = [1];
//     // document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;
//     if (minute <= 9 & hour <= 9) {
//         document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

//     } else if (minute > 9 & hour > 9) {
//         // document.getElementById('figuremain').innerHTML = "" + hour + ":" + "0" + minute;
//         document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;


//     } else if (minute <= 9 || hour <= 9) {
//         document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

//     }

//     if (hour <= 9) {
//         document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + minute;

//     } else {
//         document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;

//     }

// }

// setInterval(window.onload, 60, 000)


window.onload = function digitalTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var zero1 = [1];
    // document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;
    if (hour <= 9 & minute <= 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

    } else if (hour > 9 & minute > 9) {
        // Dont touch the code;
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;
    }
    //  else if (hour <= 9 || minute <= 9) {
    //     document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

    // }

    if (hour <= 9 & minute > 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + minute;

    }
    else if (hour > 9 & minute <= 9) {
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + "0" + minute;

    }

}

setInterval(window.onload, 60, 000)








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

    for (var i = 0; i < daysOfTheWeek.length; i++) {
        if (i === day) {
            document.getElementById("today").innerHTML = "TODAY IS" + " " + daysOfTheWeek[i] + "," + " " + monthOfTheYear[month] + " " + todayDate + "," + " " + year + ".";

        }

    }

}
days()





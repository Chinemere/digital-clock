
window.onload = function digitalTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    // document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;
    if (minute <= 9 & hour <= 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

    } else if (minute > 9 & hour > 9) {
        // document.getElementById('figuremain').innerHTML = "" + hour + ":" + "0" + minute;
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;


    } else if (minute <= 9 || hour <= 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + "0" + minute;

    }

    if (hour <= 9) {
        document.getElementById('figuremain').innerHTML = "" + "0" + hour + ":" + minute;

    } else {
        document.getElementById('figuremain').innerHTML = "" + hour + ":" + minute;

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



// function nn() {
//     var date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
//     var day = date.getDay();
//     var month = date.getMonth();
//     var year = date.getFullYear();
//     console.log("Today Is " + " " + date)
// }
// nn()
// days()
// new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());

// var NowDate = new Date();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var sDay = NowDate.getDate();
// var sMonth = NowDate.getMonth() + 1;
// var sYear = NowDate.getFullYear();
// var eDisplayDate = document.getElementById('today');
// eDisplayDate.innerHTML = sYear + '-' + sMonth + '-' + sDay;
// console.log(eDisplayDate)



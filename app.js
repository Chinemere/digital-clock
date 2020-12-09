
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





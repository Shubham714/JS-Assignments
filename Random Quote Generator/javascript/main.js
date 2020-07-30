
async function newQuote() {
    const response = await fetch('https://type.fit/api/quotes');
    const quotes = await response.json();
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomNumber];
    document.getElementById(
        "quoteDisplay"
    ).innerHTML = `"${quote.text}"<br>- ${quote.author}`;
}

//date
function startDate() {
    var today = new Date();
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    document.getElementById("date").innerHTML =
        days[today.getDay()] +
        " | " +
        today.getDate() +
        "/" +
        [today.getMonth() + 1] +
        "/" +
        today.getFullYear();
}

//time
function startTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12) {
        h = 12;
        ampm = " AM";
    } else if (h < 12) {
        ampm = " AM";
    } else {
        ampm = "PM";
    }

    if (h == 0) {
        h = 12;
    }

    document.getElementById("time").innerHTML = h + ":" + m + ampm;
    var t = setTimeout(function () {
        startTime();
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}

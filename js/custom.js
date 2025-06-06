// Countdown Days js //
var countDownDate = new Date("september 20, 2025").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdownDays").innerHTML = days + " ";
});


// light mode or dark mode js //   
function setThemeByTime() {
    // Set your fixed sunrise and sunset time (24-hour format)
    const sunriseHour = 6;   // 6:00 AM
    const sunsetHour = 18.5; // 6:30 PM (18.5 = 18:30)

    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    if (currentHour >= sunriseHour && currentHour < sunsetHour) {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    }
}

setThemeByTime();

// Optional: check every 5 minutes to update if needed
setInterval(setThemeByTime, 5 * 60 * 1000);
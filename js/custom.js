// Countdown Days js //
var countDownDate = new Date("august 27, 2025").getTime();
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




// swipe words animation //
const scrollingWord = document.querySelector(".scrolling_word");
const words = document.querySelectorAll(".scrolling_word .inner_word");
const totalWords = words.length;

function getWordSize() {
    if (window.innerWidth <= 768) {
        return scrollingWord.offsetWidth; // full container width
    } else {
        return words[0].offsetHeight;
    }
}

let tl = gsap.timeline({ repeat: -1, paused: true });
let wordSize = getWordSize();

function buildTimeline() {
    tl.clear();
    wordSize = getWordSize();
    gsap.set(scrollingWord, { x: 0, y: 0 });

    if (window.innerWidth <= 768) {
        // Mobile: horizontal
        for (let i = 1; i < totalWords; i++) {
            tl.to(scrollingWord, {
                x: -i * wordSize,
                duration: 0.8,
                ease: "power3.inOut",
                delay: 2,
            });
        }
        tl.set(scrollingWord, { x: 0 });
    } else {
        // Desktop: vertical
        for (let i = 1; i < totalWords; i++) {
            tl.to(scrollingWord, {
                y: -i * wordSize,
                duration: 0.8,
                ease: "power3.inOut",
                delay: 2,
            });
        }
        tl.set(scrollingWord, { y: 0 });
    }
}

// Initialize and play
buildTimeline();
tl.play();

// Rebuild on resize
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        buildTimeline();
        tl.play();
    }, 200);
});


// Loader //

window.addEventListener("load", function () {
const preloader = document.querySelector(".preloader");
const loaderText = document.querySelector(".preloader_inner");

let count = 0;
const duration = 3000; // total duration of loading (in ms)
const intervalTime = 30; // update every 30ms

const interval = setInterval(() => {
    count++;
    loaderText.textContent = count + "%";

    if (count >= 100) {
    clearInterval(interval);

    // Start fading out after reaching 100%
    preloader.classList.add("hide-preloader");

    // Remove from DOM after fade transition
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); // match with CSS transition
    }
}, duration / 100); // divide total time by 100 steps
});


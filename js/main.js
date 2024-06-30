// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j <= +number[i].dataset.goal; j++) {
//         if (+number[i].innerHTML === +number[i].dataset.goal) {
//             break;
//         }
//         number[i].innerHTML = +number[i].innerHTML + 1;
//     }
// }

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let stats = document.querySelector(".stats");
let number = document.querySelectorAll(".box .number");
let start = false;

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 50) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    if (window.scrollY >= stats.offsetTop - 50) {
        if (!start) {
            number.forEach((num) => startCount(num));
        }
        start = true
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal)
}

let countDownDate = new Date("Dece 31, 2024 23:59:59").getTime();

let count = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`:days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`:seconds;
    if (dateDiff == 0) {
        clearInterval(count)
    }
},1000);

// Element selectors
const hours = document.querySelector('#hh');
const minutes = document.querySelector('#mm');
const seconds = document.querySelector('#ss');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// Stopwatch time variables
let ss = 0;
let mm = 0;
let hh = 0;
let start;

// Functions
function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function incrementTime() {
    if (ss < 59) {
        ss++;
    } else {
        ss = 0;
        if (mm < 59) {
            mm++
        } else {
            mm = 0;
            hh++;
        }
    }
}



// Event listeners
startBtn.addEventListener('click', (event) => {
    event.target.disabled = true;
    start = setInterval(() => {
        seconds.innerHTML = formatTime(ss);
        minutes.innerHTML = formatTime(mm);
        hours.innerHTML = formatTime(hh);
        incrementTime();
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(start);
});

resetBtn.addEventListener('click', () => {
    clearInterval(start);
    ss = 0;
    mm = 0;
    hh = 0;
    seconds.innerHTML = formatTime(ss);
    minutes.innerHTML = formatTime(mm);
    hours.innerHTML = formatTime(hh);
});












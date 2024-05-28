let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let interval;
let lapNumber = 1;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.textContent = seconds;
    getTens.textContent = tens;
    getMins.textContent = mins;
    lapNumber = 1;
    document.querySelector('.laps-list').innerHTML = '';
});

btnLap.addEventListener('click', () => {
    const lapTime = getTimerValue();
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapNumber}: ${lapTime}`;
    document.querySelector('.laps-list').appendChild(lapItem);
    lapNumber++;
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.textContent = '0' + tens;
    }
    if (tens > 9) {
        getTens.textContent = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.textContent = '0' + seconds;
        tens = 0;
        getTens.textContent = '00';
    }
    if (seconds > 9) {
        getSeconds.textContent = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.textContent = '0' + mins;
        seconds = 0;
        getSeconds.textContent = '00';
    }
    if (mins > 9) {
        getMins.textContent = mins;
    }
}

function getTimerValue() {
    return `${mins}:${seconds}:${tens}`;
}

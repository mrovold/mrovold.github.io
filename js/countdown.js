let time, hours, minutes, seconds, countdownEl, startTimer, volume, isStart;
let startBtn = document.querySelector('.countdown__start');
let resumeBtn = document.querySelector('.countdown__resume');
let pauseBtn = document.querySelector('.countdown__pause');
let hoursInput = document.querySelector('.countdown__hours');
let minutesInput = document.querySelector('.countdown__minutes');
let secondsInput = document.querySelector('.countdown__seconds');

function clearVariables() {
   if (startTimer) {
      clearTimeout(startTimer);
   }
   startTimer = time = hours = minutes = seconds = countdownEl = null;
}

function startParametres() {
   countdownEl = document.querySelector('.countdown__show');
   if (!isNaN(hoursInput.value)) {
      hours = Number(hoursInput.value);
   } else { hours = 0 }
   if (!isNaN(hoursInput.value)) {
      minutes = Number(minutesInput.value);
   } else { minutes = 0 }
   if (!isNaN(hoursInput.value)) {
      seconds = Number(secondsInput.value);
   } else { seconds = 0 }
   minutes = Number(minutesInput.value);
   seconds = Number(secondsInput.value);
   isStart = true;
   time = ((hours * 60) * 60) + (minutes * 60) + seconds;
}

function start() {
   clearVariables();
   startParametres();
   updateCountdown();
}

function pause() {
   clearTimeout(startTimer);
   isStart = false;
}

function resume() {
   if (isStart !== true) {
      updateCountdown();
      isStart = true;
   }
}

function blink() {
   document.querySelector('.countdown__tik').play();   
}

function changeVolume() {
   volume = document.querySelector('.countdown__tik');
   volume.volume = 0.5;
}
changeVolume();

function timeFormat() {
   time = time < 0 ? 0 : time;
   hours = Math.floor(time / 60 / 60);
   minutes = (Math.floor(time / 60)) % 60;
   seconds = time % 60;
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;
   countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
   time--;
}

function updateCountdown() {
   timeFormat();
   blink();
   if (time < 0) {
      clearVariables();
   } else {
      startTimer = setTimeout(updateCountdown, 1000);
   }
}

startBtn.addEventListener('click', () => {
   start();
})
resumeBtn.addEventListener('click', () => {
   resume();
})
pauseBtn.addEventListener('click', () => {
   pause();
})

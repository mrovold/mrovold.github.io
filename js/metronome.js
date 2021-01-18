const slider = document.querySelector('.slider__range');
const countBlock = document.querySelector('.count');
const beatBtn = document.querySelector('.beat__button');
const audio = document.querySelector('.tik');
const plus = document.querySelector('.range__plus');
const minus = document.querySelector('.range__minus');
const startMetronome = document.querySelector('.show__beat');
const playButton = document.querySelector('.triangle');
let buttonState = 0;
let canChange = false;
let sliderRange = slider.value;
let bpm = 0;
let timeOut = null;

countBlock.textContent = slider.value;

function clearVar() {
   beatBtn.style.animation = `none`;
   audio.pause();
   if (timeOut !== null) {
      clearTimeout(timeOut);
   }
   bpm = 0;
   timeOut = null;
}

function startParam() {
   bpm = Math.round(60 / parseInt(slider.value) * 1000);
   beatBtn.style.animation = `shadowBeat ${bpm}ms ease infinite`;
}

function tik() {
   audio.play();
   timeOut = setTimeout(tik, bpm);
}

plus.addEventListener('click', () => {
   sliderRange = String(parseInt(slider.value, 10) + 1);
   slider.value = sliderRange;
   countBlock.textContent = slider.value;
   if (canChange === true) {
      countChange();
   }
});

minus.addEventListener('click', () => {
   sliderRange = String(parseInt(slider.value, 10) - 1);
   slider.value = sliderRange;
   countBlock.textContent = slider.value;
   if (canChange === true) {
      countChange();
   }
});

slider.addEventListener('input', () => {
   sliderRange = slider.value;
   countBlock.textContent = slider.value;
   if (canChange === true) {
      countChange();
   }
});

function countChange() {
   clearVar();
   setTimeout(startParam, bpm);
   tik();
}

startMetronome.addEventListener('click', () => {
   buttonState++;
   if (buttonState === 1) {
      playButton.classList.remove("pause");
      playButton.classList.add("play");
      canChange = true;
      countChange();
   } else {
      playButton.classList.remove("play");
      playButton.classList.add("pause");
      canChange = false;
      buttonState = 0;
      clearVar();
   }
})

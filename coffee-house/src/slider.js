//AUTOSLIDER AND TOGGLE WITH ARROWS

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const slider = document.querySelector(".slider__cards-wraper");
let left = 0;
const time = 6000;
let autoSlide;
slider.style.left = 0;
leftArrow.addEventListener("click", toggleSlide);
rightArrow.addEventListener("click", toggleSlide);

function toggleSlide(event) {
  if (event) {
    stopAutoslide();
    startAutoslide();
  }
  if ((event && event.target.closest("#leftArrow")) || event === "touchend") {
    left += 100;
  } else left -= 100;
  if (left === -300) {
    left = 0;
  }
  if (left === 100) {
    left = -200;
  }
  changeIndicator();
  slider.style.left = `${left}%`;
}

function startAutoslide() {
  autoSlide = setInterval(() => {
    toggleSlide();
  }, time);
}

startAutoslide();

function stopAutoslide() {
  clearInterval(autoSlide);
}

// INDICATOR
let activeIndicator;
let progress;
let counter = 100;
let indicator;

function changeIndicator() {
  if (activeIndicator) {
    stopInterval();
    progress.style.width = 0;
    counter = 0;
  }
  if (left === 0) {
    activeIndicator = document.querySelector(
      `.progress__wraper[data-number="1"]`
    );
  } else if (left === -100) {
    activeIndicator = document.querySelector(
      `.progress__wraper[data-number="2"]`
    );
  } else {
    activeIndicator = document.querySelector(
      `.progress__wraper[data-number="3"]`
    );
  }

  progress = activeIndicator.querySelector(".progress__inner");

  startInterval();
}
function startInterval() {
  indicator = setInterval(() => {
    let width = (100 / time) * counter;
    progress.style.width = `${width}%`;
    counter += 100;
  }, 100);
}

function stopInterval() {
  clearInterval(indicator);
}

changeIndicator();

//STOP MOVING
slider.addEventListener("mouseover", pauseAutoslider);

function pauseAutoslider() {
  stopInterval();
  stopAutoslide();
}

slider.addEventListener("mouseout", playAutoslider);
slider.addEventListener("touchend", playAutoslider);

function playAutoslider() {
  startInterval();
  let restTime = time - counter;
  setTimeout(() => {
    toggleSlide();
    startAutoslide();
  }, restTime);
}

//EVENTS FÜR TOUCH DEVICES
let startX = 0;

slider.addEventListener("touchstart", (event) => {
  pauseAutoslider;
  startX = event.touches[0].clientX;
});
slider.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX;
  const diffX = endX - startX;
  if (diffX < -50) {
    toggleSlide(event);
  } else if (diffX > 50) {
    toggleSlide();
  } else playAutoslider();
});

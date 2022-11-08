const hour = document.querySelector(".inp-hor");
const min = document.querySelector(".inp-min");
const sec = document.querySelector(".inp-sec");

const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

let time = new Date();

function start() {
  startBtn.classList.add("active");
  setInterval(() => {
    sec.value -= 1;
  }, 1000);
  if (hour.value < 10) {
    hour.value = "0" + hour.value;
  }
  if (min.value < 10) {
    min.value = "0" + min.value;
  }
  if (sec.value < 10) {
    sec.value = `0${sec.value}`;
  }
}

function reset() {
  hour.value = 00;
  min.value = 00;
  sec.value = 00;
  // start()
}
hour.addEventListener("click", () => {
  hour.value = 10;
});
min.addEventListener("click", () => {
  min.value = 10;
});
sec.addEventListener("click", () => {
  sec.value = 10;
});
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

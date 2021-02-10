const MESSAGE = `Nash`;
const CLOCK_CLASS = 'text-wrapper'
const REMOVED_CLASS = 'is-off'
const TIME_CLASS = "time";

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const elements = document.getElementsByClassName(CLOCK_CLASS)
    for(let i =0; i<elements.length; i++){
      elements[i].classList.remove(REMOVED_CLASS)
    }
  }, 2000);

  setInterval(function () {
    let elements = document.getElementsByClassName(TIME_CLASS);
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = MESSAGE;
      elements[i].setAttribute("data-time", MESSAGE);
    }
  }, 1000);
});

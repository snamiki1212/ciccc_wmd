const MESSAGE = `Nash`;
const CLOCK_CLASS = '.text-wrapper'
const REMOVED_CLASS = 'is-off'
const TEXT_CLASS = ".text";

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(CLOCK_CLASS).forEach(element => {
    element.classList.remove(REMOVED_CLASS)
  })

  setInterval(function () {
    document.getElementsByClassName(TEXT_CLASS).forEach(element => {
      element.innerHTML = MESSAGE;
      element.setAttribute("data-time", MESSAGE);
    });
  }, 1000);
});

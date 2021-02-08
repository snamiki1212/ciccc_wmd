const MESSAGE = `nash`;

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const klass = 'clock'
    const klassRemoved = 'is-off'
    const elements = document.getElementsByClassName(klass)
    for(let i =0; i<elements.length; i++){
      elements[i].classList.remove(klassRemoved)
    }
  }, 2000);

  setInterval(function () {
    const msg = MESSAGE;
    const klass = "time";
    let elements = document.getElementsByClassName(klass);
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = msg;
      elements[i].setAttribute("data-time", msg);
    }
  }, 1000);
});

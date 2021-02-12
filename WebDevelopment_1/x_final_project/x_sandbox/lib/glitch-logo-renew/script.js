// fork from: https://codepen.io/fearOfCode/pen/FsGtu

const CLASS_is_off = "is-off"
const CLASS_text_wrapper = ".text-wrapper"
const CLASS_text = ".text"
const ATTRIBUTE_data = "data-time"

window.addEventListener("DOMContentLoaded", function () {
  function second_passed() {
    document.querySelector(CLASS_text_wrapper).classList.remove(CLASS_is_off);
  }

  // setTimeout(second_passed, 2000);
  second_passed();

  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval(function () {
    var hours = new Date().getHours();
    var seconds = new Date().getSeconds();
    var minutes = new Date().getMinutes();

    var realTime =
      (hours < 10 ? "0" : "") +
      hours +
      " : " +
      (minutes < 10 ? "0" : "") +
      minutes +
      " : " +
      (seconds < 10 ? "0" : "") +
      seconds;

    // $(".time").html(realTime);
    elem = document.querySelector(CLASS_text);
    elem.innerHTML = realTime;
    elem.setAttribute(ATTRIBUTE_data, realTime);
    // $(".time")
  }, 1000);
});

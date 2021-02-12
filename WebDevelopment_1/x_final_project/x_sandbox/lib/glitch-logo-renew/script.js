// fork from: https://codepen.io/fearOfCode/pen/FsGtu

window.addEventListener("DOMContentLoaded", function () {
  function second_passed() {
    document.querySelector(".clock").classList.remove("is-off");
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
    elem = document.querySelector(".time");
    elem.innerHTML = realTime;
    elem.setAttribute("data-time", realTime);
    // $(".time")
  }, 1000);
});

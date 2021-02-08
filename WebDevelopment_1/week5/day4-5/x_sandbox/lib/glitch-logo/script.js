const MESSAGE = `NASH`;

$(document).ready(function () {
  function second_passed() {
    $(".clock").removeClass("is-off");
  }
  setTimeout(second_passed, 2000);

  $(".switcher").on("click", function (e) {
    e.preventDefault();
    $(".screen").toggleClass("glitch-logo");
  });

  const newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval(function () {
    // const hours    = new Date().getHours();
    // const seconds  = new Date().getSeconds();
    // const minutes  = new Date().getMinutes();
    // const realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    const msg = MESSAGE;

    $(".time").html(msg);
    $(".time").attr("data-time", msg);
  }, 1000);
});

document.querySelector("#preset1").addEventListener("click", function () {
  setParamsValues("l", 2);
  setParamsValues("n", 0);
});

document.querySelector("#preset2").addEventListener("click", function () {
  setParamsValues("l", 0.1);
  setParamsValues("n", 10);
});

document.querySelector("#preset3").addEventListener("click", function () {
  setParamsValues("l", 3);
  setParamsValues("n", 2);
});

document.querySelector("#preset4").addEventListener("click", function () {
  setParamsValues("l", 3);
  setParamsValues("n", 4);
});

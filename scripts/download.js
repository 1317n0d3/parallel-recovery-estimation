document.querySelector("#download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "data.txt";
  link.href = "./../assets/data.txt";
  link.click();

  link.remove();
});

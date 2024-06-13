let chart;
let l1 = 2;
let l2 = 2;
let l3 = 2;
let l4 = 2;
let l5 = 2;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;

// Начальные условия
let init = Array(32).fill(0);
init[0] = 1;
// Значения независимой переменной
let x1 = 0; // Начальное значение
let x2 = 1; // Конечное значение
let intvls = 100; // Количество интервалов

function drawPlot(datasets) {
  const ctx = document.getElementById("plotCanvas").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: timeIntervals(x1, x2, intvls),
      datasets: datasets,
    },
    options: {
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

document
  .getElementById("paramsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    l1 = parseFloat(document.getElementById("l1").value);
    l2 = parseFloat(document.getElementById("l2").value);
    l3 = parseFloat(document.getElementById("l3").value);
    l4 = parseFloat(document.getElementById("l4").value);
    l5 = parseFloat(document.getElementById("l5").value);
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);
    n4 = parseFloat(document.getElementById("n4").value);
    n5 = parseFloat(document.getElementById("n5").value);

    x2 = parseInt(document.getElementById("t").value);

    intvls = calculateIntervals(x1, x2);

    chart.destroy();
    drawPlot(getDataset(init, x1, x2, intvls, D));
  });

drawPlot(getDataset(init, x1, x2, intvls, D));

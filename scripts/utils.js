// Функция для генерации случайного цвета
function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

// Функция для транспонирования матрицы
function transposeMatrix(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}

function timeIntervals(x1, x2, intvls) {
  const h = (x2 - x1) / intvls;
  let t = x1;
  let result = [];
  while (t <= x2) {
    result.push(t);
    t = Math.round((t + h) * 100) / 100;
  }

  return result;
}

function convertMatrixToDatasets(matrix) {
  return matrix.map((value, index) => {
    return {
      label: `P${index}(t)`,
      data: value,
      borderColor: randomColor(),
      borderWidth: 1,
      fill: false,
    };
  });
}

function getDataset(init, x1, x2, intvls, D) {
  return convertMatrixToDatasets(
    transposeMatrix(rkfixed(init, x1, x2, intvls, D))
  );
}

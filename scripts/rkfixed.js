// Функция rkfixed
function rkfixed(init, x1, x2, intvls, D) {
  const h = (x2 - x1) / intvls; // Шаг интегрирования
  let t = x1;
  let Y = init.slice(); // Копируем начальные условия
  let result = [[...Y]]; // Массив для хранения результатов

  // Функция для вычисления следующего значения
  function rkStep(t, Y, h, D) {
    let k1 = D(t, Y);
    let Y1 = Y.map((y, i) => y + (h / 2) * k1[i]);

    let k2 = D(t + h / 2, Y1);
    let Y2 = Y.map((y, i) => y + (h / 2) * k2[i]);

    let k3 = D(t + h / 2, Y2);
    let Y3 = Y.map((y, i) => y + h * k3[i]);

    let k4 = D(t + h, Y3);

    let nextY = Y.map(
      (y, i) => y + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
    );

    return nextY;
  }

  // Основной цикл интегрирования
  for (let i = 0; i < intvls; i++) {
    Y = rkStep(t, Y, h, D);
    t += h;
    result.push([...Y]);
  }

  return result;
}

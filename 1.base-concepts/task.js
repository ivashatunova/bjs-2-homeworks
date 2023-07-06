"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   // Проверяем, являются ли аргументы числами или могут быть преобразованы в числа
   if (
    typeof percent !== 'number' ||
    typeof contribution !== 'number' ||
    typeof amount !== 'number' ||
    typeof countMonths !== 'number' ||
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  // Преобразуем процентную ставку в десятичное число
  let interestRate = percent / 100;
  // Преобразуем годовую процентную ставку в месячную
  let monthlyRate = interestRate / 12;

  // Вычисляем тело кредита
  let loanAmount = amount - contribution;

  // Рассчитываем ежемесячный платеж
  let monthlyPayment =
    loanAmount *
    (monthlyRate +
      monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

  // Вычисляем общую сумму, которую придется заплатить клиенту
  let totalPayment = monthlyPayment * countMonths;

  // Округляем результат до двух значений после запятой
  let roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}


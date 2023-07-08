function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0; //сумма элементов массива

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
    sum += element;
  }
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);

}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0; //четные
  let sumOddElement = 0; //нечетные

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0; //сумма чётных элементов
  let countEvenElement = 0; //количество чётных элементов

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = arrOfArr[i];
    let result = func(...element);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult

}

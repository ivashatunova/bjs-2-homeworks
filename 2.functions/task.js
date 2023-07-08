console.log (getArrayParams(-99, 99, 10))
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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {

}

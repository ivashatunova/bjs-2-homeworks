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
  
}
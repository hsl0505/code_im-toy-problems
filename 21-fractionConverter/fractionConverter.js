/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  // 공약수..?

  // 정수화
  function makeInteger(num, count) {
    if (!Number.isInteger(num)) {
      let newNum = num * 10;
      let newCount = count + 1;
      return makeInteger(newNum, newCount);
    } else {
      return [num, count];
    }
  }

  // 약수 찾기 (소인수분해)
  function getDivide(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  let temp = makeInteger(number, 0);
  let a = temp[0];
  let b = temp[1];
  let divArr = getDivide(b);

  let maxDiv = 0;
  for (let i = 1; i < divArr.length; i++) {
    if (a % divArr[i] === 0) {
      maxDiv = i;
    }
  }

  if (maxDiv === 0) {
    return `${a}/${b}`;
  } else {
    a = a / maxDiv;
    b = b / maxDiv;
    return `${a}/${b}`;
  }
};

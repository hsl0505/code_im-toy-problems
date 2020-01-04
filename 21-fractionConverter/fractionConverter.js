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

  // 정수화
  function makeInteger(num, b) {
    let numLength = num.toString().length - 2; // 6
    if (!Number.isInteger(num)) {
      let multipleTen = Number((num * 10).toFixed(numLength - 1));
      let newB = b * 10;
      return makeInteger(multipleTen, newB);
    } else {
      return [num, b];
    }
  }

  let target;
  if (number < 0) {
    target = number * -1;
  } else {
    target = number;
  }

  let fractionArr = makeInteger(target, 1);

  // 소인수분해 (분자)
  let up = [];
  for (let i = 1; i <= Math.sqrt(fractionArr[0]); i++) {
    if (fractionArr[0] % i === 0) {
      if (i === Math.sqrt(fractionArr[0])) {
        up.push(i);
      } else {
        up.push(i);
        up.push(fractionArr[0] / i);
      }
    }
  }

  // 소인수분해 (분모)
  let down = [];
  for (let i = 1; i <= Math.sqrt(fractionArr[1]); i++) {
    if (fractionArr[1] % i === 0) {
      if (i === Math.sqrt(fractionArr[1])) {
        down.push(i);
      } else {
        down.push(i);
        down.push(fractionArr[1] / i);
      }
    }
  }

  // 공약수
  let max = Math.max.call(null, up.length, down.length);
  let high;
  let low;
  if (max === up.length) {
    high = up;
    low = down;
  } else {
    high = down;
    low = up;
  }
  let same = [];
  for (let i = 0; i < high.length; i++) {
    if (high.includes(low[i])) {
      same.push(low[i]);
    }
  }

  // 최대공약수
  let maxSame = Math.max.apply(null, same);
  if (same.length === 0) {
    maxSame = 1;
  }

  // 분모 분자 나눠서 리턴
  let finalA = fractionArr[0] / maxSame;
  let finalB = fractionArr[1] / maxSame;

  if (number < 0) {
    return `-${finalA}/${finalB}`;
  } else {
    return `${finalA}/${finalB}`;
  }
};

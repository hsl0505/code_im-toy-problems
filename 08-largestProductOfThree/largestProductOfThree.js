/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  // TODO: everything
  // 배열안에 양수가 하나라도 있으면, 숫자의 절대값이 큰 순으로 정렬하여.. 값을 찾아야하고
  // 배열안이 모두 음수이면, 그냥 값이 큰 순으로 정렬하여 앞에 3개 값을 곱해주면 된다.

  let count = 0;
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] > 0) {
      break;
    } else {
      // 음수이면 카운트 증가
      count++;
    }
  }
  if (count === array.length) {
    // 배열 안이 모두 음수일 경우 -> 값이 큰 순서로 정렬
    let temp = array.slice().sort(function(a, b) {
      return b - a;
    });
    return temp[0] * temp[1] * temp[2];
  }

  let copy = array.slice().sort(function(a, b) {
    // 양수가 하나라도 있을 경우 절대값이 큰 순서로 정렬
    if (Math.abs(a) > Math.abs(b)) {
      return -1;
    } else if (Math.abs(a) < Math.abs(b)) {
      return 1;
    } else {
      return 0;
    }
  });

  function recursion(arr) {
    // 처음 3개 -> 마지막 위치를 계속 이동시켜서 -> 없으면 그다음 2번째 위치를 이동시키고 다시 돌리고
    for (let i = 1; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let temp = arr[0] * arr[i] * arr[j];
        if (temp >= 0) {
          return temp;
        }
      }
    }
    let newArr = arr.slice(1); // 그래도 없으면 맨 앞 제거 후 다시
    if (newArr.length !== 2) {
      return recursion(newArr);
    }
  }

  return recursion(copy);
};
// let sortArr = array.sort(function(a,b) {
//   return a-b;
// }).reverse();

// return sortArr[0] * sortArr[1] * sortArr[2];

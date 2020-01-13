/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function(arr) {
  // Your code here.
  let obj = {};
  // occur 횟수
  arr.map(ele => {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele] = obj[ele] + 1;
    }
  });

  let filterArr = [];
  // occur 횟수 짝수 필터링
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      if (!Number(key)) {
        // 스트링이면 그대로 넣기
        filterArr.push(key);
      } else {
        // 넘버면 넘버로 변환
        filterArr.push(Number(key));
      }
    }
  }
  // 가장 먼저 나온 occur target 찾기
  for (let i = 0; i < arr.length; i++) {
    if (filterArr.includes(arr[i])) {
      return arr[i];
    }
  }
};

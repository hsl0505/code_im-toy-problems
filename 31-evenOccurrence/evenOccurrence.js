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
  arr.map(ele => {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele] = obj[ele] + 1;
    }
  });

  let filterArr = [];
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      if (!Number(key)) {
        filterArr.push(key);
      } else {
        filterArr.push(Number(key));
      }
    }
  }
  // console.log(filterArr);
  // let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterArr.includes(arr[i])) {
      return arr[i];
    }
  }
  // console.log("result", result);
  // return result[0];
};

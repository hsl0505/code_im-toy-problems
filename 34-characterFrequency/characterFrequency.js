/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  let result = [];

  // string count
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] = obj[string[i]] + 1;
    }
  }

  // array 형태로 푸쉬
  for (let key in obj) {
    let temp = [];
    temp[0] = key;
    temp[1] = obj[key];
    result.push(temp);
  }

  // string count 순으로 sort, 동일한 count 시에는 알파벳 순서로 sort 시킴
  let result2 = result.sort((a, b) => {
    if (b[1] - a[1] > 0) {
      return 1;
    } else if (b[1] - a[1] < 0) {
      return -1;
    } else if (b[1] === a[1]) {
      let tempA = a[0].toUpperCase();
      let tempB = b[0].toUpperCase();
      if (tempA < tempB) {
        return -1;
      } else if (tempA > tempB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return result2;
};

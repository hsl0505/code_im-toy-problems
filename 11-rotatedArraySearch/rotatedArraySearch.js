/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {  // 3,4,5,6,0,1,2       6,0,1,2,3,4,5
  // Your code here:
  if (rotated[0] === target) {
    return 0
  }
  else {
    let dif = rotated[0] - target; 

    if (Math.abs(dif) > rotated.length) {
      return null
    }
    
    if (dif > 0) { // 1 -> 2가나옴
      if (rotated[0] < rotated[1]) {
        return rotated.length-dif
      }
      else {  // 1 -> 5가 나옴
        return rotated.length-dif
      }
    }
    else if (dif < 0) { // 6 -> -3
      if (rotated[0] < rotated[1]) {
        return -(dif)
      }
      else {
        return null
      }
    }
  }
};


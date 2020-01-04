/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix = function(matrix, direction = 1) {
  // Your code here.
  if (direction === 1) {
    let a = matrix.length; // 4
    let b;
    if (a !== 0) {
      b = matrix[0].length; // 5
    } else {
      b = 0;
    }

    let rotateArr = [];

    let reverseMx = matrix.reverse();

    for (let i = 0; i < b; i++) {
      let temp = new Array(a);
      for (let j = 0; j < reverseMx.length; j++) {
        temp[j] = reverseMx[j][i];
      }
      rotateArr.push(temp.slice());
    }

    return rotateArr;
  } else if (direction === -1) {
    let a = matrix.length; // 4
    let b;
    if (a !== 0) {
      b = matrix[0].length; // 5
    } else {
      b = 0;
    }

    let rotateArr = [];

    let reverseMx = matrix;

    for (let i = b - 1; i >= 0; i--) {
      let temp = new Array(a);
      for (let j = reverseMx.length - 1; j >= 0; j--) {
        temp[j] = reverseMx[j][i];
      }
      rotateArr.push(temp.slice());
    }

    return rotateArr;
  } else {
    return "wrong direction!!";
  }
};

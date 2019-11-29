/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

var bubbleSort = function(array) {
  // Your code here.
  let result = [];

  function recursion(arr) {              // [2,1,3]

    let min = Math.min.apply(null, arr);  // 1

    for (let i=0; i<arr.length; i=i+1) {          // 시간복잡도는 처음에 n을 돌고 그다음 n-1을 돌고 그다음 n-2 ........,3,2,1를 돌아서 O(n^2)
      if (arr[i] === min) {         // 1번 인덱스
        let temp = arr.splice(i,1);  // [2,3]
        arr.unshift(temp[0])         // [1,2,3]            
        break;
      }
    }
    
    result.push(arr[0]);             // [1]
    arr.shift();                     // [2,3]

    if (arr.length === 1) {          
      result.push(arr[0])
    }

    if (arr.length !==1) {    
      recursion(arr)
    }
  }
  
  recursion(array)

  return result;
};

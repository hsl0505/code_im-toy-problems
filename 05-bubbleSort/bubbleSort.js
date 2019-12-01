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

  // 시간 복잡도
  // 시작은 처음부터 n번 비교, n-1번 비교, n-2번 비교, ........ 2번 비교, 1번 비교 -> n*n-1*n-2........2*1 = n(n-1)/2 = O(n^2)
  // 평균 : O(n^2), worst : O(n^2), best : O(n^2)
  // 즉, 어떤 경우든 for문을 2번 다 돌기 때문에 항상 O(n^2)의 시간복잡도를 갖는다
  // 최적화 가능!!
  // -> 값을 비교하여 자리를 교환할 때 카운트가 올라가게 해놓고, 만약 카운트가 하나도 올라가지않는다면 정렬이 이미 완료 된 것으로 판단하고 그상태에서 바로 결과 반환
  // best : O(n) -> 들어온 배열이 이미 오름차순으로 정렬이 되어 있는 경우

  for (let j=0; j<array.length; j=j+1) {
    let count = 0; // 초기 카운트
    for (let i=0; i<array.length; i=i+1) {
      if (array[i] >= array[i+1] && array[i+1] !== undefined) {
        let temp = array.slice(i+1, i+2)[0];
        array[i+1] = array.slice(i, i+1)[0];
        array[i] = temp;
        count++; // 교환이 일어날때마다 카운트가 올라감
      }
    }
    if (count ===0) { // 교환이 일어나지않았다 = 이미 정렬이 다 되어 있다 -> 이 상태의 array를 바로 반환해도됨!!
      break;
    }
  }

  return array


  /*  원래의 버블정렬이 아님!!

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
  */
};

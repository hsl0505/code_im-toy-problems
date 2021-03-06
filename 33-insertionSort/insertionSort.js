/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

var insertionSort = function(array, callback) {
  // Your code goes here. Feel free to add helper functions if needed.
  // 삽입정렬
  // 시간복잡도 : avg O(n^2) / worst O(n^2) / best O(n)
  // 최선의 경우는 이미 정렬이 되어있을 때
  // -> for문 안에 for문에 안들어감(continue를 통해 건너 뜀) -> 외부 for문만 해서 O(n)이 나옴!!

  if (callback) {
    for (let i = 1; i < array.length; i++) {
      if (callback(array[i - 1], array[i]) < 0) {
        continue;
      } else {
        for (let j = i - 1; j >= 0; j--) {
          let compareTarget = array[j + 1];
          // sort에서 콜백함수 결과가 -1이면 (음수) 앞이 크고, 1이면 뒤(양수)가 크다(오름차순)
          // 이게 디폴트 (즉, a-b<0이면 정렬이 안일어나고, "a-b>0이면 정렬이 일어남"@@@@@@)
          // a-b를 리턴하면 오름차순(디폴트), b-a를 리턴하면 내림차순 정렬(결과를 반대로)
          // ------------------------------------------------------------------------------------
          // 여기에서의 경우에는 내림차순 이므로 (결과가 반대이므로)
          // a-b>0 이면 정렬이 안일어나고, a-b<0이면 정렬이 일어아냐함
          // 테스트는 내림차순(b-a)이므로 b-a>0일 때 정렬이 일어나도록 해야함!!
          if (callback(array[j], compareTarget) > 0) {
            let temp = array[j];
            array[j] = compareTarget;
            array[j + 1] = temp;
          }
        }
      }
    }
  } else {
    // 디폴트(오름차순)
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1].value < array[i].value) {
        continue;
      } else {
        for (let j = i - 1; j >= 0; j--) {
          let compareTarget = array[j + 1]; // 비교타겟은 i와 같음
          if (array[j].value > compareTarget.value) {
            let temp = array[j];
            array[j] = compareTarget;
            array[j + 1] = temp;
          }
        }
      }
    }
  }
  return array;
};

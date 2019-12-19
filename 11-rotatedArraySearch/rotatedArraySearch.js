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

var rotatedArraySearch = function(rotated, target) {
  // 목표 시간복잡도 -> O(log n)
  // Your code here:
  // rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
  // 일단 로테이트되면 항상 맨 뒷놈보다 맨 앞놈이 클 수밖에 없다 (순서대로니까)
  if (rotated[0] === target) {
    // 맨 앞놈이 타겟과 같으면 맨 앞 인덱스 리턴
    return 0;
  } else {
    let dif = rotated[0] - target; // dif -> 2 -> 원래 로테이트 전 배열(0,1,"2",3,"4",5,6)에서 타겟값과 !!!!@인덱스 차이@!!!!!

    if (Math.abs(dif) > rotated.length) {
      // 인덱스 차이가 전체 배열 길이보다 길면 target 존재 하지 않음
      return null;
    }

    if (dif > 0) {
      // 양수이면 -> 로테이트된 배열이 아닌 구간(0,1,2,3) 에 존재한다 -> 즉, 가상의 0,1,2,3이 첫번째 ele 앞에 있다고 보고 앞으로 두번 이동 인덱스 0->-2 (-dif) + 전체 갯수만큼 이동(+7) -> 실제 인덱스
      return rotated.length - dif; // 7-2 = 5, (6-2+1)
    } else if (dif < 0) {
      // 음수이면 -> 로테이트된 배열 구간에 존재 한다 (4,5,6) -> 즉, 0에서 차이만큼 이동 0-> ~
      if (rotated[0] < rotated[1]) {
        // 로테이트된 갯수가 1개 이상임
        return -dif;
      } else {
        // 로테이트가 1개만 됬다 -> 즉, 로테이트된 배열의 맨 앞이 가장 큰 숫자임 -> 근데 target의 값이 더크다 (dif가 음수이다)
        return null; // -> 타겟 값 존재 하지 않음
      }
    }
  }
};

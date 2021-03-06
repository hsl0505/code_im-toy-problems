/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board = makeBoard(n)) {
  // 최종 도착 인덱스 지정
  let destinationIdx = [n - 1, n - 1];

  let result = 0;

  // 초기 시작 보드, 0,0 찍고 시작
  let initBoard = board;
  initBoard.togglePiece(0, 0);

  function recursion(size, recursionboard, curI = 0, curJ = 0) {
    let targetBoard = recursionboard;
    for (let i = 0; i < 4; i++) {
      // 위
      if (i === 0) {
        let temp = curI - 1;
        if (temp >= 0) {
          if (!targetBoard[temp][curJ]) {
            targetBoard[temp][curJ] = true;
            let newBoard = targetBoard.slice();
            recursion(size, newBoard, temp, curJ);
            targetBoard[temp][curJ] = false;
          }
        }
      }
      // 아래
      else if (i === 1) {
        let temp = curI + 1;
        if (temp < size) {
          if (!targetBoard[temp][curJ]) {
            if (temp === destinationIdx[0] && curJ === destinationIdx[1]) {
              result = result + 1;
            } else {
              targetBoard[temp][curJ] = true;
              let newBoard = targetBoard.slice();
              recursion(size, newBoard, temp, curJ);
              targetBoard[temp][curJ] = false;
            }
          }
        }
      }
      // 왼
      else if (i === 2) {
        let temp = curJ - 1;
        if (temp >= 0) {
          if (!targetBoard[curI][temp]) {
            targetBoard[curI][temp] = true;
            let newBoard = targetBoard.slice();
            recursion(size, newBoard, curI, temp);
            targetBoard[curI][temp] = false;
          }
        }
      }
      // 오
      else if (i === 3) {
        let temp = curJ + 1;
        if (temp < size) {
          if (!targetBoard[curI][temp]) {
            if (curI === destinationIdx[0] && temp === destinationIdx[1]) {
              result = result + 1;
            } else {
              targetBoard[curI][temp] = true;
              let newBoard = targetBoard.slice();
              recursion(size, newBoard, curI, temp);
              targetBoard[curI][temp] = false;
            }
          }
        }
      }
    }
  }

  // 리커젼 함수 실행
  recursion(n, initBoard);

  return result;
};

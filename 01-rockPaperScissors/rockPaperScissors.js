/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (arg = 3) {
  
}
  /*
  let result = [];  // 최종 결과를 담을 배열

  let rps = ["rock", "paper", "scissors"]; // rps 배열
  
  function Tree(value) {  // 트리구조로 만들꺼임
    this.value = value;
    this.children = [];
  }

  Tree.prototype.addchild = function(val) { // 트리구조를 만들기 위한 메소드
    this.children.push(new Tree(val))
  }

  let tree = new Tree();  // 초기 트리 설정

  function makeTree(target, num) {   // 트리를 만들어줌 -> 갯수만큼 트리 깊이가 깊어짐
    let count = num; // 3
    for (let i=0; i<rps.length; i=i+1) {
      target.addchild(rps[i])
      let newCount = count -1;
      let newTarget = target.children[i];
      if (newCount !==0) {
        makeTree(newTarget, newCount)
      }
    } 
  }

  makeTree(tree, arg)  // 갯수만큼 깊이를 가진 트리 생성

  let temp = [];  // 최종결과에 하나하나 들어갈 임시 배열
  let depthclear = arg;

  function recursion(target, num, temp) {  // 트리를 탐색하면서 temp 배열에 담아서 찍어낼 재귀함수, 초기 트리와 갯수, 임시 배열이 들어감
    let count = num; 
    
    for (let i=0; i<target.children.length; i=i+1) {  // 트리의 자식 배열을 for문을 통해 순회
      temp.push(target.children[i].value)  
      let newCount = count -1;            
      if (newCount !==0) {                 
        let newTarget = target.children[i]; 
        recursion(newTarget, newCount, temp) 
      }
      else if (newCount === 0 && temp[arg-1] !== "scissors") {  // 마지막은 잘됨
        result.push(temp.slice())
        temp.pop();                               
      }
      else if (newCount === 0 && temp[arg-1] === "scissors") {  // 마지막 for문에서 가위가 나오면
        // 일단 넣고
        result.push(temp.slice())
        // 3->2
        depthclear = depthclear -1;
        // [r,r,s]에서 -2에서 -1이면
        if (temp.slice(-depthclear,-depthclear+1)[0] === "scissors") {
          depthclear = depthclear+1;
        }
        function executePop() {
          for (let i=0; i<depthclear; i=i+1) {
            temp.pop()
          }
        }
        executePop();
        // 4일경우 해보자..
        // 뒤에서 2번째가 가위가 아니면 팝 2번, 가위이면 팝 3번이 필요 끝
        // 5일경우
        // 뒤에서 2번째가 가위가 아니면 팝 2번, 가위이고 뒤에서 3번째가 가위가 아니면 팝 3번 , 가위이면 팝 4번 끝
        // n일 경우
        // 뒤에서 2번째가 가위가 아니면 팝 2번, 가위이고 뒤에서 3번째가 가위가 아니면 팝 3번, 가위이고 뒤에서 4번째가 가위가 아니면 팝 4번, 가위이고.............
        // .... 뒤에서 n-2번째가 가위이면 팝 n-1번 끝 -> 이것도 리커젼이냐.... 
      }
      if (count === arg) {     // 맨 첫단계 for문의 첫번째 인자에 대해서 전부 실행하고 난 다음에 그다음 인자로 다시 시작하려면 temp 배열의 초기화가 필요 (count 3으로 다시시작상태이므로)
        temp = [];
      }
    }
  }

  recursion(tree,arg,temp)

  return result;
}
*/

  // TODO: your solution here
  
  /*
  let rps = ["rock", "paper", "scissors"];
  let result = [];
 
  function Node() {
    for(let i=0; i<rps.length; i=i+1) {
      this[rps[i]] = null;
    }
  }
  
  let first = new Node();

  function makeTree(num, target) { 
    if (num !== 1) {
      for (let key in target) {
        target[key] = new Node();
        let newtarget = target[key]
        let newnum = num -1;
        makeTree(newnum, newtarget)
      }
    }
  }

  makeTree(arg, first)
  
  let temp = [];
  

  function recursion(target) {
    let subkeys = Object.keys(target);  // [r, p ,s]
    let addTarget = subkeys[0];  // "r"

    temp.push(addTarget);  // ["r", ]

    if (target[addTarget] === null ) {
      result.push(temp)
      temp = [];
      delete target[addTarget]
      let newTarget = first;
      
      if (Object.keys(newTarget).length !== 0) {
        recursion(newTarget)
      }
      
    }
    else {
      let newTarget = target[addTarget]
      recursion(newTarget)
    }

    
   
  }
  
  recursion(first);


  return result;
} */



  /*
    let StartMaker = function(start) {
    this.start = start
    this.next = null;
  }

  let arr = [];
  for (let i=0; i<rps.length; i=i+1) {
    arr.push(new StartMaker(rps[i]));
  }
  
  StartMaker.prototype.add = function(num) {
    if(num !== 1) {
      for (let i=0; i<rps.length; i=i+1) {
        this.next = new StartMaker(rps[i])
        num = num -1;
        this.next.add(num)
      }
      
    }
  }

  for (let i=0; i<arr.length; i=i+1) {
    arr[i].add(value)
  }
  
  let result = [];
  

  function getArr(target, value) {
    let temp =[];
    for(let i=0; i<target.length; i=i+1) {
      temp.push(target[i].start)
      if (value !== 1) {
        target = targer.next
        value = value -1;
        getArr(target, value)
      }
      else if (value === 1) {
        result.push(temp)
      }
    }

  }


  return result;
  // math random을 써보려고 했지만... 이건 너무 비효율적인 방식이다... 
  /*
  let rps = ["rock", "paper", "scissors"];
  
  let result = [];

  function maker(value) {
    let arr = [];
    rps.sort(function(a,b) {
      return Math.random() - 0.5;
    })

    for (let i=0; i<value; i=i+1) {
      arr.push(rps[0])
    }

    if (result.length !== Math.pow(value, 3)) {
      if (!(result.includes(arr))) {
        result.push(arr)
        maker(value)
      }
      else {
        maker(value)
      }
    }
    
  }
  maker(value)
  
  return result;
  */


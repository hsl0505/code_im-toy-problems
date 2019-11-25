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
  let result = [];

  let rps = ["rock", "paper", "scissors"];
  
  let temp = [];

  function recursion(target) {
    for (let i=0; i<rps.length; i=i+1) {
      temp.push(rps[i])
    }
  }





  return result;
}

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


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
  let rps = ["rock", "paper", "scissors"];
  // 아 잘안되네....
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

  function recursion(num, target) {  // 3, first
    if (num !== 1) {
      for (let key in target) {
        target[key] = new Node();
        let newtarget = target[key]
        let newnum = num -1;
        recursion(newnum, newtarget)
      }
    }
  }

  recursion(arg, first)
  console.log(first)

  let temp = [];
  let realnum = arg;

  function changeArr(target, num) {
    
    let aaa = Object.keys(target);
    for (let i=0; i<aaa.length; i=i+1) { 
      
      temp.push(aaa[i])
      let newtarget = target[aaa[i]];
      let newnum = num - 1;

      if (newnum !== 0) {
        changeArr(newtarget, newnum)
      }
      else {
        let test = temp.splice(0,realnum);

        result.push(test)
       
        if (test.length === realnum) {
          for (let i=0; i<realnum-2; i=i+1) {
            temp.push(test[i])
            console.log(temp)
          }  
        }
        else {
            temp.push(test[0])
        }
      }
    } 
  }
  
  changeArr(first, arg)
  return result;
}
*/


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


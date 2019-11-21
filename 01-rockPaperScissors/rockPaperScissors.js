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

var rockPaperScissors = function (value) {
  // TODO: your solution here
  
  
  
  
  let result = [];
  
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
};

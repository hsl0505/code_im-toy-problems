/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  

  let splitArr = [];
  for (let i=1; i<arguments.length; i=i+1) {
    splitArr.push(arguments[i].split(' ').join('').split(''))
  }

  let result = [];

  for (let i=0; i<arguments[0].length; i=i+1) {
    let count = 0;
    for (let j=0; j<splitArr.length; j=j+1) {
      if ((splitArr[j].includes(arguments[0][i])) && !(result.includes(arguments[0][i]))) {
        count++;
      }
      if (count === arguments.length -1) {
        result.push(arguments[0][i])
      }
    }
  }
  
  return result.join('')
  
  /*
  for (let i=0; i<string1.length; i=i+1) {
    if (arrSting2.includes(string1[i])) {
      result.push(string1[i])
    }
  }
  */
};

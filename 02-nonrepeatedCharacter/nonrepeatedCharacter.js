/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  if (string === '') {
    return null
  }

  let temp = string.split('');
  
  function recursion(target) {
    let first = target.splice(0,1)[0];
    
    for (let i=0; i<target.length; i=i+1) {
      if (first === target[i]) {
        target[i] = null;
      }
    }
    
    if (!(target.includes(null))) {
      return first
    }

    let newArr = [];
    for (let i=0; i<target.length; i=i+1) {
      if (target[i] !== null) {
        newArr.push(target[i])
      }
    }

    if (newArr.length === 0) {
      return null
    }
    
    let newtarget = newArr;
    return recursion(newtarget)
  }
  
  return recursion(temp)

  
};

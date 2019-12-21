/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  let splitStr = input.split("");
  let small = splitStr.filter(ele => ele === "(");
  let smallRev = splitStr.filter(ele => ele === ")");
  // if (small.length === 0 && smallRev.length === 0) {
  //     return true
  // }
  if (small.length !== smallRev.length) {
    return false;
  } else {
    let smallArr = splitStr.filter(ele => ele === "(" || ele === ")");
  }
  // [(]{)} 이게 문제임
  function isBalanceSmall(target, count) {
    let temp = target.join("").split("()");
    let temp2 = temp.filter(ele => ele !== "()");
    let newCount = count - 1;
    if (count !== 0) {
      let newTarget = temp2;
      return isBalanceSmall(newTarget, newCount);
    } else {
      if (temp2.length !== 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  let midlle = splitStr.filter(ele => ele === "{");
  let large = splitStr.filter(ele => ele === "[");
};

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
  //   let splitInput = input.split("");

  function calculator(inputstr) {
    if (input === "") {
      return true;
    }
    let leftCount = 0;
    let rightCount = 0;
    for (let i = 0; i < inputstr.length; i++) {
      if (inputstr[i] === "(") {
        leftCount = leftCount + 1;
      } else if (inputstr[i] === ")") {
        rightCount = rightCount + 1;
      }
    }
    if (leftCount === 0 && rightCount === 0) {
      return true;
    }
    if (leftCount !== rightCount) {
      return false;
    } else {
      let leftIndex = inputstr.indexOf("(");
      let rightIndex = inputstr.lastIndexOf(")");
      if (leftIndex > rightIndex) {
        return false;
      }
      inputstr.splice(leftIndex, 1);
      inputstr.splice(rightIndex, 1);
      calculator(inputstr);
    }
  }

  return calculator(input);
};

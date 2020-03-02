/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
  let splitStr = string.split(" ");
  let reverseWord = splitStr.map(ele => {
    let temp = "";
    for (let i = ele.length - 1; i >= 0; i--) {
      temp = temp + ele[i];
    }
    return temp;
  });

  let temp2 = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === reverseWord[i]) {
      if (i === 0 || i === splitStr.length - 1) {
        temp2.push({
          addSpace: false,
          isSame: true,
          target: splitStr[i]
        });
      } else {
        temp2.push({
          addSpace: true,
          isSame: true,
          target: splitStr[i]
        });
      }
    } else {
      temp2.push({
        isSame: false,
        target: splitStr[i]
      });
    }
  }

  function recursion(arr, count = 1) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isSame) {
        if (arr[i].addSpace) {
          if (
            arr[i - 1].target[arr[i - 1].target.length - count] ===
            arr[i + 1].target[count - 1]
          ) {
            arr[i].target =
              arr[i - 1].target[arr[i - 1].target.length - count] +
              " " +
              arr[i].target +
              " " +
              arr[i + 1].target[count - 1];
            arr[i].isAdd = true;
            let newCount = count + 1;
            recursion(arr, newCount);
          }
        }
      }
    }
  }

  recursion(temp2);

  let resultArr = [];

  for (let i = 0; i < temp2.length; i++) {
    if (temp2[i].isSame) {
      if (temp2[i].isAdd) {
        resultArr.push(temp2[i].target);
      } else {
        if (temp2[i].addSpace) {
          resultArr.push(` ${temp2[i].target} `);
        } else {
          resultArr.push(temp2[i].target);
        }
      }
    }
  }

  if (!resultArr.length) {
    return "";
  }

  let sortArr = resultArr.sort((a, b) => b.length - a.length);

  return sortArr[0];
};

/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(string) {
  // 중복 제거
  let strResult = [];
  function deleteSame(string) {
    let splitStr = string.split("");
    // let result = [];
    let first = splitStr[0];
    strResult.push(first);
    let temp = splitStr.slice(1);
    if (temp.length !== 0) {
      let newTemp = temp.filter(ele => ele !== first);
      if (newTemp.length !== 0) {
        return deleteSame(newTemp.join(""));
      } else {
        return strResult.join("");
      }
    } else {
      return strResult.join("");
    }
  }

  let newString = deleteSame(string);

  // 멱집합을 찾아라
  let result = [""];
  let count = newString.length;
  let str = newString.split("");

  function recursion(num, arr, target, depth) {
    for (let i = 0; i < target.length; i++) {
      arr[depth - num] = target[i];
      result.push(arr.slice().join(""));

      let newCount = num - 1;

      if (newCount !== 0) {
        let newTarget = target.slice(target.indexOf(target[i]) + 1);
        if (newTarget.length !== 0) {
          recursion(newCount, arr.slice(), newTarget, depth);
        }
      }
    }
  }

  recursion(count, [], str, count);
  return result;
};
// function recursion(str, count) {
//   if (count === 0) {
//     result.push("");
//     let newCount = count + 1;
//     recursion(str, newCount);
//   } else {
//     // 카운트가 1일 때, 카운트 만큼 for루프? // 카운트가 2일 때 .........
//     let init = "";
//     forloop(init, str, count, deleteSame);
//     // for (let i = 0; i < str.length; i++) {
//     //   init = init + str[i];
//     //   if (init.length === count && deleteSame(init)) {
//     //     result.push(init);
//     //     init = "";
//     //   } else {
//     //     for (let i = 0; i < str.length; i++) {
//     //       init = init + str[i];
//     //       if (init.length === count && deleteSame(init)) {
//     //         result.push(init);
//     //         init = "";
//     //       }
//     //     }
//     //   }
//     if (count !== str.length) {
//       let newCount = count + 1;
//       recursion(str, newCount);
//     }
//   }
// }

// // 중복제거 헬퍼함수
// function deleteSame(target) {
//   if (target.length === 1) {
//     return true;
//   }
//   let first = target[0];
//   for (let i = 1; i < target.length; i++) {
//     if (target[i] === first) {
//       return false;
//     }
//   }
//   let newTarget = target.slice(1);
//   if (newTarget.length === 1) {
//     return true;
//   } else {
//     return deleteSame(newTarget);
//   }
// }

// // for루프 돌기 헬퍼함수
// function forloop(inittarget, str, count, cb) {
//   console.log(result);
//   let newinit = inittarget;
//   for (let i = 0; i < str.length; i++) {
//     console.log(newinit);
//     debugger;
//     newinit = newinit + str[i];
//     if (newinit.length === count) {
//       if (cb(newinit)) {
//         result.push(newinit);
//         newinit = inittarget;
//       } else {
//         newinit = inittarget;
//       }
//     } else {
//       forloop(newinit, str, count, cb);
//     }
//   }
//   return;
// }

// recursion(str, count);

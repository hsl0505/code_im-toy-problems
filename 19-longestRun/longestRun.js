/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
  // TODO: Your code here!
  if (string === "") {
    return [0, 0];
  }

  let arr = [];

  let obj = {
    char: "",
    count: 0
  };

  for (let i = 0; i < string.length; i++) {
    obj.char = string[i];
    obj.count = obj.count + 1;
    if (string[i] !== string[i + 1]) {
      arr.push(obj);
      obj = {
        char: "",
        count: 0
      };
    }
  }

  let nums = [];

  for (let i = 0; i < arr.length; i++) {
    nums.push(arr[i]["count"]);
  }

  let maxNum = Math.max.apply(null, nums);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["count"] === maxNum) {
      return [
        string.indexOf(arr[i]["char"]),
        string.lastIndexOf(arr[i]["char"])
      ];
    }
  }
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

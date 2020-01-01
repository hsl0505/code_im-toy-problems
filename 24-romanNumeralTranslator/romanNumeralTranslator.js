/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral !== "string") {
    return null;
  }

  if (romanNumeral === "") {
    return 0;
  }

  let keys = Object.keys(DIGIT_VALUES);
  let splitStr = romanNumeral.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (!keys.includes(splitStr[i])) {
      return null;
    }
  }

  let translateStr = splitStr.map(ele => DIGIT_VALUES[ele]);

  for (let i = 0; i < translateStr.length; i++) {
    if (translateStr[i] < translateStr[i + 1]) {
      translateStr[i] = translateStr[i] * -1;
    }
  }

  // console.log(translateStr);
  return translateStr.reduce((acc, cur) => acc + cur);
};

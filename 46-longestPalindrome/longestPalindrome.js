/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
  // 단어별로 쪼개기
  let splitStr = string.split(" ");
  // 각 단어 거꾸로 만들기
  let reverseWord = splitStr.map(ele => {
    let temp = "";
    for (let i = ele.length - 1; i >= 0; i--) {
      temp = temp + ele[i];
    }
    return temp;
  });

  let temp2 = [];

  for (let i = 0; i < splitStr.length; i++) {
    // 거꾸로 된 단어와 원래 단어가 같으면 isSame : true
    if (splitStr[i] === reverseWord[i]) {
      // 맨 앞이거나 맨 뒤면, space 고려 x addSpace : false
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
      // 같지 않으면 isSame : false
      temp2.push({
        isSame: false,
        target: splitStr[i]
      });
    }
  }

  // 재귀함수
  // 회문인 단어 중에 앞뒤 단어에서 회문 추가 있는지 탐색
  // 있으면 각각 추가하고 다시 재귀로 들어가서 또 있는지 봄
  // 추가된것은 isAdd : true 구분
  function recursion(arr, count = 1) {
    for (let i = 0; i < arr.length; i++) {
      // 일단 회문 단어인가
      if (arr[i].isSame) {
        // 회문 단어이면, 앞뒤 공백도 추가되는가
        if (arr[i].addSpace) {
          // 공백 추가하고, 앞뒤 단어중에 회문으로 추가되는 글자가 있는가
          if (
            arr[i - 1].target[arr[i - 1].target.length - count] ===
            arr[i + 1].target[count - 1]
          ) {
            // 있으면 그 단어들을 추가한다 (공백당연히 포함)
            arr[i].target =
              arr[i - 1].target[arr[i - 1].target.length - count] +
              " " +
              arr[i].target +
              " " +
              arr[i + 1].target[count - 1];
            // 추가된 단어인것을 표시
            arr[i].isAdd = true;
            // 카운트 늘려서 재귀
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
    // 회문단어인가
    if (temp2[i].isSame) {
      // 회문단어 추가된것인가
      if (temp2[i].isAdd) {
        // 맞으면 그대로 넣기
        resultArr.push(temp2[i].target);
      } else {
        // 아니면, 공백만 추가 단어인가
        if (temp2[i].addSpace) {
          // 맞으면 공백추가
          resultArr.push(` ${temp2[i].target} `);
        } else {
          // 아니면 단어 그대로 들어감
          resultArr.push(temp2[i].target);
        }
      }
    }
  }

  // 회문단어가 없으면 빈배열로 나옴
  if (!resultArr.length) {
    return "";
  }

  // 최종 회문단어들 중에 제일 긴순으로 솔팅

  let sortArr = resultArr.sort((a, b) => b.length - a.length);

  // 제일 긴것 리턴
  return sortArr[0];
};

/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  let one = JSON.stringify(apple);
  let two = JSON.stringify(orange);
  if (one === two) {         // 스트링화해서 비교해서 같으면 바로 트루 반환
    return true
  }
  else {                    // 바로 같지 않으면 키값쌍을 각 각 스트링화 해서 각 배열에 담는다.
    let oneTemp = [];
    for(let key in apple) {
      let temp = JSON.stringify(key) + ":" + JSON.stringify(apple[key])
      oneTemp.push(temp) 
    }

    let twoTemp = [];
    for(let key in orange) {
      let temp = JSON.stringify(key) + ":" + JSON.stringify(orange[key])
      twoTemp.push(temp) 
    }
    if (oneTemp.length !== twoTemp.length) {  // 이때 그 두 배열이 크기 다르면 무조건 같지 않으니까 폴스 반환
      return false
    }

    for(let i=0; i<oneTemp.length; i++) {   // 배열 크기가 같으면 서로의 키 값쌍이 있는지 서로 확인 (원래는 그 밑도 또 다시 키 값쌍 순서가 달라서 다를수도 있는데.. 위에 걱정하지말라했으므로)
      if (!twoTemp.includes(oneTemp[i])) {
        return false         // 포함 안되어 있으면 폴스 반환
      }
    }
    return true  // 다 포함되어있으면 트루 반환
  }
};

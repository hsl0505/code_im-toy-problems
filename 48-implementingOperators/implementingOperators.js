// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

var multiply = function(x, y) {
  // TODO: should return the product of x * y
  if (Number.isInteger(x) && Number.isInteger(y)) {
    // 둘다 정수인 경우, (음수까지 고려)
    let init = 0;
    let absX = Math.abs(x);
    let absY = Math.abs(y);
    for (let i = 1; i <= absY; i++) {
      init = init + absX;
    }
    if (x > 0 && y > 0) {
      return Number(init.toFixed(3));
    } else if (x < 0 && y > 0) {
      return Number((init * -1).toFixed(3));
    } else if (x > 0 && y < 0) {
      return Number((init * -1).toFixed(3));
    } else {
      return Number(init.toFixed(3));
    }
  } else if (!Number.isInteger(x) && Number.isInteger(y)) {
    // x가 소수 인 경우, 그냥하면되고, y가 소수이면 자리만 바꿔주면될듯
    let init = 0;
    let absX = Math.abs(x);
    let absY = Math.abs(y);
    for (let i = 1; i <= absY; i++) {
      init = init + absX;
    }
    if (x > 0 && y > 0) {
      return Number(init.toFixed(3));
    } else if (x < 0 && y > 0) {
      return Number((init * -1).toFixed(3));
    } else if (x > 0 && y < 0) {
      return Number((init * -1).toFixed(3));
    } else {
      return Number(init.toFixed(3));
    }
  } else if (Number.isInteger(x) && !Number.isInteger(y)) {
    let init = 0;
    let absX = Math.abs(y);
    let absY = Math.abs(x);
    for (let i = 1; i <= absY; i++) {
      init = init + absX;
    }
    if (x > 0 && y > 0) {
      return Number(init.toFixed(3));
    } else if (x < 0 && y > 0) {
      return Number((init * -1).toFixed(3));
    } else if (x > 0 && y < 0) {
      return Number((init * -1).toFixed(3));
    } else {
      return Number(init.toFixed(3));
    }
  } else {
    // 둘다 소수일 경우,
    // x,y의 소수점 자릿수 계산 (지수표기법 때문에 이렇게..)
    let expX = x.toExponential();
    let decimalX;
    if (expX.indexOf(".") === -1) {
      decimalX = Number(expX[expX.length - 1]);
    } else {
      decimalX =
        expX.slice(2, expX.lastIndexOf("e")).length +
        Number(expX[expX.length - 1]);
    }

    let expY = y.toExponential();
    let decimalY;
    if (expY.indexOf(".") === -1) {
      decimalY = Number(expY[expY.length - 1]);
    } else {
      decimalY =
        expY.slice(2, expY.lastIndexOf("e")).length +
        Number(expY[expY.length - 1]);
    }
    // 소수 총 자릿수
    let decimal = decimalX + decimalY;

    // 소수를 정수로 만들어주기 위해
    function makeTen(num) {
      let result = "1";
      for (let i = 1; i <= num; i++) {
        result = result + "0";
      }
      return Number(result);
    }

    // x 정수화
    let beforeX = multiply(Math.abs(x), makeTen(decimalX));
    // y 정수화
    let beforeY = multiply(Math.abs(y), makeTen(decimalY));
    // 정수끼리 곱하기
    let beforeResult = String(multiply(beforeX, beforeY));

    let result;

    // 소수자릿수 적용
    if (beforeResult.length > decimal) {
      result = Number(
        beforeResult.slice(0, -decimal) + "." + beforeResult.slice(-decimal)
      );
    } else if (beforeResult.length === decimal) {
      result = Number("0." + beforeResult);
    } else {
      let temp = "";
      for (let i = 1; i <= decimal - beforeResult.length; i++) {
        temp = temp + "0";
      }
      result = Number("0." + temp + beforeResult);
    }

    // 양/음수 적용
    if (x > 0 && y > 0) {
      return Number(result.toFixed(3));
    } else if (x < 0 && y > 0) {
      return Number((result * -1).toFixed(3));
    } else if (x > 0 && y < 0) {
      return Number((result * -1).toFixed(3));
    } else {
      return Number(result.toFixed(3));
    }
  }
};

var divide = function(x, y) {
  // TODO: should return the product of x * y
  // 분자가 0이면 결과는 0
  if (x === 0) {
    return 0;
  }

  let absX = Math.abs(x);
  let absY = Math.abs(y);

  let result;

  // 분자 분모가 같으면 1 또는 -1
  if (absX === absY) {
    if (x > 0 && y > 0) {
      return 1;
    } else if (x < 0 && y > 0) {
      return -1;
    } else if (x > 0 && y < 0) {
      return -1;
    } else {
      return 1;
    }
  } else if (absX < absY) {
    // 분모가 분자보다 더 크면 무조건 1보다 작은 소수이고, 소수 3자리수 까지 구한다
    let count = 0;
    // 분자에 1000을 곱하고
    let init = multiply(absX, 1000);
    // 분모보다 작을때까지 빼고 몫을 +1씩해준다
    while (init >= absY) {
      init = init - absY;
      count = count + 1;
    }
    // 나온 몫으로 소수 3자리까지 표현해줌
    result = Number("0." + String(count));
  } else {
    // 분자가 분모보다 더 큰 경우, 정수부분이 있기 때문에
    let front = 0;
    let init = absX;
    // 정수인 몫을 구해준다
    while (init >= absY) {
      init = init - absY;
      front = front + 1;
    }
    // 나머지가 분모보다 작아진 경우에는 위의, 분모가 분자보다 더 큰 경우이므로 따로 구해줌
    let back = divide(init, absY);
    // 정수부분과 소수부분을 더해줌
    result = front + back;
  }

  // 양/음수 적용
  if (x > 0 && y > 0) {
    return result;
  } else if (x < 0 && y > 0) {
    return -result;
  } else if (x > 0 && y < 0) {
    return -result;
  } else {
    return result;
  }
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  // 분자가 0이면 무조건 0임
  if (x === 0) {
    return 0;
  }
  let absX = Math.abs(x);
  let absY = Math.abs(y);

  let result;

  // 두 값이 같으면 나머지는 0
  if (absX === absY) {
    return 0;
  } else if (absX < absY) {
    // 분모가 더 크면 나머지는 무조건 분자
    result = absX;
  } else {
    // 분자가 더 크면 계속 빼서 분모보다 작아지면 그때가 나머지
    let init = absX;
    while (init >= absY) {
      init = init - absY;
    }
    result = init;
  }

  // 분자에 따라 양/음수 적용
  if (x > 0) {
    return result;
  } else if (x < 0) {
    return -result;
  }
};

// TODO: should return the remainder of x / y

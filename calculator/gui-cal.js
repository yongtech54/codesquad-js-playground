// input 객체 관련 속성 및 메소드
var input = {};
input.array = [];

input.clickNumbers = function (event) {
  var inputNumber = event.target.innerHTML;
  this.array.push(inputNumber);
};

input.clickOperator = function (event) {
  var inputOperator = " " + event.target.innerHTML + " ";
  this.array.push(inputOperator);
};

input.prepareCalculate = function () {
  this.array = this.array.join("").split(" ");
};

input.isEmpty = function () {
  return this.array.length;
};


var calculator = {};

calculator.getNumber = function () {
  var value = Number(input.array.shift());
  return value;
};

calculator.getOperator = function () {
  var value = input.array.shift();
  return value;
}

calculator.calculate = function (res, op, nextNumber) {
  switch (op) {
    case "+":
      res += nextNumber;
      break;
    case "-":
      res -= nextNumber;
      break;
    case "*":
      res *= nextNumber;
      break;
    case "/":
      res /= nextNumber;
      break;
  }
  return res;
}
var removeValue = function () {
  console.log("remove!");
};

var runCalculator = function () {
  // 입력값 배열 정리
  input.prepareCalculate();

  // 초기값 초기화
  var res = calculator.getNumber();

  // 그 외의 변수들 선언
  var op, nextNumber;

  while (input.isEmpty()) {
    op = calculator.getOperator();
    nextNumber = calculator.getNumber();
    res = calculator.calculate(res, op, nextNumber);
  }
  console.log(">>> " + res);
};
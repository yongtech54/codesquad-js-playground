// input 객체 관련 속성 및 메소드 - 완료
var input = {};
input.array = [];

input.clickNumbers = function (event) {
  var inputNumber = event.target.innerHTML;
  this.array.push(inputNumber);
  output.display();
};

input.clickOperator = function (event) {
  var inputOperator = " " + event.target.innerHTML + " ";
  this.array.push(inputOperator);
  output.display();
};

input.prepareCalculate = function () {
  this.array = this.array.join("").split(" ");
};

input.isEmpty = function () {
  return this.array.length;
};

input.removeValue = function () {
  this.array.pop();
  output.display();
};

// calculator 객체 관련 속성 및 메소드 - 완료
var calculator = {};
calculator.getNumber = function () {
  var value = Number(input.array.shift());
  return value;
};
calculator.getOperator = function () {
  var value = input.array.shift();
  return value;
};
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
};


var output = {};
output.display = function () {
  var result = document.getElementById("result");
  result.innerHTML = input.array.join("");

  if (input.array.length === 0) {
    result.innerHTML = "EMPTY";
  }
}

output.print = function (res) {
  var result = document.getElementById("result");
  result.innerHTML = res;
}

// main logic
var runCalculator = function () {
  input.prepareCalculate();
  var res = calculator.getNumber();
  var op, nextNumber;

  while (input.isEmpty()) {
    op = calculator.getOperator();
    nextNumber = calculator.getNumber();
    res = calculator.calculate(res, op, nextNumber);
  }

  output.print(res);
};
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
  return this.array.join("").split(" ");
}

var removeValue = function () {
  console.log("remove!");
};

var runCalculator = function () {
  var values = input.prepareCalculate();
  console.log(values);
};


var targetWord = document.getElementById('word').innerHTML;
var targetWordArray = targetWord.split('');
var puzzle = document.getElementById('puzzle');
var btns = [];

// 버튼 초기화
for (var i = 0; i < targetWord.length; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = targetWord[i];
  puzzle.appendChild(btn);
  btns.push(btn);
}

var resort = function () {
  for (var i = 0; i < targetWordArray.length; i++) {
    btns[i].innerHTML = targetWordArray[i];
  }
};

// reverse()
var reverse = function () {
  var n = targetWordArray.length;
  var temp;

  for (var i = 0; i < n; i++) {
    if (i === (n - 1 - i)) {
      break;
    }
    temp = targetWordArray[i];
    targetWordArray[i] = targetWordArray[n - 1 - i];
    targetWordArray[n - 1 - i] = temp;
  }
  resort();
  checkResult();
};

// shiftRight()
var shiftRight = function () {
  var targetChar = targetWordArray.pop();
  targetWordArray.unshift(targetChar);

  resort();
  checkResult();
};

// shiftLeft()
var shiftLeft = function () {
  var targetChar = targetWordArray.shift();
  targetWordArray.push(targetChar);

  resort();
  checkResult();
};

// checkResult()
var checkResult = function () {
  var result = document.getElementById('result');
  if (targetWord === targetWordArray.join('')) {
    result.innerHTML = "Result >> 일치합니다!";
  } else {
    result.innerHTML = "Result >> 일치하지않습니다!";
  }
};
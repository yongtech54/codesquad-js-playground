var words = "Java,JavaScript,HTML,CSS,Python,Kotlin,Spring,Android,Backend,Programmer".split(',');

// words: 10개 (idx: 0~9)
var idx = Math.floor(Math.random() * words.length);
var targetWord = words[idx];

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

// shuffle()
var shuffle = function () {
  var n = targetWordArray.length;
  var randomN = Math.floor(Math.random() * n);

  for (var i = 0; i < randomN; i++) {
    shiftRight();
  }
};

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
    if (i === Math.floor(n / 2)) {
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
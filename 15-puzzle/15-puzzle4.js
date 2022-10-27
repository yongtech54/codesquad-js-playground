// html elements
var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var check = document.getElementById('check');

// game object
var game = { 'btns': [] };

game.words = 'JavaScript,Java,HTML,CSS,React,Spring,Kotlin,MySQL,Programming,Code'.split(',');

game.choose = function () {
  var idx = Math.floor(Math.random() * this.words.length);
  this.targetWord = this.words[idx];
  this.targetWordArray = this.targetWord.split('');
  word1.innerHTML = this.targetWord;
};

game.addButtons = function () {
  for (var i = 0; i < this.targetWordArray.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = this.targetWord[i];
    word2.appendChild(btn);
    this.btns.push(btn);
  }
};

game.display = function () {
  if (this.targetWord === this.targetWordArray.join('')) {
    check.innerHTML = '일치합니다!';
  } else {
    check.innerHTML = '일치하지않습니다!';
  }
};

game.init = function () {
  this.choose();
  this.addButtons();
  shuffle();
  this.display();
};

game.changeButtons = function () {
  for (var i = 0; i < game.targetWordArray.length; i++) {
    game.btns[i].innerHTML = game.targetWordArray[i];
  }
};

var shiftRight = function () {
  var lastValue = game.targetWordArray.pop();
  game.targetWordArray.unshift(lastValue);
  game.changeButtons();
  game.display();
};

var shiftLeft = function () {
  var lastValue = game.targetWordArray.shift();
  game.targetWordArray.push(lastValue);
  game.changeButtons();
  game.display();
};

var swap = function () {
  var temp;
  var n = game.targetWordArray.length;
  for (var i = 0; i < Math.floor(n / 2); i++) {
    temp = game.targetWordArray[i];
    game.targetWordArray[i] = game.targetWordArray[n - 1 - i];
    game.targetWordArray[n - 1 - i] = temp;
  }
  game.changeButtons();
  game.display();
};

var shuffle = function () {
  var toggle = Math.floor(Math.random() * 2) === 0;
  if (toggle) {
    swap();
  }
  var n = Math.floor(Math.random() * game.targetWordArray.length);
  for (var i = 0; i < n; i++) {
    shiftRight();
  }
};

// main
game.init();
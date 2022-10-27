// html elements
var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var check = document.getElementById('check');
var progress = document.getElementById('progress');
var time = document.getElementById('time');

// game object
var game = {
  'btns': [],
  'point': 0,
  'gameCount': 3
};
game.startTime = Date.now();
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

game.removeAll = function () {
  for (var i = 0; i < this.btns.length; i++) {
    word2.removeChild(this.btns[i]);
  }
  this.btns = [];
};

game.isCorrect = function () {
  return this.targetWord === this.targetWordArray.join('');
};

game.checkPoint = function () {
  if (this.isCorrect()) {
    this.point++;
    this.removeAll();
    this.init();
    var str = '';
    for (var i = 0; i < this.point; i++) {
      str += 'O';
    }
    progress.innerHTML = "Your score >> " + str;
  }

  if (this.point === this.gameCount) {
    var yourTime = (Date.now() - startTime) / 1000;
    alert('clear! Your record ... ' + yourTime + 'sec');
    clearInterval(startGame);
    progress.innerHTML = 'ALL CLEAR';
    this.point = 0;
  }
};

game.display = function () {
  if (this.isCorrect()) {
    check.innerHTML = '일치합니다!';
  } else {
    check.innerHTML = '일치하지않습니다!';
  }
};

game.changeButtons = function () {
  for (var i = 0; i < this.targetWordArray.length; i++) {
    this.btns[i].innerHTML = this.targetWordArray[i];
  }
};

game.shiftRight = function () {
  var lastValue = this.targetWordArray.pop();
  this.targetWordArray.unshift(lastValue);
  this.changeButtons();
  this.display();
};

var shiftRight = function () {
  game.shiftRight();
  game.checkPoint();
}

game.shiftLeft = function () {
  var lastValue = this.targetWordArray.shift();
  this.targetWordArray.push(lastValue);
  this.changeButtons();
  this.display();
};

var shiftLeft = function () {
  game.shiftLeft();
  game.checkPoint();

};

game.swap = function () {
  var temp;
  var n = this.targetWordArray.length;
  for (var i = 0; i < Math.floor(n / 2); i++) {
    temp = this.targetWordArray[i];
    this.targetWordArray[i] = this.targetWordArray[n - 1 - i];
    this.targetWordArray[n - 1 - i] = temp;
  }
  this.changeButtons();
  this.display();
};

var swap = function () {
  game.swap();
  game.checkPoint();
};

game.shuffle = function () {
  var toggle = Math.floor(Math.random() * 2) === 0;
  if (toggle) {
    this.swap();
  }

  var max = Math.max(1, this.targetWordArray.length - 2);
  var n = Math.floor(Math.random() * max) + 1;

  for (var i = 0; i < n; i++) {
    this.shiftRight();
  }
};
game.timeout = function () {
  return Date.now();
}
game.init = function () {
  this.choose();
  this.addButtons();
  this.shuffle();
  this.display();
};

game.countTime = function () {
  time.innerHTML = "Time >>  " + (Date.now() - game.startTime) / 1000;
}


// main
var startGame = setInterval(game.countTime, 20);
game.init();
var targetWord = document.getElementById("word").innerHTML;
var puzzle = document.getElementById("puzzle");

for (var i = 0; i < targetWord.length; i++) {
  var btn = document.createElement("button");
  btn.innerHTML = targetWord[i];
  puzzle.appendChild(btn);
}

var reverse = function (event) {
  console.log("reverse");
};

var shift = function (event) {
  console.log("shift!");
};
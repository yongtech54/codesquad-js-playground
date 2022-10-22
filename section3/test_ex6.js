console.log("연결 확인");

var p = document.createElement('p');
p.innerHTML = "js로 만든 태그";

var context = document.getElementById("context");
context.appendChild(p);
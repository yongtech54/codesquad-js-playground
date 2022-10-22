function checkOrder() {
  var choice = document.getElementById("order").value;
  console.log(choice + "을(를) 주문합니다");
};

console.log("ex7 링크 확인");

var menu = document.createElement("ul");
var menu1 = document.createElement("li");
var menu2 = document.createElement("li");
var menu3 = document.createElement("li");
var menu4 = document.createElement("li");

menu1.innerHTML = "한식";
menu2.innerHTML = "일식";
menu3.innerHTML = "중식";
menu4.innerHTML = "양식";

menu1.style.color = "blue";
menu2.style.color = "red";
menu3.style.color = "green";
menu4.style.color = "orange";

menu.appendChild(menu1);
menu.appendChild(menu2);
menu.appendChild(menu3);
menu.appendChild(menu4);

var context = document.getElementById("context");
var order = document.createElement("input");
order.type = "text";
order.id = "order";
order.placeholder = "메뉴 입력";

context.appendChild(menu);

var btn = document.createElement("button");
btn.innerHTML = "메뉴 선택";

btn.onclick = checkOrder;

context.appendChild(order);
context.appendChild(btn);
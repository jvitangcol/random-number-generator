const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

let result;

myButton.onclick = function () {
  result = Math.floor(Math.random() * 10) + 1;
  myLabel.textContent = result;
};

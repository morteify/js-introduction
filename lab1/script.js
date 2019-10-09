function changeColor(elem) {
  elem.classList.toggle("yellow");
}

function appendClassName(elem, name) {
  elem.classList.add(name);
}

const button = document.querySelector("#actionButton");
const box = document.querySelector("#box");
const counterButton = document.querySelector("#counterButton");

button.addEventListener("click", () => {
  changeColor(box);
});

function count(num) {
  return [...Array(num).keys()].map(item => item + 1);
}
const numbers = count(10);
console.log(numbers);

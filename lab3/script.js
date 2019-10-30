const canvas = document.querySelector("#canvas");
const circleBtn = document.querySelector("#circleBtn");

const canvasConfig = {
  x: canvas.style.left,
  y: canvas.style.top
};

circleBtn.addEventListener("click", insertCircle);

function insertCircle() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("red-circle");
  canvas.appendChild(newDiv);
}

canvas.addEventListener("touchmove", onCanvasTouchMove);

function getTouchPosition(event) {
  const targetTouches = event.targetTouches[0];
  const positionX = targetTouches.screenX;
  const positionY = targetTouches.screenY;
  const position = { x: positionX, y: positionY };
  return position;
}

function insertAtPosition(target, position, elem) {
  elem.classList.add("red-circle");
  elem.style.position = "absolute";
  elem.style.left = `${position.x}px`;
  elem.style.top = `${position.y - 120}px`;
  console.log(canvasConfig);
  target.appendChild(elem);
}

function onCanvasTouchMove(event) {
  const position = getTouchPosition(event);
  console.log(position);
  const elem = document.createElement("div");
  insertAtPosition(canvas, position, elem);
}

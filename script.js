const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("color");
const sizeSlider = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");

const pencilBtn = document.getElementById("pencilBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("claerBtn");
const saveBtn = document.getElementById("saveBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

canvas.width = 1000;
canvas.height = 600;

let drawing = false;
let brushColor = "#000000";
let brushSize = 5;

let history = [];
let redoHistory = [];

function saveState() {
  history.push(canvas.toDateURL()):
  if (history.length >30) {
    history.shift();
  }
  redoHistory = [];
}
saveState();

function  getMousePos(e){
  const rect = camvas.getBoundingClientRect();
  return{
    x: (e.clientX - rect.left) * (canvas.width / rect.width),
    y: (e.clientY - rect.top) * (canvas.height / rect.height)
  };
}
function startDrawing(e){
  drawing = true;
  saveStarte();
   const pop = getMousePop(e);
   ctx.beginPath();
   ctx.moveTo(pop.x, pop.y);
}
function draw(e)
  if  (!drawing) return;
  const pop = getMousePos(e);
   ctx.lineCap = "round";
   ctx.lineJoin = "round";
   ctx.lineWidth = brushSize;
   ctx.strokeStyle = brushColor;

   ctx.lineTo(pop.x, pop.y);
   ctx.stroke();
}
function stopDrawing() {
  drawing = false;
  ctx.beginPath();
}
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

sizeSlide.addEventListener("input", () => {
  brushSize = sizeSlide.value;
  sizeValue.textContent = brushSize + " px";
});
colorPicker.addEventListener("input", () => {
  brushColor = colorPicker.value;
});
pencilBtn.addEventListener("click", () => {
  brushColor = colorPicker.value;
});
eraserBtn.addEventListener("click", () => {
  brushColor = #FFFFFF;
});
clearBtn.addEventListener("click", () => {
  if (confirm("Clear the canvas?")) {
    saveState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
saveBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDateURL("image/png");
  link.click();
});
undoBtn.addEventListener("click", () => {
  if (history.length < 2) return;
  redoHistory.push(history.pop());
  const  img = new Image();
  img.src = history[history.length - 1];
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
});


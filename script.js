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

let canvas = document.getElementById("canvas");
let body = document.querySelector("body");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let color = " ";
let lineW = 5;

let prevX = null;
let prevY = null;

let draw = false;

body.style.backgroundColor ="#ffffff";

let theInput = document.getElementById("favcolor");

theInput.addEventListener("input",()=>{
    color = theInput.value;
    body.style.backgroundColor = color;
});

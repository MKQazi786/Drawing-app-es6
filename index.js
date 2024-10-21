let canvas = document.getElementById("canvas");
let body = document.querySelector("body");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let color = " ";
let lineW = 5;

let prevX = null;
let prevY = null;

let draw = false;

body.style.backgroundColor = "#ffffff";

let theInput = document.getElementById("favcolor");

theInput.addEventListener("input", () => {
    color = theInput.value;
    body.style.backgroundColor = color;
});

let ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = () => {
    draw = null;
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll(".clr")
clrs.map((clr)=>{
    clr.addEventListener("click",()=>{
        ctx.strokeStyle = clr.dataset.clr;
    })
})

let clearBtn = document.querySelectorAll(".clear");

clearBtn.addEventListener("click",()=>{
    location.reload();
})
let canvas = document.getElementById("canvas");
let body = document.querySelector("body");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let color = "";
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

clrs = [...clrs];
clrs.map((clr) => {
    clr.addEventListener("click",()=>{
        ctx.strokeStyle = clr.dataset.clr;
    })
})

let clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click",()=>{
    // location.reload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

let saveBtn = document.querySelector(".save");

saveBtn.addEventListener("click",()=>{
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "Muhammad-Khubaib(MKQazi786).png";
    a.click();
    
})

window.addEventListener("mousedown",()=> draw = true);
window.addEventListener("mouseup",()=> draw = false);

window.addEventListener("mousemove", (e)=>{
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }

    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
})

canvas.addEventListener("touchstart",()=> draw = true)
canvas.addEventListener("touchend",()=> draw = false);

canvas.addEventListener("touchmove", (e)=>{
    e.preventDefault();
    if(prevX == null || prevY == null || !draw){
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
},{ passive: false });
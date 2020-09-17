// Global app controller
import depthFirstSearch from './algo';
const x = 23;
console.log(handleNode(30));
console.log(` variable x is ${x}`);
var ctx = document.getElementById("myCanvas").getContext("2d");

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, 30,0, 2* Math.PI, false);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 5;
    var circle = ctx.stroke();
    ctx.closePath();
    return ctx;
}
function drawCircle2(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, 30,0, 2* Math.PI, false);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 5;
    var circle = ctx.stroke();
    ctx.closePath();
    return ctx;
}

function drawLine(x,y,z,r) {
    ctx.moveTo(x,y);
    ctx.lineTo(x+z,y+r);
    ctx.stroke();
}

(function init() {
drawCircle(50,75);
drawLine(80,75,40,30);
drawCircle(150,120);
drawLine(180,120,40,30);
drawLine(150,150,40,30);
drawCircle(250,150);
drawCircle(200,210);
drawLine(230,210,80,40);
drawLine(205,240,0,60);
drawCircle(200,325);
drawLine(210,350,80,20);
drawCircle(315,380);
drawLine(270,130,90,0);
drawCircle(340,245);
drawCircle(390,120);
})();


var Start = document.getElementById('submit');
Start.addEventListener('click', (event) => {
    setTimeout(() => {
        drawCircle2(50,75);
    },1000);
    clearTimeout();
    setTimeout(() => {
        drawCircle2(150,120);
    },2000);
    setTimeout(() => {
        drawCircle2(250,150);
    },3000);
    setTimeout(() => {
        drawCircle2(390,120);
    },4000);
    setTimeout(() => {
        drawCircle(390,120);
    },5000);
    setTimeout(() => {
        drawCircle(250,150);
    },6000);
    setTimeout(() => {
        drawCircle2(200,210);
    },7000);
    setTimeout(() => {
        drawCircle2(340,245);
    },8000);
    setTimeout(() => {
        drawCircle(340,245);
    },9000);
    setTimeout(() => {
        drawCircle2(200,325);
    },10000);
    setTimeout(() => {
        drawCircle2(315,380);
    },11000);
    setTimeout(() => {
        drawCircle(315,380);
    },12000);
    setTimeout(() => {
        drawCircle(200,325);
    },13000);
    setTimeout(() => {
        drawCircle(200,210);
    },14000);
    setTimeout(() => {
        drawCircle(150,120);
    },15000);
    setTimeout(() => {
        drawCircle(50,75);
    },16000);
});








// Global app controller
import handleNode from './algo';
const x = 23;
console.log(handleNode(30));
console.log(` variable x is ${x}`);

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


      context.fillStyle = "#FF0000";
      var radius = 30;
      context.beginPath();
      var Circle1 = context.arc(50, 75, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();

      context.moveTo(80,75);
      context.lineTo(195,95);
      context.stroke();


var Start = document.getElementById('submit');
Start.addEventListener('click', (event) => {
    console.log(Circle1);
})








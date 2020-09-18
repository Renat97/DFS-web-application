// Global app controller
// import DFS from '/DFS';
const x = 23;
// console.log(handleNode(30));
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


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
constructor() {
    this.length = 0;
    this.head = null;
}
push(data) {
  let node = new Node(data);
  let current = this.head;
  node.next = current;
  this.head = node;
  this.length++;
}
pop() {
  this.container.pop();
}
peek() {
   return this.container[container.length - 1];
}
isEmpty() {
    return this.container.length === 0;
}


}

var llStack = new Stack();
llStack.push(4);
console.log(llStack);

// storing the vertices in a stack, the vertices are explored by lurching along a path, visiting a new adjacent vertex if there is one available.

// graphs may contain cycles

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge(source, destination) {
      if (!this.adjacencyList[source]) {
        this.addVertex(source);
      }
      if (!this.adjacencyList[destination]) {
        this.addVertex(destination);
      }
      this.adjacencyList[source].push(destination);
      this.adjacencyList[destination].push(source);
    }
    removeEdge(source, destination) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  Graph.prototype.bfs = function(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
}
Graph.prototype.dfsRecursive = function(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return dfs(neighbor);
          }
      })
    })(start);
    return result;
}
Graph.prototype.dfsIterative = function(start) {
    // result is an array
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
}

var Graph1 = new Graph();
Graph1.addEdge(0,1);
Graph1.addEdge(1,2);
Graph1.addEdge(0,5);
Graph1.dfsRecursive();











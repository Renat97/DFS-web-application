
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





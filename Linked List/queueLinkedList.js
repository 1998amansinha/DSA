const LinkedList = require("./tailLinkedList");

class QueueLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const Queue = new QueueLinkedList();
console.log(Queue.isEmpty());

Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);
Queue.print();

console.log(Queue.dequeue());

console.log(Queue.size());

Queue.print();

console.log(Queue.peek());

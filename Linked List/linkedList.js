class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      // if(!this.isEmpty()) {
      this.head = node; // node.next = null
    } else {
      // }
      node.next = this.head; // this.head = value
      this.head = node; // this.size++
    }
    this.size++;
  }
  //   O(1)

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  //   O(n)

  insert(value, index) {
    // if the index is less than 0 or greater then the size of list
    if (index < 0 || index > this.size) {
      return console.log("Index is not valid");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  search(value) {
    if (list.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Index is not valid");
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return console.log("List is Empty");
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
    }
    return null;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    }
    let curr = this.head;
    let listValue = "";
    while (curr) {
      listValue += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValue);
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());

list.prepend(10);

list.prepend(20);
list.prepend(30);

list.append(40);

list.insert(5, 2);
list.print();

list.reverse();
list.print();

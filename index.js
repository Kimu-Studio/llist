console.log("LList\n");

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
  getNext() {
    return this.next;
  }
  getData() {
    return this.data;
  }
  setNext(node) {
    this.next = node;
  }
  setData() {
    this.data = data;
  }
}

class LList {
  constructor() {
    this.first = new Node();
  }

  insertBack(data) {
    // TODO
  }

  deleteByData(data) {
    // TODO
  }

  printList() {
    console.log("Printing a List:");
    let current = this.first.getNext();
    if(current === null) {
      console.log("empty list");
      return;
    }
    
    let retStr = current.getData() + "\n";
    while(current.getNext() !== null) {
      retStr += current.getNext().getData() + "\n";
      current = current.getNext();
    }
    retStr += "[end of the list]"
    console.log(retStr);
  }
}

const list = new LList();
list.insertBack("a");
list.insertBack("b");
list.insertBack("c");
list.deleteByData("b");
list.printList();
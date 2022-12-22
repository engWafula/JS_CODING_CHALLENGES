class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      //there are existing nodes
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if(index===0){
    this.head = new Node(data,this.head)
    return
    }

    const prevNode = this.getAt(index - 1) || this.getLast();
    const node = new Node(data,prevNode.next)
    prevNode.next = node
  }

  forEach(fn){
    let node = this.node;
    let counter = 0;
    while(node){
        fn(node,counter);
        node = node.next;
        counter++
    }
  }

  *[Symbol.iterator](){
    let node =this.head
    while(node){
        yield node;
        node = node.next
    }
  }

}
module.exports = {Node, LinkedList}
// const node1 = new Node(5);
// const list = new LinkedList();
// list.head = node1;
// list.insertFirst(10);
// list.insertFirst(11)
// // list.forEach((node,index) => 
// //     node.data+=100
// //     );
// console.log(list.getFirst());
// console.log(list.getLast());
// // list.clear()
// // list.removeFirst()
// list.removeLast();
// console.log(list.size());
// list.insertLast(22);
// console.log(list);
// console.log(list.getAt(1));
// list.removeAt(8);
// list.insertAt(1,100)
// // list.forEach((node,index)=>{
// //     node.data+=1
// // })
// for(let node of list){
//     node.data+=0
// }
// console.log(list);
// console.log(list.size());

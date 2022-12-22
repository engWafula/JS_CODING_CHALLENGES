// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue{
  constructor(){
    this.data = []
  }

  add(record){
    this.data.unshift(record)
  }

  remove(){
    return this.data.pop()
  }

  peek(){
    return this.data[this.data.length-1]
  }
}

// const queue = new Queue()
// queue.add(1)
// queue.add(2)
// queue.add(3)
// console.log(queue.data)
// console.log(queue.peek())
// queue.remove()
// console.log(queue.data)
// console.log(queue.peek())

module.exports = Queue











// const queue = new Queue()
// queue.add(10)
// queue.add(11)
// queue.add(12)
// queue.remove()
// console.log(queue.data)

 module.exports = Queue
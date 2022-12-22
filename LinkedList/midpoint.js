const List = require('./index');
const Node = List.Node;
const LinkedList = List.LinkedList;

const midPoint= (list)=>{
let slow = list.getFirst()
let fast = list.getFirst()
while(fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next
}
return slow
}

const node = new Node(5)
const list = new LinkedList();
list.head = node;
list.insertFirst(10);
list.insertFirst(11)
list.insertFirst(12)
list.insertFirst(13)

console.log(list)
console.log(midPoint(list).data)
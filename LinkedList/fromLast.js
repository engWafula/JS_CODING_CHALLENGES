const List = require('./index');
const Node = List.Node;
const LinkedList = List.LinkedList;


function fromLast(list,n){
    let slow = list.getFirst()
    let fast = list.getFirst()
    while(n>0){
        fast = fast.next
        n--
    }
    while(fast.next){
        slow = slow.next
        fast =  fast.next
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

console.log(fromLast(list,2).data)
const List = require('./index');
const Node = List.Node;
const LinkedList = List.LinkedList;

function circular(list){
    let slow = list.getFirst()
    let fast = list.getFirst()

    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow){
            return true
        }
    }
    return false
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = a;


console.log(l)
console.log(circular(l))
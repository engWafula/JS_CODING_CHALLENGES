const Node = require("./index")

function levelWidth(root){
    const counters = [0]
    const arr = [root,"S"]
     while(arr.length>1){
        const node = arr.shift()
        if (node === 'S') {
            counters.push(0);
            arr.push('S');
          } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
          }
     }
     return counters
}


const root = new Node(9);
root.add(1);
root.children[0].add(2);
root.children[0].add(3);
root.children[0].children[0].add(4);
console.log(levelWidth(root))
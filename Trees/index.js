class Node{
    constructor(data){
        this.data = data
        this.children = []
    }
    add(data){
        const node = new Node(data)
        this.children.push(node)
    }
    remove(data){
        this.children = this.children.filter(node=>node.data!==data)
    }
}

class Tree {
constructor(){
    this.root = null
}

     traverseBF(fn){
        const arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            arr.push(...node.children)//or you can use a for loop to iterate through the children
               fn(node)
        }

}

traverseDF(fn){
    const arr = [this.root]
    while(arr.length){
        const node = arr.shift()
        arr.unshift(...node.children)
        fn(node)
    }
}
}

// const letters = [];
// const t = new Tree();
// t.root = new Node('a');
// t.root.add('b');
// t.root.add('d');
// t.root.children[0].add('c');

// t.traverseDF(node => {
//     letters.push(node.data);
//   });

//   console.log(letters)
module.exports = Node
// function  *numbers(){
//     const res =2+2;
//     return 20+(yield res);
// }
// const generator = numbers()
// generator.next()
// console.log(generator.next(100))

// function *list(){
//     yield 1
//     yield 2
//     yield* moreList()
//     yield 6
//     yield 7
// }

// function *moreList(){
//     yield 3
//     yield 4
//     yield 5
// }
// const gen = list()
// const arr = []
// for(let num of gen){
//  arr.push(num)
// }
// console.log(arr)

//practical example on generators

class Tree{
    constructor(value= null,children=[]){
     this.value = value;
     this.children = children
    }

    *printValues(){
        yield this.value
        for(let child of this.children){
            yield* child.printValues()
        }
    }
}

const tree = new Tree(1,[
    new Tree(2, [new Tree(4)]),
    new Tree(3)
])
// console.log(tree.printValues().next())

const values = []
for(let value of tree.printValues()){
    values.push(value)
}

console.log(values)
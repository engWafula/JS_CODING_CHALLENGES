// Chunked Array Coding Challenge is one that requires us 
// To make chunks of size n from an original array
// So we have a function that takes in an Array and a Chunk size
// Forexample:-
// chunk([1,2,3,4],2) => [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) => [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5,6],3) =>[[1,2,3],[4,5,6]]

const chunk = (array,size) =>{
 const chunked = []
 let index = 0
 while(index < array.length){
     chunked.push(array.slice(index,index+size))
     index+=size
 }
 return chunked
}
 console.log(chunk([1,2,3,4],2))










// const chunk = (array,size) =>{
// const chunked = []
//  for(let element of array){
//      const last = chunked[chunked.length-1]
//      if(!last || last.length ===size){
//           chunked.push([element])
//      }else{
//           last.push(element)
//      }
//  }
//  return chunked
// }

// console.log(chunk([1,2,3,4,5,4,56,78],4))
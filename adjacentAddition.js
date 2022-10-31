// In this challenge we have to add  2 adjacent numbers in an array
// After we return the max number out of the addition
//forexample:
// adjacentAddition([1,2,3,4]) =>7
// adjacentAddition([3,7,2,1]) =>10

// Math.max(1,2,34,56) =>56

function adjacentAddition(inputArray){
  return Math.max(...inputArray.slice(0,-1).map((n,index)=>{
    return n+inputArray[index+1]
  }))
}

console.log(adjacentAddition([1,2,3,4,5,6]))
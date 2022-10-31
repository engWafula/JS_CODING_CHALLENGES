//Make Array Consecutive 2 is a codding challenge that deals with an array
//In this challenge we are given an array of numbers 
//and we are to determine the amount of numbers
// missing in the array from min to max
//example:-
// solution([6, 2, 3, 8]) => 3 

function solution(inputArray){
   inputArray.sort((a,b)=>{
    return a-b
  })
  const min = inputArray[0]
  const max = inputArray[inputArray.length-1]
  let count = 0
  for(let i = min ;i<max; i++){
    if(inputArray.indexOf(i) === -1){
        count ++
    }
  }
  return count
}

console.log(solution([6, 2, 3, 8,10,20]))
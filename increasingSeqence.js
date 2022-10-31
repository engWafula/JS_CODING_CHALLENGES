// Given a sequence of integers as an array,
// determine whether it is possible to obtain a strictly 
//increasing sequence by removing not more than one element from the array.
//Note: sequence a0, a1, ..., an is considered to be a strictly increasing
// if a0 < a1 < ... < an. Sequence containing only one element is 
//also considered to be strictly increasing.

//Examples

//For sequence = [1, 3, 2, 1], the output should be
//solution(sequence) = false.
//There is no one element in this array that can be removed
// in order to get a strictly increasing sequence.

/************************** */
//For sequence = [1, 3, 2], the output should be
//solution(sequence) = true.

function solution(sequence){
let count = 0;
for(let i=0;i<sequence.length;i++){
    if(sequence[i] <= sequence[i-1]){
        count++
    }

    if(sequence[i]<= sequence[i-2] && sequence[i+1]<= sequence[i-1]){
        return false
    }
}
return count <= 1
}

console.log(solution([1, 3, 2]))
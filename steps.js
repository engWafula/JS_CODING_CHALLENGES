// Write  a function that accepts a positive number n
//the function should log the steps phase with n levels
// using the # character....
//Make sure that steps have spaces on the right hand side
//----------forexample:-----------
//  steps(2)
//    0 1
// 0 "# "
// 1 "##"
//  steps(3)
//  "#  "
//  "## "
//  "###"

function steps(num){
    for(let row=0;row<num;row++){
        let stair=""
        for(let column=0;column<num;column++){
            if(column<=row){
                stair+="#"
            }else{
                stair+=" "
            }
        }
        console.log(stair)
    }
}

steps(2)






















































































// //recursion 

// function steps(n, row = 0, stair = ""){
//     if(n===row){
//         return
//     }

//     if(n===stair.length){
//      console.log(stair)
//     return  steps(n,row+1)
//     }

//     if(stair.length<=row){
//         stair+="#"
//     }else{
//         stair+=" "
//     }
//     steps(n,row,stair)
// }
// steps(4)
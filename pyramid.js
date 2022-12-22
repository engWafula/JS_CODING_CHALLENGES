// Write  a function that accepts a positive number n
//the function should log the pyramid shape with n levels using the # character....
//Make sure that steps have spaces on both sides
//----------forexample:-----------
// pyramid(1)
//    "#" 
//  pyramid(2)
//   0 1 2
// 0 " # "
// 1 "###"  2*n-1


function pyramid(n){
  const midPoint = Math.floor((2*n-1)/2)
for(let row=0; row<n;row++){
  let stair=""
  for(let column=0;column<2*n-1;column++){
   if(midPoint-row<=column && midPoint+row>=column){
    stair+="#"
   }else{
    stair+=" "
   }
  }
  console.log(stair)
}
}
pyramid(10)
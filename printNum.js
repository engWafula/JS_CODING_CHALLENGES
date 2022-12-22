function printNum(n){
if(n == -1){
    return ;
}
console.log(n)
printNum(n-1)
}

printNum(10)
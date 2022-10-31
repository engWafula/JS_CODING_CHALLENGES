//split() "boy" =>["b","o","y"]
//reverse() => ["y","o","b"]
//join() => "yob"


function stringReverse(str){
    return str.split("").reverse().join("")
}

console.log(stringReverse("hello"))

//plainderom => "madam" => "madam"
//"boy" => "yob"
function plainedrom(str){
    const reversed = str.split("").reverse().join("")

    if(str == reversed){
        return true
    }
    else{
        return false
    }
}

console.log(plainedrom("boy"))
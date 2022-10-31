//-95 =>-59  =>59-
//toString() => 89  =>"89"
//parseInt("89") => 89

function intReverse(num){
   const reversed = num.toString().split("").reverse().join("")
   const intReversed = parseInt(reversed)
   if(num < 0){
    console.log(intReversed*-1)
   }
   else{
    console.log(intReversed)
   }
}

intReverse(-54)
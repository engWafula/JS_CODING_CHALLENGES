//Write a program that console logs numbers from from 1 to n
// but for multiples of three print "fizz" instead of a number
//And for mutliples of five print "buzz"
// but if the number is both multiple of three and five print "fizzbuzz"
// example 
// fizzbuzz(5)
// 1
// 2
// fizz
// 4
// buzz


function fizzbuzz(num){
     for(let i =1 ; i<=num; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzbuzz")
        }
        else if(i%3==0){
            console.log("fizz")
        }
        else if(i%5 == 0){
            console.log("buzz")
        }

        else{
            console.log(i)
        }
     }
}


fizzbuzz(15)
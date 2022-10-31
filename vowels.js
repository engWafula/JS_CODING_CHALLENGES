// In this challenge we need to count the number of vowels in a string
// Example
// a,e,i,o,u
// vowels("hello") => 2
// vowels("my") => 0
// match()
// includes()

function vowels(str){
  let count = 0;
  const vowelChecker = ["a","e","o","i","u"]

   for(let char of str.toLowerCase()){
     if(vowelChecker.includes(char)){
        count++
     }
   }

   return count
}

 console.log(vowels("madam"))




// function vowels(str){
//   const result = str.match(/[aeiou]/gi)
//   return  result ? result.length: 0
// }

// console.log(vowels("my"))
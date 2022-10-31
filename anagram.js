//checking if two strings are anagrams  of each other
//We know that one string is an anagram of another 
//Only if it uses the same characters in the same quantity
// We only consider characters and not whitespaces and punctions
//example
// anagram("fairy tales?","rail saftey!") =>true
// anagram("FAIRY TALES?","rail saftey!") =>true
// anagram("hello there", "are you there") => false

//sort() => [1,2,3,5,8,100,7]=

function anagram(firstString , secondString){
   return  cleanStr(firstString) === cleanStr(secondString)
}

function cleanStr(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("")
}

console.log(anagram("hello there ?!!","are you there!"))

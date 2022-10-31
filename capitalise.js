//Here we are simply going to capitalise every first letter of the sentence
//example
// capitalise("hello there") => "Hello There"

//toUpperCase()
//slice()

function capitalise(str){
  const words = []

  for(let word of str.split(" ") ){
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(" ")
}

console.log(capitalise("please subscribe to coding forever"))



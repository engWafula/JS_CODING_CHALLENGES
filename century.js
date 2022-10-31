// In This chaalenge we want create a function the returns 
//the century any year falls in
// forexample
//century(2022) => 21
//century(100) =>1

function century(year){
    if(year <= 100){
        console.log("1")
    }

    else if(year % 100 ==0){
        console.log(parseInt(year/100))
    }
    else{
        console.log(parseInt(year/100)+1)
    }
}

century(100)
//2022/100 20.22
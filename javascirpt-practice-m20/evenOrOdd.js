// if we want to khow which is even or odd 

function evenOddChecker (number){
    var evenOrOdd = number % 2;
    if(evenOrOdd === 0){
        console.log('Number is even')
    }
    else{
        console.log('Number is odd')
    }
}

evenOddChecker(1280);
evenOddChecker(303);

// if we just want to result true or false


function evenOddChecker (number){
    var evenOrOdd = number % 2;
    if(evenOrOdd === 0){
        return true
    }
    else{
       return false
    }
}

const myNumber = evenOddChecker(1280);
console.log(myNumber)
const herNumber = evenOddChecker(303);
console.log(herNumber)

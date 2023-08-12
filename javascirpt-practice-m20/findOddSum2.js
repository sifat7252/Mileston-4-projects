// find out the sum of an array

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;        
    }
    return sum;
}


// finding odd and even number from an array and sum it:::

function getEvenOrOdd(number){
    const evenNumbers = [];
    const oddNumbers = [];
    
    for(let i = 0; i < number.length; i++){
        var index= i;
        var element = number[index];
        console.log(element)
        if(element % 2 === 0 ){
            
            evenNumbers.push(element)
        }
        else{
            oddNumbers.push(element);
        }
    }
    return [evenNumbers, oddNumbers];
}
const myNumber = [12, 65, 45, 78, 32, 45, 91];

// getting even numbers::

const [evenNumbers, oddNumbers] = getEvenOrOdd(myNumber);
console.log(evenNumbers);

// getting even numbers sum :::

const evenNumbersSum = getSumOfAnArray (evenNumbers);
console.log("Total Even Number Sum :",evenNumbersSum);


// getiing odd numbers:::

console.log(oddNumbers);
const oddNumbersSum = getSumOfAnArray (oddNumbers);
console.log("Total Odd Number Sum :",oddNumbersSum);
 
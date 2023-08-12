// get index number with array number with sum::::

function getSumOfArray (numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        var index = i; 
        var element = numbers[index]
        sum = sum + element;
        console.log(index, element);
        
    }
    console.log("Total sum of array : ", sum);
}
const myNumber = [12, 65, 45, 78, 32, 45, 91]
getSumOfArray(myNumber)

// find even and odd numbers from an array::::


// function getSumOfArray (numbers){
//     let sum = 0;
//     for(let i = 0; i< numbers.length; i++){
//         var index = i; 
//         var element = numbers[index]
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum ;
// }

// getSumOfArray(myNumber)




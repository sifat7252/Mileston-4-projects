/*  when we want to multiply the number in reverse way with while loop */ 

function factorial(number){
    let i = number;
    let result = 1; 
    while(i >= 1){
        result = result * i; 
        i--;
    }
    return result; 
}
const myNumber = 6; 
const totalResult = factorial(myNumber);
console.log(totalResult);
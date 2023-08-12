/**  if we want to find sum of a clause (dhara) by for loop:::  */

// let sum = 0;
// for(let i = 1; i <=10; i++){
//     sum = sum + i;
//     console.log(i, sum)
// }
// console.log("Total sum :",sum)

/** If we want to find sum of a clause by function::: */

// function sumOfNumber(number) {
//     let sum = 1;
//     for (let i = 1; i <= number.length; i++) {
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         console.log(i ,sum);
        
//     }
//     return sum;
    
    
// }
// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const totalSum = sumOfNumber(Numbers);
// console.log("Total sum :", totalSum );

/* multiplication of some numbers like (1*2*3*4*5*6*7*8*9*10) */ 

// function multiplicationOfNumber (number){
//     let result = 1;
//     for(let i = 1; i <=number; i++){
//         result= result * i;
//     }
//     return result
// }
// var result = multiplicationOfNumber(10);
// console.log(result);

/*  multiplication of some number with factorial BY FUNCTION AND FOR LOOP */ 

// function factorial (number){
//     let result = 1;
//     for(let i = 1; i <=number; i++){
//         result= result * i;
//     }
//     return result
// }
// const result = factorial(10);
// console.log(result);

/*  multiplication of some number with factorial BY FUNCTION AND WHILE LOOP */

function factorial(number){
    let num = 1; 
    let result = 1; 
    while(num <= number){
        result = result * num;
        num++
    }
    return result;
}
const myNumber = 8;
const totalResult = factorial(myNumber);
console.log(totalResult);




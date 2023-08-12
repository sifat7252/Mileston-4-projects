/*  PROBLEM TASK 1 */
/* WRITE A CODE WHICH CAN FIND THE SMALLEST NUMBER FROM AN ARRAY*/

// function getSmallest (array){
//     let SMALLEST = array[0];
//     for(let i = 0; i < array.length; i++){
//         const index = i; 
//         const element = array[index];
//         if(element < SMALLEST){
//            SMALLEST = element   ;
//         }

//     }

//     return SMALLEST;

// }
// const numbersArray = [50, 60, 30, 20, 15, 18, 13, 80, 70];
// let result = getSmallest(numbersArray);
// console.log('The smallest number is :',result);


/* PROBLEM TASK 2 */
/* WRITE A CODE WHICH CAN FIND THE SMALLEST NUMBER FROM INPUT 3 NUMBERS */

// const num1 = 50; 
// const num2 = 60; 
// const num3 = 45; 

// function getSmallest (a, b, c){
//     if(a < b && a < c){
//         console.log('This is a smallest number :', a)
//     }
//     else if(b < a && b < c){
//         console.log('This is the smallest number :', b)
//     }
//     else{
//         console.log('This is the smallest number :', c)
//     }

// }
// getSmallest (num1, num2, num3);


/* PROBLEM TASK 3 */
/* WRITE A FUNCTION THAT INPUT AS AN ARRAY. THAT ARRAY HAVE SOME NUMBERS. YOU HAVE TO FIND THE 
AVERAGE FROM THE INPUT ARRAY NUMBERS. AND SHOW IT AS THE RETURN OF THAT FUNCTION. TRY YOUR SELF */

// function findAverage (numbers){
//     let sum = 0;
//     let average = 0;  
//     for(let i = 0; i < numbers.length; i++){
//         const index = i; 
//         const element = numbers[index];
//         sum = sum + element; 
//         average = sum / numbers.length;

//     }
//     // console.log(numbers.length, average, sum);
//     return average;
// } 
// const inputNumber = [10, 20, 30, 40, 50];
// const result = findAverage(inputNumber);
// console.log('Total average :', result)


/* PROBLEM TASK 4 */
/* WRITE A FUNCTION THAT INPUT THE WIDTH AND HEIGHT OF A RECTANGULAR AS A PARAMETER. THEN YOU HAVE
TO RETURN THE RESULT AS THE TOTAL AREA OF THAT RECTANGULAR . */

// function getSize (height, width){
//     let multiply = height * width; 
//     return multiply;
// }
// const height = 10; 
// const width = 20; 
// const result = getSize(height, width);
// console.log('The area of rectangular is :', result);


// const inputHeightWeight = (10, 20);
// const getArea = getSize(inputHeightWeight);
// console.log(getArea); 
// console.log('The area of rectangular is :', getAreaArea)


/* PROBLEM TASK 5 */
/* LET SOME NUMBERS ARE STAYS AT AN ARRAY, YOU HAVE TO WRITE A CODE TO FIND THE 2ND LARGEST NUMBER 
FROM THAT ARRAY, MUST TO BE TRY !! */

function findSecondLargest(numbers) {
    
    let largest = Math.max(numbers);
    let secondLargest = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] !== largest && numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }


    }
    return secondLargest;
}
const inputNumber = [54, 83, 31, 25, 28, 40];
const result = findSecondLargest(inputNumber);
console.log('The second largest number is :', result);
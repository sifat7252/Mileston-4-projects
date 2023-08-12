/*  write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030]
as the input parameter and will check if each year is leap year. if a year is a leap year
insert that year in a new array return the new array and print the result. */

function getArrayOfYears(array) {
    let leapyearArray = [];
    for(let i = 0; i < array.length; i++){
        var index= i;
        var element = array[index];
        if ((0 == i % 4) && (0 != i % 100) || (0 == i % 400)) {
            leapyearArray.push(element);
        }
        
    }
    return leapyearArray;
}
const inputYearOfArray = [2023, 2024, 2025, 2028, 2030];
const NewLeapYearArray = getArrayOfYears(inputYearOfArray);
console.log ("This years are leap year",NewLeapYearArray)
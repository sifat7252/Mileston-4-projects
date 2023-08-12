
// nomally sorter maddhome learyear ber korar niom::
 
// function isLeapyear (year){
//     var remainder = year % 4;
//     if (remainder == 0 ){
//         console.log(' this is leap year')
//     }
//     else{
//         console.log('this is not a leap year.')
//     }
// }

// isLeapyear(1980);



//  ture false er maddome leap year nirnor::

function isLeapyear (year){
    var remainder = year % 4;
    if (remainder == 0 ){
        return true
    }
    else{
        return false
    }
}
var myNumber = isLeapyear(1980);
console.log('my year is leapyear :',myNumber);

var herNumber = isLeapyear(2023);
console.log('her year is leapyear :',herNumber);





// leapyear ke 3 ta sorter maddome ber kora jai ::

// function isLeapyear (year){
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } 
//     else {
//         console.log(year + ' is not a leap year');
//     }
// }
// var myYear = isLeapyear(1980);

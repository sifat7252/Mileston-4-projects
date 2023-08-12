/* write a function that will take HOUR as the input parameter and will *
convert it into MINUTES and will return the result in minutes  */ 

function getSecund (hour){
    const minutes = hour * 60;
    return minutes;
}
const inputHour = 6;
const convertMinutes = getSecund(inputHour);
console.log("So we can say,",inputHour, "hours means :",convertMinutes,"minutes.")

/* write a function that will take MINUTES as the input parameter and will *
convert it into SECUND and will return the result in SECUND */

function getSecund (hour){
    const secunds = hour * 60;
    return secunds;
}
const inputMinutes = 20;
const convertSecund = getSecund(inputMinutes);
console.log("So we can say,",inputMinutes, "minutes means :",convertSecund,"secund.")


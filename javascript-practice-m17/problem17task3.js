// problem a :::
var num1 = 13;
var num2 = 79;
var num3 = 45;

var largestNumber ;
if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
  } else {
    largestNumber = num3;
  }
  
  console.log(`The largest number is: ${largestNumber}`);


  // problem b

  var side1 = 9; 
  var side2 = 9;
  var side3 = 9;
  
  if((side1== side2 || side1== side3) || (side2==side3 || side2==side1)){
    console.log('yes, this is isosceles')
    if(side1 == side2 == side3){
      console.log('its not isosceles but equilateral triangle')
    }
  }
  else{
    console.log( 'No, this is noto isosceles')
  }

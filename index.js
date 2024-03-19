// document.getElementById("contact").onclick = function(){

//     document.getElementById("form").removeAttribute("style")
// }

function isNumberPositive(value) {
  if (value >= 0) {
    console.log(value + " is positive!");
  } else {
    console.log(value + " is negative!");
  }
}

var number = 5;
isNumberPositive(number);

function isNumberEven(value){
    if(value % 2 == 0){ 
        console.log(value + " is even");
    }else{
        console.log(value + " is odd");
    }
}

var number = 10;
isNumberEven(number)

function greaterNumber(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater");
  } else {
    console.log(num2 + " is greater");
  }
}

var number1 = 10;
var number2 = 15;

greaterNumber(number1, number2);

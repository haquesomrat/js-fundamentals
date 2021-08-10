//addition
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 21;
var secondNumber = 59;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value', result);

//substitution
function substitutionTwonumbers(num1, num2) {
    console.log(num1, num2);
    var total = num2 - num1;
    return total;
}
var num1 = 75;
var num2 = 105;
var result = substitutionTwonumbers(num1, num2);
console.log('the substitution is:', result);

//multiplication
function multiplicationTwoNumbers(numb1, numb2) {
    console.log(numb1, numb2);
    var total = numb1 * numb2;
    return total;
}
var numb1 = 45;
var numb2 = 68;
var result = multiplicationTwoNumbers(numb1, numb2);
console.log('Multiplyed answer:', result);

//Division
function divisionTwoNumbers(Num3, Num4) {
    console.log(Num3, Num4);
    var total = Num4 / Num3;
    return total;
}
var Num4 = 600;
var Num3 = 4;
var result = divisionTwoNumbers(Num3, Num4);
console.log('Divided Number is:', result);


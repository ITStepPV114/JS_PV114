'use strict'
document.write("We added text from outer script");
console.log("Hello JS from separate file");
console.warn("Some warnng message!");
console.error("Some error message!");
console.log(4 * 5);
console.log("2+3=" + (2 + 3) + '!!!'); //concatination

console.log(`Value: 2+3=${2 + 3}`); // interpolation

// =================Variable======
// var 
// let
let empty; //undefined
console.log(empty);
let nullObject = null;  //null
console.log(nullObject);
let number = 44.5; //number -2^53 to 2^53
let email = "tetiana@gmil.com" //string
let flag = true; //boolean
let array = [4, 4, "hello", [4, 6, 7]]; //object
let funcsum = function (a, b) {
    console.log(`${a}+${b}=${a + b}`);
}
let varBigInt = 230000n;
//invoke function
funcsum(34, 56);
/*
console.log(`Empty=${empty}, Type:${typeof empty}`);
console.log(`nullObject=${nullObject}, Type:${typeof nullObject}`);
console.log(`number=${number}, Type:${typeof number}`);
console.log(`email=${email}, Type:${typeof email}`);
console.log(`flag=${flag}, Type:${typeof flag}`);
console.log(`array=${array}, Type:${typeof array}`);
console.log(`funcsum=${funcsum}, Type:${typeof funcsum}`);
console.log(`varBigInt=${varBigInt}, Type:${typeof varBigInt}`);
*/
console.log(array);
// унарні (-,+, ++, --), бінарні (+,*,/,%, **(power) )
// логічні операції: == (нестроне дорівнює), === (строге дорівнює)
//                   !=                      !==
// +/,-=,*=,...


// isNaN("3456")
// false
// isNaN("ftrt3456")
// true
//>, <, <=,>=
// &&  - and;  ||  or;     ! not ;
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// or 
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false
// not
console.log(!true) // false
console.log(!false) //true

console.log((2 > 3) || (4 < 5))

console.log("Apple" == "apple")
console.log(10 == '10')
let result = 5;
result = result + 4; // result+=4
console.log(result) //true
// /=
// *=
// %=
//  -=
//  **=
//  &&=   a=a && b      ||=     a=a || b
// =====Тернарні оператори====
//(first operant = condition) ? (second operand) : {third operand}

let num1=+prompt("Input first number:");
let num2=+prompt("Input second number:");

let max=(num1>num2) ? num1 : num2;
alert(`max=${max}`);

//  left operand ?? right operand

num1=55555;
let result1=num1 ?? "It is null!" ; //value by default  
console.log(result1); //55555
num1 ??= "It is null!"//  ??=
console.log(num1); //55555

num1=undefined;
let result2=num1 ?? "It is undefined!" ;
console.log(result2); // "It is undefined!"
//===============comtrol statements===
/*
if(condition){

}
else{

}
*/

/*
if (n == 1) {
 // Виконуємо блок коду 1
}
else if (n == 2) {
 // Виконуємо блок коду 2
}
else if (n == 3) {
 // Виконуємо блок коду 3
}
else {
 // Якщо всі решта умов else не виконуються, виконуємо блок 4
}

*/
/*
switch (expression) {
 case value1:
    statement1;
    break;
 case value2:
    statement2;
    break;
 case value3:
    statement3;
    break;
 default:
    statement;
}
*/

/*
while (expression) {
 // statement
}
*/

/*
do {
 statement;
} while(expression)
*/


document.write("<ul>");
for(let i=1, j=1; i<=9,j<=9; i++, j++){
    document.write(`<li>${i}*${j}=${i*j}</li>`);
}
document.write("</ul>");



let number1 = 234;
let sumNumbers = "";
sumNumbers += String(number1 % 10); // sumNumbers=sumNumbers+number1%10    sumNumbers=4
number1 = Math.trunc(number1 / 10);// number1=23
sumNumbers += number1 % 10; //  sumNumbers=4+3=7
number1 = Math.trunc(number1 / 10);
sumNumbers += number1;//  sumNumbers=7+2=9
console.log(sumNumbers);
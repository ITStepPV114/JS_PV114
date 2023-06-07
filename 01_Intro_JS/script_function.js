'use sctrict'
/*
function namef(parm1, param2,...){
    statements; //body
}
*/
print();
function print() {
    document.write("<h2> create function</h2>")
}
let printHello = print;
// console.log(print);
// console.log(typeof printHello);


// print();
// printHello();
// function with parameters
function suma(a, b) {
    a++;
    return a + b;
}
let a = 4;
let b = 5;
console.log(`a=${a}`);
console.log(`suma=${suma(a, b)}`);
console.log(`a=${a}`);

function suma1(a = 1, b = 1) {
    return a + b;
}
console.log(`suma1=${suma1(2, 3)}`);
console.log(`suma1=${suma1(3)}`);
console.log(`suma1=${suma1()}`);


// ...spread operator

function printValuesParams(student, ...marks) {
    console.log(student);
    console.log(typeof marks);
    //for of значення  object {key:value} => associatid array (dictonary) 
    for (let mark of marks) {
        console.log(mark);
    }
    //for in ключі  object => associatid array (dictonary)
    for (let mark in marks) {
        console.log(mark);
    }

    for (let i = 0; i < marks.length; i++) {
        console.log(marks[i]);
    }
}

printValuesParams('Igor', 10, 11, 12);

// =====create function  suma2 any numbers (marks) 

// Напишіть функцію, яка приймає 2 числа та повертає менше з них.
let min_number=function(n1,n2){
    if (((typeof n1)==="number") && ((typeof n2)==="number")){
       console.log(`${n1}+${n2}=${n1+n2}`);
    }else{
        console.error(`Error! ${n1} or ${n2} is not Number`);
    }
}
let variable;
min_number(3,4)
// min_number('3',4);

/*
Напишіть функцію, яка приймає число і виводить відповідну кількість
вкладених пар круглих дужок.
Наприклад: число 4 – (((()))).    1   "()"     2   "("+"()"+")"    3 "("+"("+"()"+")"+")"    4  (((())))
*/
function num_breckets(number){
    if(number==1)
        return "()";
    else
        return "("+num_breckets(number-1)+")";

}

console.log(num_breckets(3));
console.log(num_breckets(4));

/*
    Напишіть функцію, яка виводить усі числа із заданого
    користувачем діапазону у прямому порядку. 
    4      1 2 3 4
    ((("1")+"2")+"3") +"4"
*/
function p(n){
    if (n==1) return "1";
    else return p(n-1)+" "+n;
}
alert(p(4));
alert(p(8));

//  p(4)=>  p(3)+" "+4=> p(2) + " "+3 =>p(1) + " "+2
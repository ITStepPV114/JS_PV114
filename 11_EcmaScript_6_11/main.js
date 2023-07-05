// -=-=-=-=-=-=-=-=- var vs let vs const -=-=-=-=-=-=-=-=-

console.log(varNumber);     // works: undefined
//console.log(letNumber);   // works: error

var varNumber = 10;         // global scope
let letNumber = 10;         // global scope
const constNumber = 10;     // global scope

var varNumber = 11;         // works
//let letNumber = 10;         // error
//constNumber = 11;         // error


console.log(varNumber);     // works: 10
console.log(letNumber);     // works: 10

function increment(num) {
    console.log(step);  // works

    var step = 2;       // function scope
    num += step;

    if (true) {
        var varNum = 11;
    }
    if (true) {
        let letNum = 12;
    }

    console.log(varNum);  // works
    //console.log(letNum);  // error

    console.log(step);  // works

    return num;
}

increment(30);

// -=-=-=-=-=-=-=-=- Destructuring -=-=-=-=-=-=-=-=-
// with arrays
let array = [3, 4.4, 10, 123, 55, 0.6];

// let first = array[0];
// let second = array[1];
// let last = array[5];

let [first, second, , , , last] = array;

console.log(`First: ${first}, Second: ${second}, Last: ${last}`);

// with objects
let user = {
    firstName: "Oleksandr",
    lastName: "Pobeda",
    address: "Kyiv, Ukraine",
    age: 44,
    position: "Manager"
};

// let name = user.firstName;   
// let surname = user.lastName;

let { firstName: name, lastName: surname, address } = user;

console.log(`User: ${name} ${surname}, Address: ${address}`);

// in params
let figure1 = {
    name: "Rectangle",
    width: 120,
    height: 330,
    color: "Red"
};
let figure2 = {
    name: "Square",
    width: 55,
    height: 55,
    color: "Black"
};

function showArea({ width, height }) {
    console.log(`Area: ${width * height} cm^2`);
}

showArea(figure1);
showArea(figure2);

// -=-=-=-=-=-=-=-=- spread operator -=-=-=-=-=-=-=-=-
function addItems(array, ...elements) {
    for (const el of elements) {
        array.push(el);
    }
}

addItems(array, 3, 2, 1);
console.log(`Array: ${array}`);

// function declaration
function getSumm(a, b) {
    return a + b;
}
// function expression
getSumm = function (a, b) {
    return a + b;
}
// arrow function
getSumm = (a, b) => { return a + b; }
// if function has only one pperator you can miss the scopes
getSumm = (a, b) => a + b;

array.filter(function (number, index) {
    if (number % 2 == 0) return true;
    else return false
});
// if only one parameter you can avoid brackets
array.filter(n => n % 2 == 0);

// -=-=-=-=-=-=-=-=- string -=-=-=-=-=-=-=-=-
let block = "<>";
console.log(block.repeat(10));

// -=-=-=-=-=-=-=-=- modules -=-=-=-=-=-=-=-=-
//import { initArray } from "./module";

//initArray(array);
//console.log(`Array: ${array}`);
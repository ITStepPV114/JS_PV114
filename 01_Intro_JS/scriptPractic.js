'use strict'
/*
Запросіть у користувача дані за допомогою prompt() і виведіть результат за допомогою alert().
1. Запросіть у користувача його ім’я та виведіть у відповідь
«Привіт, (його ім’я)!».
*/
let res=confirm("It is 45 parne");
if(res){
    // alert("parne");
    console.log("parne");
}else{
    // alert(" ne parne");
    console.log("parne");
}


let username=prompt("Input your name:");
alert(`Hello, ${username}!`);
const ACADEMY='IT STEP';
if (confirm(`are you learning in ${ACADEMY}?`)){
    alert("O-oo, cool!");
}
else{
    alert(`${username}, welcome to us!`);
};



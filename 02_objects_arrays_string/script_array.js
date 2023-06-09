// 1 variant
let mas1=[3,4,5,6];
console.log(mas1);

//2
let mas2=new Array(); //[]
console.log(mas2);
//3
let mas3=new Array(3); //[empty X 3]
console.log(mas3);
//4
let mas4=new Array(5,6,7); //
console.log(mas4);
console.log(mas4.length);
mas4.length=2;
console.log(mas4); 
console.log(mas4.length);

mas4.length=15;
console.log(mas4);
console.log(mas4[4]); //undefind
console.log(mas4.length); //  lenght index+1 last element


let mas5= new Array("JavaScript", 452, [56,8,6],{name:"Olga", age:20});
console.log(mas5);

// access to element in array by index
console.log(mas5[3]);
console.log(mas5[3]["name"]);
console.log(mas5[3].name);



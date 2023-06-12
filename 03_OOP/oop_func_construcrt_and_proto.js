//Object function=> constructor 

function Student(firstname, lastname,birthday){
    this.firstname=firstname;
    this.lastname=lastname;
    this.birthday=birthday;
  
    this.showAge=function(){
        let minusTime=Date.now()-Date.parse(this.birthday);
        this.showInfo();
        console.log("Has "+Math.round(minusTime/(365*24*60*60*1000))+" years old.");
    };    
}

let mihajlo=new Student("Mihajlo","Mihalchuk","08/22/2001");
console.log(mihajlo);
console.log(mihajlo.lastname);
mihajlo.lastname="Rijik";


// let andriy=new Student("Andriy","Polynivia","11/12/2000");
// console.log(andriy.lastname);
// andriy.showInfo();
// andriy.showInfo();
// let igor=new Object();
// console.log(igor);
// console.log(andriy instanceof Student);
// Student.prototype.maxAge=110;
// console.log(mihajlo.maxAge);
// console.log(andriy.maxAge);
Student.prototype.hello=function(){
    console.log(this.firstname+ ", hello! ");
}

Student.prototype.showInfo=function(){
    console.log(`Student name: ${this.firstname} ${this.lastname}`);
};
// mihajlo.hello();
// andriy.hello();
// mihajlo.maxAge=100;
// console.log(mihajlo.maxAge);
// console.log(andriy.maxAge);

//ОПП інкапсуляція, наслідування і поліморфізм


// //інкапсуляція
// function Student1(firstname, lastname, birthday) {
//     this.firstname = firstname;
//     let _lastname = lastname;
//     this.birthday = birthday;
//     this.showInfo = function () {
//         console.log(`Student name: ${this.firstname} ${this.lastname}`);
//     };
//     this.showAge = function () {
//         let minusTime = Date.now() - Date.parse(this.birthday);
//         this.showInfo();
//         console.log("Has " + Math.round(minusTime / (365 * 24 * 60 * 60 * 1000)) + " years old.");
//     };
//     this.getLastname = function () {
//         return _lastname;
//     }
//     this.setLastname = function (lastname) {
//         _lastname = lastname;
//     }
// }


// let andriy = new Student("Andriy", "Polynivia", "11/12/2000");
// console.log(andriy.getLastname());
// // andriy._lastname="Sokil";
// andriy.setLastname("Sokil");
// console.log(andriy.getLastname());


// //наслідування
// //constructor user
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     User.prototype.displayInfo = function () {
//         document.write("Імя " + this.name + ", вік  " + this.age + "<br>");
//     };
//     User.prototype.secretInfo = function () {
//         console.log("It is sicret");
//     }
// }
// User.prototype.maxAge = 110;

// //constructor Employee

// function Employee(name, age, company) {
//     User.call(this, name, age);
//     this.company = company;
//     Employee.prototype.displayInfo = function () {
//         // User.displayInfo();
//         document.write("Імя " + this.name + ", вік  " + this.age + " компанія;  " + this.company + "</br");

//     }
// }

// Employee.prototype = Object.create(User.prototype); // наслідування прототипу User

// let user1 = new User("Petro", 29);
// let user2 = new Employee("Ivan", 33, "Google");

// user1.displayInfo();
// user2.displayInfo();
// user1.secretInfo();
// user2.secretInfo();

// console.log(user1.maxAge);
// console.log(user2.maxAge);

// console.log(user1);
// console.log(user2);

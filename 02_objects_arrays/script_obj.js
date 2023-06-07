//age  firstname seconname nick email

// станом - властивості
// поведінкою  - методи


let student = {}; // key :value

student["name"] = "Andriy";
student["age"] = 36;

alert(student["name"]);
alert(student["age"]);


// let user = new Object();
// user.name = "Olga";
// user.age = 32;
// console.log(user.name);
// console.log(user.age);

// delete student.age;
// delete user["age"];

// console.log(student["age"]);
// console.log(user.age);



// let firstName = "Igor";
// let adress = "Rivne";
// let person = { firstName, adress }
// console.log(person.firstName);
// console.log(person.adress);

// let teacher = { person, course: "JavaScript" };
// console.log(teacher.person["firstName"]);
// console.log(teacher.course);

// if ("age" in person) {
//     alert("Exists");
// }
// else {
//     alert("Not exists!");
// }


// let cat = {
//     name: "Pushok",
//     age: 2,
//     vid: "Siam",
//     owner: {
//         name: "Petro",
//         city: "Rivne"
//     }
// }

// console.log(cat.owner.name);
// console.log(cat["owner"]["name"]);

// for (let property in cat) {  // властивості
//     console.log(property);
//     console.log(cat[property]);
// }


// cat.display = function () {
//     console.log("Cat " + cat.name + " has owner: " + cat.owner.name + " (" + cat.owner.city + ")");
// }

// cat.display();



// let dog = {};
// dog["name"] = "Bim";
// dog["age"] = 2;
// dog["display"] = function () {
//     console.log(dog.name + " has " + dog.age + " years");
// }

// dog["display"]();

// let cat = {
//     "name": "Pushok",
//     "age": 2,
//     "vid": "Siam",
//     "owners cat": {
//         "name": "Petro",
//         "city": "Rivne"
//     }
// }






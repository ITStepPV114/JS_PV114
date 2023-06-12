// class CoffeeMachine {
//     constructor(power) {
//         this.waterAmount = 0;
//         // розрахунок часу для кип'ятіння
//         function getBoilTime() {
//             return 1000; // точна формула розрахунку неважлива
//         }
//         // що робити після закінчення процесу
//         function onReady() {
//             console.log('Кава готова!');
//         }
//         this.run = function () {
//             // setTimeout - вбудована функція,
//             // вона запустить onReady через getBoilTime () мілісекунд
//             setTimeout(onReady, getBoilTime());
//         };
//     }
// }
// ==========Classes=========
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
        this._kilometers = 0;
        this.speed = 0;
    }
    //method
    print() {
        console.log(`Car: ${this.model} ${this.color} ${this.year} ...${this.speed} speed ...${this._kilometers}`);;
    }
    changeColor(newcolor) {
        this.color = newcolor;
    }
    //getter/setter
    get kilometers() {
        return this._kilometers + " km";
    }

    set kilometers(value) {
        if (value >= 0)
            this._kilometers = value;
        else
            this._kilometers = 0;
    }

}

let mycar = new Car("Reno", 2012, "gray");
console.log(mycar.color);
mycar.color = "red";
mycar.changeColor("green");
mycar.print();
mycar.kilometers=-5;
console.log(mycar.kilometers);
// mycar.print();

class Ambulance extends Car{
    constructor(model,  year,color, voice){
        super(model,year,color)
        this.voice=voice;
    }
    signal(){
        console.log("Stop!!! Signal... volue: "+ this.voice);
    }
    print(){
        super.print();
        console.log("Volume: "+this.voice);
    }
}

let anmulance1=new Ambulance("Toyota Prius",2020,"white","Viu-viu");
anmulance1.print();

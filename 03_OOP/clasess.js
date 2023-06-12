// class <=> prototype object
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
    _kilometers; //1 variant private (protected) field  by contract
    #volume //2 variant (new) for private field and methods
    static countCar=0; //field of class
    constructor(model, year, color,volume) {
        this.model = model; //public field
        this.year = year;
        this.color = color;
        this._kilometers = 0;
        this.#volume=volume;
        this.speed = 0;
        Car.countCar++;
    }
    //method
    print() {
        console.log(`Car: ${this.model} ${this.color} ${this.year} 
        ...${this.speed} speed ...${this._kilometers} volume ${this.#volume}L`);
        this.#printInfoManufacture();
    }
    //private method
    #printInfoManufacture() {
        console.log(`This secret info... `);;
    }

    //public method
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

    get volume(){
        return this.#volume;
    }

    static forAllObects(){
        console.log("Static method for class");
    }

}

let mycar = new Car("Reno", 2012, "gray",1.5);
console.log(mycar.color);
console.log(mycar.volume);
mycar.color = "red";
mycar.changeColor("green");
mycar.print();
mycar.kilometers=-5;
console.log(mycar.kilometers);
// mycar.print();

class Ambulance extends Car{
    constructor(model,  year,color, voice,volume){
        super(model,year,color,volume)
        this.voice=voice;
    }
    signal(){
        console.log("Stop!!! Signal... volue: "+ this.voice);

    }
    print(){
        super.print();
        // console.log(super.volume);
        console.log("Voice: "+this.voice);
    }
}

let anmulance1=new Ambulance("Toyota Prius",2020,"white","Viu-viu",2.5);
anmulance1.print();
let anmulance2=new Ambulance("Toyota Prius Lux",2021,"balck","Viu-viu",3.0);
console.log(`All cars: ${Car.countCar}`);
Car.forAllObects();
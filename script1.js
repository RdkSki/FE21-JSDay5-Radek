class Car {
    brand;
    model;
    fuel;

    constructor(a, b, c){
        this.brand = a;
        this.model = b;
        this.fuel = c;
    }
    printCar(){
        return `I own a ${this.brand}, model ${this.model} and it drives on ${this.fuel}. <br>`;
    }
}

class Motorbike extends Car {
    helmet;

    constructor(a, b, c, j){
        super(a, b, c);
        this.helmet = j;
    }
    printBike(){
        return `I need that ${this.helmet}. ${super.printCar()}`;
    }
}


/*let car1 = new Car("Ford", "Focus", "diesel");
let car2 = new Car("Skoda", "Forman", "gasoline");
let car3 = new Car("Toyota", "Mirai", "hydrogen");

var arrayCar = [car1, car2, car3];

for (let val of arrayCar) {
    document.getElementById("cars").innerHTML += val.printCar();
}*/

let motorbike1 = new Motorbike("Yamaha", "XSR900", "gasoline", "Studds");
let motorbike2 = new Motorbike("Kawasaki", "z900", "gasoline", "Arai");
let motorbike3 = new Motorbike("Honda", "Africa Twin", "gasoline", "Shoei");

var arrayMotorbike = [motorbike1, motorbike2, motorbike3];

for (let val of arrayMotorbike) {
    document.getElementById("cars").innerHTML += val.printBike();
}

class Animal {
    species;
    gender;
    name;

    constructor(d, e, f){
        this.species = d;
        this.gender = e;
        this.name = f;
    }
    printAnimal(){
        return `My ${this.species} is a ${this.gender} with the name ${this.name}. <br>`;  
    }
}

let animal1 = new Animal("dog", "male", "Amigo");
let animal2 = new Animal("horse", "male", "Fritzl");
let animal3 = new Animal("dog", "female", "Hummel");

var arrayAnimal = [animal1, animal2, animal3];

for (let val of arrayAnimal) {
    document.getElementById("animals").innerHTML += val.printAnimal();
}

class Person {
    fName;
    lName;
    age;

    constructor(g, h, i){
        this.fName = g;
        this.lName = h;
        this.age = i;
    }
    printPerson(){
        return `My name is ${this.fName}  ${this.lName} and I am ${this.age}. <br>`;  
    }
}

let person1 = new Person("Alex", "Maurer", 34);
let person2 = new Person("Maria", "Meier", 43);
let person3 = new Person("Karl", "Auer", 54);

var arrayPerson = [person1, person2, person3];

for (let val of arrayPerson) {
    document.getElementById("persons").innerHTML += val.printPerson();
}
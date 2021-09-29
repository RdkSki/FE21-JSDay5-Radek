/*  BASIC OBJECTS 
 let car1 = {
 brand: "Ford",
 model: "Focus",
 fuel: "Diesel",
 printCar: function() {
    return `My car is a ${this.brand}, model ${this.model} and it drives on ${this.fuel}. <br> `;
    }
}

let car2 = {
    brand: "Skoda",
    model: "Forman",
    fuel: "Gasoline",
    printCar: function() {
        return `My car is a ${this.brand}, model ${this.model} and it drives on ${this.fuel}. <br> `;
    }
}

let car3 = {
    brand: "Toyota",
    model: "Mirai",
    fuel: "Hydrogen",
    printCar: function() {
        return `My car is a ${this.brand}, model ${this.model} and it drives on ${this.fuel}. <br> `;
    }
}

let animal1 = {
 species: "dog",
 gender: "male",
 name: "Amigo",
 printAnimal: function() {
    return `My ${this.species} is a ${this.gender} with the name ${this.name}. <br>`;
    }
}

let animal2 = {
species: "horse",
gender: "male",
name: "Fritzl",
printAnimal: function() {
    return `My ${this.species} is a ${this.gender} with the name ${this.name}. <br>`;
    }
}


let animal3 = {
species: "dog",
gender: "female",
name: "Hummel",
printAnimal: function() {
    return `My ${this.species} is a ${this.gender} with the name ${this.name}. <br>`;
    }
}


let person1 = {
  fName: "Alex",
  lName: "Maurer",
  age: 34,
  printPerson: function() {
      return `My name is ${this.fName}  ${this.lName} and I am ${this.age}. <br>`
  }
}

let person2 = {
    fName: "Maria",
    lName: "Meier",
    age: 43,
    printPerson: function() {
        return `My name is ${this.fName}  ${this.lName} and I am ${this.age}. <br>`
    }
}
let person3 = {
    fName: "Karl",
    lName: "Auer",
    age: 54,
    printPerson: function() {
        return `My name is ${this.fName}  ${this.lName} and I am ${this.age}. <br>`
    }
}
var arrayCar = [car1, car2, car3];

for (let val of arrayCar) {
    document.getElementById("cars").innerHTML += val.printCar();
}

var arrayAnimal = [animal1, animal2, animal3];

for (let val of arrayAnimal) {
    document.getElementById("animals").innerHTML += val.printAnimal();
}

var arrayPerson = [person1, person2, person3];

for (let val of arrayPerson) {
    document.getElementById("persons").innerHTML += val.printPerson();
} */

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
        return `My car is a ${this.brand}, model ${this.model} and it drives on ${this.fuel}. <br>`;
    }
}

let car1 = new Car("Ford", "Focus", "diesel");
let car2 = new Car("Skoda", "Forman", "gasoline");
let car3 = new Car("Toyota", "Mirai", "hydrogen");

var arrayCar = [car1, car2, car3];

for (let val of arrayCar) {
    document.getElementById("cars").innerHTML += val.printCar();
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


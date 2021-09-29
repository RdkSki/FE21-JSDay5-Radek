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
}

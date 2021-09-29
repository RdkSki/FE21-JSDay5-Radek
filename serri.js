var student1 = {
    fName: "Serri",
    age: 32,
    gym: false,
    hobbies: ["swim", "read"],
    printInfo: function() {
        return `My name is ${this.fName}, and i am ${this.age}`;
    }
}


console.log(student1.printInfo());
console.log(student1.hobbies[0]);


class Student {
    fName;
    age;
    gym;
    hobbies;
    image;

    constructor(fname, b, gym, d, img) {
        this.fName = fname;
        this.age = b;
        this.gym = gym;
        this.hobbies = d;
        this.image = img;
    }

    printInfo() {
        return `<div class="card info" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fName}</h5>
          <p class="card-text">my age is ${this.age}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    }
}
// var name = prompt("type your name");

var student2 = new Student("Irati", "", true, "coding", "pic.jpg");
var student3 = new Student("Acilio", "", true, "coding", "pic.jpg");

var student4 = new Student("Henry", "", true, "coding", "pic.jpg");

var array = [student1, student2, student3, student4];

for (let val of array) {
    document.getElementById("demo").innerHTML += val.printInfo();
}
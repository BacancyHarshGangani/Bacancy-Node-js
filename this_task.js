// Task 1: this inside object method
// Log object property using this.

const obj1 = {
    name : "Harsh",
    greet : function () {
        console.log(this.name);
    }
}

obj1.greet();

// Task 2: this loss in function
// Fix the this issue.
// ❌ Problem

const user = {
  name: "Fenil",
  greet() {
    setTimeout(() => {
        console.log(this.name)
    }, 1000);
  }
};

user.greet();

// Task 3 this with call
// Use call to set this

function showName(age) {
  console.log(`My name is ${this.name} and age is ${age}`);
}

const person = {
  name: "Alex"
};

showName.call(person, 45); 

// Task 4: this in constructor
// Create a constructor function using this.
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  };
}

const p1 = new Person("Harsh", 22);
const p2 = new Person("Fenil", 25);

p1.introduce(); 
p2.introduce(); 


// Task 5: this in arrow vs normal function Observe difference.

// arrow function
const obj2 = {
    name : "Sid",
    play : () =>{
        console.log(this.name)
    }
}
// Normal function
const obj3 = {
    name : "harsh",
    play(){
        console.log(this.name)
    }
}

obj2.play();
obj3.play();
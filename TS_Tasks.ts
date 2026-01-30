// Task 1: Typed function
// Create a function that takes a string and returns its length.


function getlengthstring(str : string):number{
    return str.length;
}

getlengthstring("hello");

// Task 2: Interface with optional property
// Create a User interface with optional email.

interface User {
    name : string;
    email? : string;
}

const user : User = {
    name : "harsh"
}

// Task 3: Union types
// Allow function input to be string or number.

function printId(id : string | number){
    console.log(id);
}

printId(45);
printId("leclerc");

// Task 4: Function with typed object parameter
// Use an interface in a function parameter.

interface animal{
    name : string;
    voice : string;
}

function dog(animal : animal):object{
    return animal;
}

const obj1:animal = {
    name : "Dog",
    voice: "Bark",
}

console.log(dog(obj1));

// Task 5: Generic function
// Return first element of an array

function gen<T> (num:T[]) {
    return num[0];
}

const arr=[1,2,3,4];
console.log(gen(arr));


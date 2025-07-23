// types of function

// 1 Anonymous function  ---> A function Without name .

let addition = function (a, b) {
    console.log(a + b);
}
addition(25, 30);

let name = function () {
    console.log("Raj Jadhav");
}
let res = name();
console.log(res);


// 2 Arrow Function --> A concise way to write function using => .

let name1 = () => {
    console.log("good morning")
}

name1();

const add = (a, b) => a + b;
console.log(add(2, 3));

// 3 Higher-Order function ---> takes another function as an argument or returns a function

function hello(callback) {
    console.log("Hello!");
    callback();
}

function sayBye() {
    console.log("Goodbye!")
}
hello(sayBye);


let sum = (a, b) => {
    console.log(a + b);
}

let sub = (a, b) => {
    console.log(a - b);
}

let mul = (a, b) => {
    console.log(a * b);
}

let div = (a, b) => {
    console.log(a / b);
}

let calculate = (sum, sub, mul, div) => {
    sum(20, 30);
    sub(20, 30);
    mul(20, 30);
    div(20, 30);
}
calculate(sum, sub, mul, div);


let name2 = (func) => {
    console.log("raj")
    func()
}

let lastName = () => {
    console.log("jadhav")
}
name2(lastName);
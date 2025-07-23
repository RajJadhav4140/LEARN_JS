// Function ---> a Function ia reusable block if code designed to perform specific task.

//    synatx:-

// function functionName(parameter1,parameter2) {
//     // code to be executed
//     return Result;
// }

// functionName(argument)


function greet(){
    console.log("hello")
}

greet();
greet();
greet();

function sayHello(name){
     console.log(name)
}
sayHello("raj");
sayHello("jadhav");


function good(name) {
    console.log(`good morning ${name}`);
}

good("raj");

let num1 = parseInt(prompt("Enter the First number"));
let num2 = parseInt(prompt("Enter the second number"));
let operation = prompt("Enter Operation + , - , * , /");


switch (operation) {
    case "+":
        sum(num1, num2);
        break;

    case "-":
        sub(num1, num2);
        break;

    case "*":
        mul(num1, num2);
        break;

    case "/":
        div(num1, num2);
        break;

    default:
        console.log("invalid operator")

}

function sum(number1, number2) {
    console.log(number1 + number2)
}

function sub(number1, number2) {
    console.log(number1 + number2)
}

function mul(number1, number2) {
    console.log(number1 * number2)
}

function div(number1, number2) {
    console.log(number1 / number2)
}
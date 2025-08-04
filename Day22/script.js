// 1. Create a valid json

// it's like a object but little difference bettween json

// keys and strings must be in double quotes " "

let person = {
    "name": "Raj",
    "age": 20
}

console.log(typeof (person))
console.log(person)

// i] json.stringify() used convert object data to string data

let str = JSON.stringify(person)
console.log(typeof (str))
console.log(str)


// ii] json.parse() used convert string data to once again object data

let obj = JSON.parse(str)
console.log(typeof (obj))
console.log(obj)

// 2] Local Storage
// local storage provide by the braowser
// Average capacity to stores data only 5 mb
// Local storage store only primitive data type number, string, boolean

// A) .setItem() - it used to add item into the local storage

localStorage.setItem("user_name", "Raj");
localStorage.setItem("is_login", true);
localStorage.setItem("last_login", new Date());

let person1 = {
    name:"Raj",
    age:20

}

localStorage.setItem("user_info", JSON.stringify(person1));

// B] .getItem() - it used get/ read item to local storage

let res1 = localStorage.getItem("user_name");
console.log(res1);

let res2 = localStorage.getItem("is_login");
console.log(res2);

let res3 = localStorage.getItem("last_login");
console.log(res3);

let res4 = JSON.parse(localStorage.getItem("user_info")); // it convert to object
console.log(res4);

// C] .removeitem() - it used to remove item to local storage

localStorage.removeItem("user_name");

localStorage.removeItem("is_login");

// D) .clear() - clear all data from local storage

localStorage.clear();
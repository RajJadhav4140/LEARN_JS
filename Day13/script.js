// object methods

let person = {
    name : "Raj",
    city : "Satara",
    Education : "BCA"
};

// key Method ---> Returns an array of an object's own property names.

console.log(Object.keys(person));

// values Method ---> Returns an array of an object's own property values.

console.log(Object.values(person));

// entries method ---> Returns an array of an object's own key-value pairs.

console.log(Object.entries(person));

// freeze Method ---> freeze object, maling it impossible to add, remove, or modify its properties.

Object.freeze(person);

console.log(person);

// for...of   ---> loops over iterable values, giving you each value one by one.

let number = [ 1 , 2 , 3 , 4 , 5  ];
for( let i of number){
    console.log(i)
}

// for in ---> loops over object keys, giving you each key one by one.

let student_info = {
    student_name : "suraj",
    roll_number : 101,
    std : "12th",
    collage_name : "Rajendra Mahavidyalal Khandala"
}

for(let i in student_info){
    console.log(i)            // print only key.
    console.log(student_info[i])   // print only values.
}

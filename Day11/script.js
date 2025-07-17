// shift and unshift Function 

// A) Shift ---> Remove the first element.

let color = ["Red", "Green", "Yellow", "Pink", "Blue"];
let result = color.shift("Red");
console.log(color);
console.log(result);

// B) unshift ----> add the first element.

let number =  ['1','2','3','4','5'];
number.unshift(-1);
console.log(number);




// Push and Pop Function

//  A) Push  ---> add element end of an array.

let animals = ['dog', 'tiger', 'ox'];
animals.push('cow');
console.log(animals);


// B) pop ----> remove the last element of array.

let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
day.pop('Saturday');
console.log(day);



// splice function

// Splice Function ---> Remove , Add amd Replace elements in array.

    // Syntax fruit.splice(index , count , item1 , item2....)

    let fruit = ['Apple', 'Mango', 'banana', 'pineapple', 'strawberry'];
    fruit.splice( 2 , 1 , 'kiwi' );
    console.log(fruit);


    let car = ['swift', 'BMW', 'fortuner', 'wagor', 'ritz', 'eco'];
    car.splice(3,1);
    console.log(car);



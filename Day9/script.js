// Document in Javascript

console.log(document) //show the html file on console.

let title = document.title // accessing the document's title.

console.log(title)

document.title = "new title" // change the document title.

document.write("hello world")  // write the document.


let i = 0;
for (i ; i <= 5 ; i++){
    document.write(i);
}


let number = parseInt ( prompt("Enter the number") );
for (let i = 1 ; i <= 10; i++){
    let op = i * number;
    document.writeln("<h3>"+ op + "</h3>")
}


let names = "Raj"
document.writeln(names + 'Jadhav <br>')


for (let i = 1 ; i <= 10 ; i++){
    let number = 2;
    number = number * i;
    document.writeln(number + "<br>")
}
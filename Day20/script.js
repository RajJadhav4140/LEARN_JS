// setTimeout

setTimeout(() => {
    console.log("Good Morning")
}, 3000);       // 3 seconds


// setInterval


setInterval(() => {
    console.log("good Night")
}, 2000);   // 2 seconds


// ClearInterval

let id = setInterval(()=>{
    console.log("At Collage Bhor");
}, 2000)   //2 seconds

setTimeout(()=>{
    clearInterval(id)
}, 5000)   // 5 seconds


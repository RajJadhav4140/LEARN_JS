
//Date module in javascript

// Date Object

let date = new Date();
console.log(date); // show current date and time

// date
console.log(date.getDate());         // day of the month
console.log(date.getMonth());        // month (0-11) 
console.log(date.getFullYear());    //year

// time
console.log(date.getHours());        // hour (0-23)
console.log(date.getMinutes());      // minutes (0-59)
console.log(date.getSeconds());      // second (0-59)
console.log(date.getMilliseconds()); // milliseconds (0-999)    


let month = ["January", "february", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];

let date1 = ()=>{
    let date = new Date();
    console.log(`${date.getDate()} / ${month[date.getMonth()]} / ${date.getFullYear()}`)
}
date1()

let time2 = ()=>{
    let date = new Date();
    console.log(`${date.getHours()%12} / ${date.getMinutes()} / ${date.getSeconds()}`)
}
 time2()

 


 
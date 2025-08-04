// add time into H1 and also update time the time after every 1 sec
 
let timecontainer = document.getElementById("time-container");
let datecontainer = document.getElementById("date-container");

let months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "dec"]


const generatetime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milisec = date.getMilliseconds();
    timecontainer.innerHTML = `${hours % 12 || 12}::${minutes}::${seconds} <span id="mili-sec">${milisec}</span>`;
    datecontainer.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

setInterval(() => {
    generatetime()
}, 1000);

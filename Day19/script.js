// Mouse Events

let shadow = document.getElementById("moving-shadow");

// // 1

shadow.addEventListener("mouseenter", () => {
    shadow.style.backgroundColor = "red";
})

// 2

shadow.addEventListener("mouseleave", () => {
    shadow.style.backgroundColor = "white";
})

3

shadow.addEventListener("mousemove", () => {
    shadow.style.backgroundColor = "green";
})


// example

document.addEventListener("mousemove", (e) => {
    shadow.style.left = e.offsetX + "px";
    shadow.style.top = e.offsety + "px";
})


 

 
let userName = document.getElementById("username");
let emailadd = document.getElementById("email");
let password = document.getElementById("pass");
let button = document.getElementById("btn");
let form = document.getElementById("form");
let error = document.getElementById("error-container");

form.addEventListener("submit", (e) => {
   e.preventDefault()

   let username = userName.value.trim();
   let email = emailadd.value.trim();
   let pass = password.value.trim();
   console.log(username);
   console.log(email);
   console.log(pass);


   if (username.length <= 4) {
      error.style.display = "block";
      error.innerText = "User name must be greater than 4 letters";
      error.style.color = "red";

   } else if (!email.includes("@") || !email.includes(".")) {
      error.style.display = "block";
      error.innerText = "Enter valid email";
      error.style.color = "red";

   } else if (pass.length <= 4) {
      error.style.display = "block";
      error.innerText = "password must be greater than 4 letter";
      error.style.color = "red";
   }
   else {
      error.style.display = "block";
      error.innerText = "sign in successfully";
      error.style.color = "green";
   }
})


 
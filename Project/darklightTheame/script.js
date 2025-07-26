let btn = document.getElementById("btn")


let isDarkTheame = true;
btn.addEventListener("click", ()=>{
     
    if(isDarkTheame){
        document.body.style.backgroundColor = "white"
        isDarkTheame = false
    }else{
        document.body.style.backgroundColor = "black"
         isDarkTheame = true 
    }
})
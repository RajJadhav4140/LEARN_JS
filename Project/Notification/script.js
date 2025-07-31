let inputText = document.getElementById("Notification-input");
let btn = document.getElementById("btn");
let Notification = document.querySelector(".Notification-body")

const notify = (Notification_text = "dummy text", Notification_time = 1000) => {
    Notification.innerText = Notification_text;
    Notification.style.top = 4 %

        setTimeout(() => {
            Notification.style.top = "-40%"
        }, Notification_time)
}

btn.addEventListener("click", () => {
    let text = inputText.value
    if (text == "") {
        notify("please add text", 2000)
    }else{
        notify(text, 3000)
        inputText.value = ""
    }
})


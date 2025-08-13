
// API CAll

async function mydata() {
    let res = await fetch("https://randomuser.me/api/0.8/?results=20");
    let data = await res.json();
    console.log(data);
}

mydata();

// try catch

async function mydata1() {

    try {
        let result = await fetch("https://randomuser.me/api/0.8/?results=20")
        let data1 = await result.json();
        console.log(data1);
    } catch (error) {
        console.log(error);
    }
}




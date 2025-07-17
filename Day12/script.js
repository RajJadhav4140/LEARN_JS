// Object in javascript

// object is a collection of key-value Pairs.

let person = {
    name: "Raj",
    age: 20,
    std: "TY BBA CA"
}

console.log(person.name);
console.log(person.age);
console.log(person.std);


let instauser = {
    name: "raj",
    username: "Rajjadhav4140",

    following: [
        {
            name: "Aniket",
            username: "anu12",
        },
        {
            name: "niraj",
            username: "Jadhav_niraj99",
        },
        {
            name: "suraj_92",
            username: "sunny92",
        }
    ],

    followers: [
        {
            name: "anujgole",
            username: "anuj44",
        },
        {
            name: "pratik dhamal",
            username: "pratik.d09"
        },
        {
            name: "Rohan pol",
            username: "pol007"
        }
    ],

    posts: [
        {
            url: "www,instagram/post1",
            like: 220,
            Comment: 46
        },
        {
            url: "www.instagram/post2",
            like: 100,
            Comment: 35
        },
        {
            url: "www.instagram/post3",
            like: 67,
            Comment: 78
        }

    ]
}

console.log(instauser);
console.log(instauser.name);
console.log(instauser.username);
console.log(instauser.followers);
console.log(instauser.following);
console.log(instauser.posts);


for (let i = 0; i < instauser?.followers?.length; i++) {
    console.log(instauser.followers[i].username);
}

let i = 0;
for (i; i < instauser?.posts?.length; i++) {
    console.log(instauser.posts[i].like)
}

instauser.followers.shift()

instauser.following.push ({
    name : "mayur 12",
    username : "mayur"
})


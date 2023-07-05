//      "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
class User {
    constructor(id, name, username, email, address = {}, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone - phone;
        this.website = website;
        this.company = company;
    }
}

let arrUsers = [];
let url = "https://jsonplaceholder.typicode.com/users";
let urlPosts = "https://jsonplaceholder.typicode.com/posts";


function getUsers(url) {
    fetch(url)
        .then(response => response.json())
        .then(usersJSON => {
            console.log(usersJSON);
            usersJSON.forEach(user => {
                arrUsers.push(new User( user.id,  user.name,
                                        user.username, user.email,
                                        user.address, user.phone, 
                                        user.website, user.company));
            });
            addUsers(arrUsers);
        });
}

window.onload=()=>{
    getUsers(url);
};

// creating function append elements with info about all users in section "users"
function addUsers(arrUsers){
    let sectionUsers=document.querySelector(".users");
    for (const user of arrUsers) {
        let btnUser=document.createElement("input");
        btnUser.setAttribute("type","button");
        btnUser.setAttribute("data-userid",user.id);
        btnUser.setAttribute("value",user.name);
        // btnUser.setAttribute("name",user.id);
        btnUser.addEventListener('click',infoSelectedUsers);
        sectionUsers.append(btnUser) ;
    }
}


//////===================== OR=============================
// function getUsers1() {
//     let url = "https://jsonplaceholder.typicode.com/users";
//     fetch(url)
//         .then(response => response.json())
//         .then(usersJSON => {
//             console.log(usersJSON);
//             usersJSON.forEach(user => {
//                 arrUsers.push(new User( user.id,  user.name,
//                                         user.username, user.email,
//                                         user.address, user.phone, 
//                                         user.website, user.company));
//             });
//         });
// }

// window.onload=getUsers1;


function infoSelectedUsers(){
    fetch(url+'/'+this.dataset.userid)
    .then(response=>response.json())
    .then(function(user){
        showUserInfo(user);
    })

}



function showUserInfo(user) {
    const infoUser = document.querySelector(".infoUser");
    const table = document.createElement("table");
    table.innerHTML =
        `
    <tr>
        <td>Name: </td>
        <td>${user.name}</td>
    </tr>
    <tr>
        <td>Username: </td>
        <td>${user.username}</td>
    </tr>
    <tr>
        <td>Address: </td>
        <td>${user.address}</td>
    </tr>
    <tr>
        <td>Email: </td>
        <td>${user.email}</td>
    </tr>
    <tr>
        <td>Phone: </td>
        <td>${user.phone}</td>
    </tr>
    <tr>
        <td>Website: </td>
        <td>${user.website}</td>
    </tr>`;

    table.classList.add("info-table");
    infoUser.append(table);
    let btnShowPosts = document.createElement("button");
    btnShowPosts.innerText = "Show Posts";
    btnShowPosts.setAttribute("data-userid", user.id);
    btnShowPosts.addEventListener('click', infoShowPosts);
    infoUser.append(btnShowPosts);

}




function infoShowPosts() {
    fetch(urlPosts)
        .then(response => response.json())
        .then(posts => {
            const currentUserId = this.dataset.userid;
            const postsByUserId = [];
            for (const post of posts) {
                if(post.userId==currentUserId)
                    postsByUserId.push(post);
            }
            console.log(postsByUserId);
        })
}
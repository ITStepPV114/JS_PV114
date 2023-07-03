'use strict'
// AJAX = > Asynhronous JavaScript And XML

//fetch()
// promise = fetch(url, [options])
//  async /awayt 
// fetch async method
/*
  //part 1
    let response = await fetch(url); //default method "GET" 
    //part 2
    let result = response.json();
*/

// let urlAPiprivatbank = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
let gitHubUser = "https://api.github.com/users";
let urlfakeUsers = "https://jsonplaceholder.typicode.com/users";
async function ShowApiResult(url) {
    //part 1
    let response = await fetch(url,
        {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
            }
        }
    ); //default method "GET" 
    console.log("Response Status:" + response.status)
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        // return result;
    }

}

// ShowApiResult(urlfakeUsers);
// ShowApiResult(gitHubUser);

async function ShowApiResultUSER(url) {
    //part 1
    let response = await fetch(url,
        {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
            }
        }
    ); //default method "GET" 
    console.log("Response Status:" + response.status)
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        addToTableFakeUser(result);

    }

}

// OR
// let options= {
//     method: "GET",
//     // mode: "no-cors",
//     headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
//     }
// }




//function
function addToTableFakeUser(usersListFake = []) {
    // "id": 1,
    // "name": "Leanne Graham",
    // "username": "Bret",
    // "email": "Sincere@april.biz"
    // "address": {
    //     "street": "Kulas Light",
    //     "suite": "Apt. 556",
    //     "city": "Gwenborough",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //       "lat": "-37.3159",
    //       "lng": "81.1496"
    //     }
    //   },
    //   "phone": "1-770-736-8031 x56442"
    let tablebody = document.getElementById("tbodyuser");
    for (const user of usersListFake) {
        console.log(user);
        const tr_tag = document.createElement("tr");
        tr_tag.innerHTML = ` 
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address.city} st.${user.address.street} ${user.address.suite}</td>
        </tr>`;
        tablebody.append(tr_tag);
    }
}

//example using target => goal 
window.document.body.onclick = (event) => {
    // console.dir(event.target);
    if (event.target.id == "changeTheme") {
        let btnTh = event.target;
        btnTh.value = "change theme dark";
        // changeTheme.value="change theme dark";
    }
};

let btnThemeChange = document.getElementById("changeTheme");

btnThemeChange.onclick = () => {
    const tableUser = document.getElementById("tableUser");
    if (tableUser.classList.contains("table-dark")) {
        // console.log(tableUser.classList);
        tableUser.classList.remove("table-dark");
        tableUser.classList.add("table-primary");
        btnThemeChange.classList.remove("btn-dark");
        btnThemeChange.classList.add("btn-primary");
    }
    else if (tableUser.classList.contains("table-primary")) {
        tableUser.classList.add("table-dark");
        tableUser.classList.remove("table-primary");

        btnThemeChange.classList.add("btn-dark");
        btnThemeChange.classList.remove("btn-primary");
    }

    console.dir(btnThemeChange);
    if (btnThemeChange.innerHTML == "change theme dark") {
        btnThemeChange.innerHTML = ("change theme primary");
    }
    else {
        btnThemeChange.innerHTML = ("change theme dark");
    }
}


// ShowApiResultUSER(urlfakeUsers);


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

// let urlAPi = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
let gitHubUser="https://api.github.com/users";
let urlfakeUsers="https://jsonplaceholder.typicode.com/users";
async function ShowApiResult(url) {
    //part 1
    let response = await fetch(url); //default method "GET" 
    console.log("Response Status:" +response.status)
    if(response.ok){
        const result=await response.json();
        console.log(result);
        return result;
    }

}

ShowApiResult(urlfakeUsers);
ShowApiResult(gitHubUser);

//
function ShowFakeUser(usersFake=[]){
    // "id": 1,
    // "name": "Leanne Graham",
    // "username": "Bret",
    // "email": "Sincere@april.biz",
    let tablebody=document.getElementById("tbodyuser");
    
    console.log(usersFake)
    // for (const user of userFake) {
    //     let tr_tag=document.createElement("tr");
    //     tr_tag.innerHTML=`<td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td>`
    //     tablebody.append(tr_tag);
    // }

}

ShowFakeUser(usersFake);
// Request(urlAPi);
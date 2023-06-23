// ============== window with BOM==========
window.console.log("BOM!!!");

// /=============   ==

console.log(window);
console.log(`window size: ${window.innerHeight} X ${window.innerWidth}`);

//=========history====
console.log(window.history);
// history.go(-2); //go back 2 pages
// history.go(2); //go forward 2 pages

backBtn.onclick=()=>{
    history.back();
}

forwardBtn.onclick=()=>{
    history.forward();
}

// const state = { page_id: 4, user_id : 5 };
const url = "https://developer.mozilla.org/";

// history.pushState(state, "", url);
// history.go(2)
// window.history.
// history.replaceState({'record':'0'},"page 0","?record=0");
// history.pushState({'record':'1'},"page 1","?record=1");
// history.pushState({'record':'2'},"page 2","?record=2");
// history.back();

// ===screen===
console.log(window.screen);
// ==== location===
console.log(location);  
// location.assign("https://google.com"); //save history

w3schoolBtn.onclick=()=>{
    location.replace("https://www.w3schools.com/");
    //remove history
    // location.assign("https://www.w3schools.com/");
    //save history

}

//=== navigator==
console.log(navigator);

//====geolocation===
console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(`My location: ${pos.coords.latitude} : ${pos.coords.longitude}`);

}, erroGEO);

function erroGEO(){
    console.log('Cannot get your location');
}
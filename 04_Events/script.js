// using attribut on+nameevent
function infoAboutBlock(event){
    alert("Clicked div and worked function");
    console.log(event);
}

// clickDiv.onclick=infoAboutBlock;
// clickDiv.onclick=function(){
//     alert("Div clicked and worked events from script.js!!");
// }


let outer_div=document.getElementById("outblock");
// console.dir(outer_div);

outer_div.onmouseenter=()=>console.log("Outer block ENTER");
outer_div.onmouseleave=()=>console.log("Outer block LEAVE");
outer_div.onmouseover=()=>console.log("Outer block OVER");
outer_div.onmouseout=()=>console.log("Outer block OUT");

let inner_div=document.getElementById("innerblock");
// console.dir(outer_div);

inner_div.onmouseenter=()=>console.log("Inner block ENTER");
inner_div.onmouseleave=()=>console.log("Inner block LEAVE");
inner_div.onmouseover=()=>console.log("Inner block OVER");
inner_div.onmouseout=()=>console.log("Inner block OUT");


//змінити колір блоку в злаженості від натисненої клавіші миші

let block_changecolor=document.getElementById("changecolor");
block_changecolor.onmousedown=function(e){
    // console.dir(e);
    let bgColor;
    switch(e.button){
        case 0: bgColor="yellow";
            break;
        case 1: bgColor="black";
            break;
        case 2: bgColor="blue";
        break;
        default: 
            bgColor="red";
    }
    block_changecolor.style.backgroundColor=bgColor;
}

block_changecolor.oncontextmenu=function(){
    return false;
}

let block4=document.getElementById("block4");
console.dir(block4);
let game=document.getElementById("game");
game.onmouseover=function(event){
    // console.dir(event.target);
    // console.log(event.target.id);
    let block=document.getElementById(event.target.id);
    // console.dir(block);
    if (event.target.id=="block1" || event.target.id=="block2" || event.target.id=="block3")
        block4.style.backgroundColor=window.getComputedStyle(block).backgroundColor;
}




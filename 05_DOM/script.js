console.dir(document.all);
// find elements
// debugger;
document.body;
// document.documentElement;
// console.dir(document.getElementsByTagName("ul"));
// console.dir(document.getElementsByTagName("li"));
const listHead=document.getElementById("list-title"); // by ID
console.log(listHead);

let changeColorLi=document.getElementsByClassName("change-color"); //by class
console.log("Count elements by 'change-class': ",changeColorLi.length);

let h3=document.getElementsByTagName("h3"); // return array  tag h3by TAG name
console.log(h3[0].textContent);
console.log(h3[0].innerText);
console.log(h3[0].innerHTML);

let li_bg=document.querySelector("ul li.change-bg"); //first element bu selector
// console.log(li_bg);
console.dir(li_bg);
console.log(li_bg.children[0]);

let li_color=document.querySelectorAll("ul li.change-color"); //all elements by selector
console.log(li_color);

li_bg.style.backgroundColor="yellow";

for (const li of li_color) {
    li.style.color="blue";
    li.style.fontSize="36px";
}


// properties Node
const list=document.getElementById("list-info"); // by ID
const list1=document.getElementsByName("list-info"); // by name attribute
console.log(list1);
console.log(`List info: ${list.id}, ${list.tagName}, ${list.className}`);

//--create elements dynamically
const newItem=document.createElement("li");
newItem.textContent="Created element dynamicly";
//add class
newItem.classList.add("active-item");
//add attributes
newItem.setAttribute("title","I am created in JavaScript )))");
//add to DOM
list.append(newItem);


// ============ add elements to DOM ======
//append(), prepend(), before(), after(), replaceWith()

const p=document.createElement("p");
p.innerHTML="<em> Inserted before UL!</em>";
list.before(p);

list.append("Append text in UL!");
list.prepend("Prepend Text in UL!");
list.after("AFTER UL!!!");


// working with CSS class 
let getItemByClass=document.querySelector(".active-item");
console.dir(getItemByClass);
//style => attr style of element
console.log(getItemByClass.style.color);
//get info CSStable for elements
console.log(window.getComputedStyle(getItemByClass).color);

getItemByClass.style.cssText="color:red; font-size: 2rem";
//add avent hendler
let liOfElements=list.children;
for (let index = 0; index <liOfElements.length; index++) {
    const li = liOfElements[index];
    li.onmouseenter=()=>{
        if(!li.hasAttribute("title"))  li.setAttribute("title",`item number ${index}`);
    }
}

let ol=document.querySelector("#list-info>.change-bg>ol");
/* 
<ol data-changebg="blue">
<li>item1</li>
<li>item2</li>
<li>item3</li>
</ol> 
*/
console.dir(ol);
let colorbg=ol.dataset.changebg;
console.log(colorbg);
for (const li of ol.children) {
   li.onclick=()=>{
    // console.log(window.getComputedStyle(li).backgroundColor);
    // console.log(window.getComputedStyle(li).backgroundColor==colorbg);
    if(window.getComputedStyle(li).backgroundColor==colorbg)
        li.style.backgroundColor="yellow";
    else  li.style.backgroundColor=colorbg;
   };
}

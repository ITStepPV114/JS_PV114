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
//add avent hendler

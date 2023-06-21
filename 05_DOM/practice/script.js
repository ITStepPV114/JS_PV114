/*
Створіть HTML-сторінку з можливістю введення числового
значення через кнопки (більше, менше).
Користувач не повинен мати можливість друкувати текст або
цифри. Число змінюється лише при натисканні на кнопки.
*/
let counter = countnumber.innerText;
// console.log(counter);
btnPlus.onclick = () => {
   counter++;
   countnumber.innerText = counter;
}

btnMinus.onclick = () => {
   counter--;
   if (counter <= 0) counter = 0;
   countnumber.innerText = counter;
}

/*
Завдання 2
Створіть HTML-сторінку з кнопкою, натисканням на яку
додаються кольорові блоки на сторінку. Блок має видалятися зі
сторінки по кліку на сам блок
*/

/* Створіть HTML-сторінку з трекбаром.
Надайте користувачеві можливість змінювати положення
синього вказівника. 
povzunok
*/
let povzunok = document.querySelector(".povzunok");
let slider = document.querySelector(".slider");
console.dir(slider);

povzunok.onmousedown = function (event) {
   event.preventDefault();
   console.dir(event.clientX);
   //  console.dir(povzunok);
   //  console.dir(povzunok.getClientRects()[0]);
   console.dir(povzunok.getBoundingClientRect());
   let currentX = povzunok.getBoundingClientRect().left;
   //  let size=povzunok.getBoundingClientRect().width;
   let stepX = event.clientX - currentX;
   console.log(stepX);
   //  povzunok.onmousemove;
   povzunok.addEventListener("mousemove", onMouseMove);
   povzunok.addEventListener("mouseup", onMouseUp);

   function onMouseMove(event) {
      console.log(event.ClientX);
      let newMoveLeft = event.clientX - stepX - slider.getBoundingClientRect().left;
      // console.log(slider.getBoundingClientRect().left);
      if (newMoveLeft < 0) newMoveLeft = 0;
      // console.log(newMoveLeft);
      let newMoveRight=slider.offsetWidth-povzunok.offsetWidth;
      if(newMoveLeft>newMoveRight) newMoveLeft=newMoveRight;
      povzunok.style.left = newMoveLeft + "px";

   }

   function onMouseUp(event) {
      povzunok.removeEventListener("mousemove", onMouseMove);
      povzunok.removeEventListener("mouseup", onMouseUp);    
   }
   
}

document.ondragstart=function(){
   return false;
}


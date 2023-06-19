/*
Створіть HTML-сторінку з можливістю введення числового
значення через кнопки (більше, менше).
Користувач не повинен мати можливість друкувати текст або
цифри. Число змінюється лише при натисканні на кнопки.
*/
let counter = countnumber.innerText;
console.log(counter);
btnPlus.onclick=()=>
{
   counter++;
   countnumber.innerText = counter;
}

btnMinus.onclick=()=>
{
   counter--;
   if(counter<=0)counter=0;
   countnumber.innerText = counter;
}

/*
Завдання 2
Створіть HTML-сторінку з кнопкою, натисканням на яку
додаються кольорові блоки на сторінку. Блок має видалятися зі
сторінки по кліку на сам блок
*/
/*Створіть HTML-сторінку для генерації випадкових чисел. На
сторінці має бути кнопка, при натисканні на яку випадкове ціле
число від 0 до 100 виводиться в div.
*/

console.log(buttonRandomNumber);

//add event handler? using functional value
buttonRandomNumber.onmousedown=function(){
    console.dir(this);
    let number=Math.round(Math.random()*100); //0.356*100 = 36
    console.dir(block_number);
    // block_number.textContent=number;
    // block_number.innerText=number;
    block_number.innerHTML=number;
}

//arrow function
let flagHidden=false;
buttonHidden.onmousedown=()=>{
    console.dir(block_number);
    if(flagHidden){
        ptext.style.display="block";
        // block_number.style.display="block";
        block_number.hidden=false;
        flagHidden=false;
    }else{
        ptext.style.display="none";
        // block_number.style.display="none";
        block_number.hidden=true;
        flagHidden=true;
    }
}

buttonProgress.onmousedown=()=>{
    progressbar.value+=5;
}






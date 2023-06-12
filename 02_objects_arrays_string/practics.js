/*
Функція приймає об’єкт-прямокутник і виводить 
інформацію про нього (де яка точка розташована).
*/
let rectenguler = {
    x1: 0,
    y1: 4,
    x2: 8,
    y2: 4,
    x3: 8,
    y3: 0,
    x4: 0,
    y4: 0

};

function Info(rectenguler) {

    console.log(`First point: (${rectenguler.x1};${rectenguler.y1})`);

}

rectenguler = {
    topLeft: { x: 0, y: 4 },
    topRight: { x: 8, y: 4 },
    bottomRight: { x: 8, y: 0 },
    bottomLeft: { x: 0, y: 0 }
};

Info(rectenguler);
// 4. Функція приймає об’єкт-прямокутник і повертає його площу

function rectLength(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function rectSquare(rec) {
    return rectLength(rec.bottomLeft.x, rec.bottomLeft.y, rec.topLeft.x, rec.topLeft.y) * rectLength(rec.topRight.x, rec.topRight.y, rec.bottomRight.x, rec.bottomRight.y);
}
console.log(rectSquare(rectenguler));


// Напишіть функцію, яка переводить у верхній регістр перший символ переданого рядка.
let str = "hello world";
function uppercaseFirstLetter(str = "") {
    // return str[0].toUpperCase() + str.substring(1);
    return str[0].toUpperCase() + str.slice(1);
    // return str[0].toUpperCase() + str.slice(-(str.length - 1));
   
}

console.log(uppercaseFirstLetter(str));

// У всіх словах, що розділені пропуском, перевести перший символ в верхній регістр.

let str1 = "У всіх словах, що розділені пропуском, перевести перший символ в верхній регістр."
function upFirstLetterOfword(str = "") {
    // let strnew=str||"";
    let words = str.split(" ");
    for (let index = 0; index < words.length; index++) {
        words[index] = uppercaseFirstLetter(words[index]);
    }
    return words.join(" ");
}

console.log(upFirstLetterOfword(str1));
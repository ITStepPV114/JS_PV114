function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

 function initArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = getRandomInt(100);
    }
}

export {initArray};
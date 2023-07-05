function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function initArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = getRandomInt(100);
    }
}
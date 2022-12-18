export function getRandomElement(list) {
    let index = getRandomInt(list.length);
    return list[index];
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
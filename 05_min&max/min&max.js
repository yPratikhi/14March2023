function findMaxAndMin(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}

let arr = [5, 2, 7, 1, 9];
console.log(findMaxAndMin(arr));
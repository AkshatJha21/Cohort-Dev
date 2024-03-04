let arr = [1, 2, 3, 4, 5];

// FIRST METHOD
//
// for(let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
// }
//
// console.log(arr);

// SECOND METHOD

const double = (i) => {
    return i * 2;
}

const ans = arr.map(double);

console.log(ans);

const myMap = (arr, fn) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i]);
    }
    return arr;
}

console.log(myMap(arr, double));
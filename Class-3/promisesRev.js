// setTimeout(function () {
//     console.log("1 second elapsed");
//     setTimeout(function() {
//         console.log("Nested timeout processed");
//     }, 2000)
// }, 1000)

// setTimeout(function() {
//     console.log("Function 1");
// }, 1000);

// setTimeout(function() {
//     console.log("Function 2");
// }, 3000);

// function myOwnTimeout(callback, duration) {
//     setTimeout(callback, duration);
// }

function promiseTimeout(duration) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
    return p;
}

const ans = promiseTimeout(2000);
ans.then(function() {
    console.log("Promise fulfilled");
})

// myOwnTimeout(function() {
//     console.log("Not using Promises");
// }, 2000);
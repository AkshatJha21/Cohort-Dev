function newAsyncFunction() {
    let p = new Promise(function(resolve) {
        resolve("Hello");
    });
    return p;
}

async function main() {
    let value = await newAsyncFunction();
    console.log(value);
    // newAsyncFunction().then(function(value) {
    //     console.log(value);
    // });
}

main();
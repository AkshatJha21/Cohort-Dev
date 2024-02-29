function wait(n) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, n*1000);
    });
    return p;
}

const promised = wait(5);
promised.then(function () {
    console.log("Promise done");
})
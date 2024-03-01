function sleep(milliseconds) {
    let p = new Promise(function(resolve) {
        const start = Date.now();
        const end = start + milliseconds;
        while (Date.now() < end) {
            resolve();
        }
    });
    return p;
}

sleep(4000).then(function() {
    console.log("Thread halted");
})

console.log("Thread resumed");
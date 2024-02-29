const fs = require("fs");

fs.readFile("read.txt", "utf-8", function(err, data) {
    console.log(data);
});

console.log("Async function in progress");

let a = 0;
for (let i = 0; i < 10000000000; i++) {
    a++;
}

console.log("Async result should be below");
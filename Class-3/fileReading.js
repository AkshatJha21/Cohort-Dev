const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log("yo yo");

let a = 0;
for (let i = 0; i < 10000000; i++) {
    a++;
}

console.log("hey yo");
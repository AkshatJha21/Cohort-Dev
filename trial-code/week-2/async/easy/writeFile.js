const fs = require("fs");

let data = "Written text replaces the existing text from the .txt file";
fs.writeFile("read.txt", data, function() {
    console.log("File write complete");
})
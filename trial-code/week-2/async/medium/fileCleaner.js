const fs = require("fs");

fs.readFile("sample.txt", "utf-8", function(err, data) {
    console.log("Before clean-up: ", data);
    let cleanData = data.replace(/\s+/g, ' ');
    fs.writeFile("sample.txt", cleanData, function() {
        console.log("After clean-up: " + fs.readFileSync("sample.txt", "utf-8"));
    });
});
"use strict";
// let x: number = 1;
// console.log(x);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
let x = isLegal(18);
if (x) {
    console.log("Adult");
}

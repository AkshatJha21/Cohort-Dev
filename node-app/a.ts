// let x: number = 1;
// console.log(x);

function isLegal(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    };
};

let x: boolean = isLegal(18);
if (x) {
    console.log("Adult");
}
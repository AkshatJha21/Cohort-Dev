let fName = "Akshat";
let lName = "Jha";
let fullName = fName + " " + lName;

console.log("Hello, " + fullName);

let isMale = true;

if(isMale) {
    fullName = "Mr. " + fullName;
    console.log("Hello, " + fullName);
} else {
    fullName = "Ms. " + fullName;
    console.log("Hello, " + fullName);
}

for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let maxNum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log(maxNum);

const user1 = {
    name: "Akshat",
    gender: "M",
}
const user2 = {
    name: "Anunay",
    gender: "M"
}

const users = [
    {
        name: "Akshat",
        gender: "M"
    },
    {
        name: "Anunay",
        gender: "M"
    },
    {
        name: "Rimmi",
        gender: "F"
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "M") {
        console.log(users[i]["name"]);
    }
}

function findSum(a, b, printer){
    result = a + b;
    printer(result);
}

function printSum(sum) {
    console.log("Sum is: " + sum);
}

findSum(2,3, printSum);

// let sums = 0;
// for (let i = 0; i < 1000000000; i++) {
//     sums += i;
// }

// console.log(sums);

function greet() {
    console.log("Hello World");
}

setTimeout(greet, 3 * 1000);
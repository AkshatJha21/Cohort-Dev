// let x: number = 1;
// console.log(x);

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function isLegal(user: User): boolean {
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    };
};

let x = isLegal({
    firstName: "Akshat",
    lastName: "Jha",
    age: 20
});

if (x) {
    console.log("Adult");
}

// let x: boolean = isLegal(18);
// if (x) {
//     console.log("Adult");
// }

// function runAfterOneSec(fn: () => void) {
//     setTimeout(fn, 1000);
// };

// runAfterOneSec(() => {
//     console.log("Yello There");
// })


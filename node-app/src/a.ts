// let x: number = 1;
// console.log(x);

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// }

// function isLegal(user: User): boolean {
//     if (user.age >= 18) {
//         return true;
//     } else {
//         return false;
//     };
// };

// let x = isLegal({
//     firstName: "Akshat",
//     lastName: "Jha",
//     age: 20
// });

// if (x) {
//     console.log("Adult");
// }

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

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e = new Employee("akshat", 22);

// console.log(e.name);

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// type StrNum = string | number;

// function printId(id: StrNum) {
//     console.log("ID: ", id);
// }

// printId(101);
// printId("212");

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type TeamLead = Employee & Manager;

// const leader: TeamLead = {
//     name: "AKSHAT",
//     startDate: new Date(),
//     department: "HR"
// }

// function maxValue(arr: number[]) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(maxValue([1, 2, 3]));

// type KeyInput = "up" | "down" | "left" | "right";

// enum Direction {
//     Up = "up",
//     Down = "down",
//     Left = "left",
//     Right = "right"
// }

// function doSomething(keyPressed: Direction) {

// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// console.log(Direction.Up);
// console.log(Direction.Down);

// doSomething("downs"); THROWS ERROR

// function firstElem<arrType>(arr: arrType[]) {
//     return arr[0];
// }

// const value = firstElem(["akshat", "jha"]);
// console.log(value.toUpperCase());

// function identity<T>(arg: T): T {
//     return arg;
// }

// let op1 = identity<string>("water");
// let op2 = identity<number>(1);

// console.log(op1.toUpperCase());
// console.log(op2);

import hj from "./b"
console.log(hj);

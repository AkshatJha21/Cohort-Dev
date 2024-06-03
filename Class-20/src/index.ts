interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'email' | 'age'>;

// function sumOfAge(user1: User, user2: User): number {
//     return user1.age + user2.age;
// }

// let num = sumOfAge(
//     {
//         name: "Akshat",
//         age: 21
//     },
//     {
//         name: "Rumpy",
//         age: 16
//     }
// );

// console.log(num);

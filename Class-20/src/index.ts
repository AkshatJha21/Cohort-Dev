interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UserProfile = Pick<User, 'name' | 'email' | 'age'>;

type UserProfileOptional = Partial<UserProfile>

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };

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

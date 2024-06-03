// // interface User {
// //     readonly id: string;
// //     name: string;
// //     readonly age: number;
// //     email: string;
// //     password: string;
// // }

// // type UserProfile = Pick<User, 'name' | 'email' | 'age'>;

// // type UserProfileOptional = Partial<UserProfile>

// // const displayUserProfile = (user: UserProfile) => {
// //     console.log(`Name: ${user.name}, Email: ${user.email}`);
// // };

// // const user1: Readonly<User> = {
// //     id: 'asdfass',
// //     name: 'Akshat',
// //     age: 23,
// //     email: 'a@email.com',
// //     password: 'ungabunga'
// // }

// // // CAN'T BE ASSIGNED TO A READONLY VALUE
// // // user1.id = 'asdf'; 

// // // function sumOfAge(user1: User, user2: User): number {
// // //     return user1.age + user2.age;
// // // }

// // // let num = sumOfAge(
// // //     {
// // //         name: "Akshat",
// // //         age: 21
// // //     },
// // //     {
// // //         name: "Rumpy",
// // //         age: 16
// // //     }
// // // );

// // // console.log(num);

// interface User {
//     id: string;
//     name: string;
//   }
  
//   // Using Record to type an object with string keys and User values
//   type Users = Record<string, User>;
//   const usersMap = new Map<string, User>();
  
// //   const users: Users = {
// //     'abc123': { id: 'abc123', name: 'John Doe' },
// //     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// //   };

//   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
//   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
//   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//   type EventType = 'click' | 'scroll' | 'mousemove';

// // Using Exclude to create a new type without 'scroll'
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// // Function that accepts only 'click' and 'mousemove' events
// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK
// // handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type FinalSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody: FinalSchema = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
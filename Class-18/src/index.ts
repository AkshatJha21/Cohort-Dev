import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

// insertUser('user@email.com', 'user1pass', 'user', 'one');

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {
        email: email,
    },
    data: {
        firstName,
        lastName
    }
  })
  console.log(res);
}

// updateUser('user@email.com', {
//     firstName: 'A',
//     lastName: 'J'
// });

async function getUser(email: string) {
  const res = await prisma.user.findUnique({
    where: {
        email: email
    }
  })
  console.log(res);
}

// getUser('user@email.com');
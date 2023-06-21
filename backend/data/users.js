import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      street: "224, Walcom Street",
      city: "Nevada",
      code: "123",
      country: "USA",
    },
    phone: "88229933",
  },
];

export default users;

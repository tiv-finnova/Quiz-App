export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  isActive: boolean;
  username: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "Admin@example.com",
    phone: "+41 123 456 789",
    city: "Meisterschwanden",
    isActive: true,
    username: "Admin",
    password: "Admin"
  },
  {
    id: 2,
    name: "Heidi Meier",
    email: "heidi.meier@example.com",
    phone: "+41 987 654 321",
    city: "Horw",
    isActive: false,
    username: "heidi.meier",
    password: "Passwort2"
  },
  {
    id: 3,
    name: "Peter Schmidt",
    email: "peter.schmidt@example.com",
    phone: "+41 345 678 901",
    city: "Brienz",
    isActive: true,
    username: "peter.schmidt",
    password: "Passwort3"
  },
  {
    id: 4,
    name: "Paul Schmidt",
    email: "paul.schmidt@example.com",
    phone: "+41 654 321 098",
    city: "Grabs",
    isActive: false,
    username: "paul.schmidt",
    password: "Passwort4"
  },
  {
    id: 5,
    name: "Paula Schmidt",
    email: "paula.schmidt@example.com",
    phone: "+41 456 789 123",
    city: "Gstaad",
    isActive: true,
    username: "paula.schmidt",
    password: "Passwort5"
  },
  {
    id: 6,
    name: "Admin",
    email: "Admin@example.com",
    phone: "+41 456 789 123",
    city: "Meisti",
    isActive: true,
    username: "admin",
    password: "123"
  }
];

import type { User } from "./user";


export function isAdmin(user: User): boolean {
  return user.role === Role.ADMIN;
}

export function getActiveUsers(users: User[]): User[] {
  return users.filter(u => u.active);
}

type LoginResult = "success" | "invalid-password" | "blocked";


export function login(user: User, password: string): LoginResult {
  if (!user.active) return "blocked";
  if (password !== "123") return "invalid-password";
  return "success";
}

const users: User[] = [
  { id: 1, name: "Ana", role: Role.ADMIN, active: true },
  { id: 2, name: "João", role: Role.USER, active: false }
];


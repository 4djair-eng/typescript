export type User = {
  name: string;
  active: boolean;
  password: string;
};

export function getActiveUsers(users: User[]): User[] {
  return users.filter(u => u.active);
}

export function login(user: User, password: string) {
  if (!user.active) return "blocked";
  if (user.password !== password) return "invalid-password";
  return "success";
}

import { describe, it, expect } from "vitest";
import { Role, User, isAdmin, getActiveUsers, login } from "./user";

describe("User rules", () => {
  const users: User[] = [
    { id: 1, name: "Ana", role: Role.ADMIN, active: true },
    { id: 2, name: "João", role: Role.USER, active: false }
  ];

  it("verifica admin", () => {
    expect(isAdmin(users[0])).toBe(true);
    expect(isAdmin(users[1])).toBe(false);
  });

  it("filtra ativos", () => {
    const active = getActiveUsers(users);
    expect(active.length).toBe(1);
    expect(active[0].name).toBe("Ana");
  });

  it("login", () => {
    expect(login(users[0], "123")).toBe("success");
    expect(login(users[0], "errado")).toBe("invalid-password");
    expect(login(users[1], "123")).toBe("blocked");
  });
});

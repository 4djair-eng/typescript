import { describe, it, expect } from "vitest";
import type { Product } from "./produtos";
import { hasStock, getTotalValue } from "./funcaoneogcio";

describe("Product utils", () => {
  const products: Product[] = [
    { id: 1, name: "Caneta", price: 2, stock: 10 },
    { id: 2, name: "Lápis", price: 1, stock: 0 }
  ];

  it("verifica estoque", () => {
    expect(hasStock(products[0])).toBe(true);
    expect(hasStock(products[1])).toBe(false);
  });

  it("calcula total", () => {
    expect(getTotalValue(products)).toBe(20);
  });
});

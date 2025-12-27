import { it, expect } from 'vitest';

function getPrice(prod: { name: string; price: number }) {
  return prod.price;
}

it('retorna o preço do produto', () => {
  const prod = { name: 'Caneta', price: 2 };
  expect(getPrice(prod)).toBe(2);
});

import type { Product } from "./product";

export function hasStock(product: Product): boolean {
  return product.stock > 0;
}

export function getTotalValue(products: Product[]): number {
  let total = 0;

  for (const p of products) {
    total += p.price * p.stock;
  }

  return total;
}

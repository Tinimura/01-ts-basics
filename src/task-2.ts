// Завдання 2. Інтерфейс із readonly та опціональною властивістю.
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Ноутбук",
  price: 25000,
  description: "Ноутбук для навчання",
};

console.log("Завдання 2:", product);

export {};

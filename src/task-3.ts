// Завдання 3. Типізація масивів та їхніх елементів.
const usernames: string[] = ["Olena", "Andrii", "Maksym"];
const ratings: number[] = [5, 4, 5];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Ноутбук", price: 25000 },
  { id: 2, name: "Миша", price: 800 },
];

console.log("Завдання 3:", usernames, ratings, products);

export {};

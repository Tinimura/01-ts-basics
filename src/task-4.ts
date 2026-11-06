// Завдання 4. Типізація параметрів і результату функції.
function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Ім'я: ${name}`);
  console.log(`Вік: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("Olena", 25);
printUserInfo("Andrii", 30, "andrii@example.com");

export {};

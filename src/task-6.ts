// Завдання 6. Узагальнена функція.
function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["один", "два", "три"]);
const firstBoolean = getFirstElement<boolean>([true, false]);

console.log("Завдання 6:", firstNumber, firstString, firstBoolean);

// Контрольна перевірка (не розкоментовувати у фінальному коді):
// getFirstElement<number>([1, 2, "3"]);

export {};

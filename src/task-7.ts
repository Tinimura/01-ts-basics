// Завдання 7. Promise, який повертає рядок.
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Повідомлення отримано");
    }, 1000);
  });
}

getMessage().then((result) => {
  console.log("Завдання 7:", result);
});

export {};

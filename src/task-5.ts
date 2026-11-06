// Завдання 5. Union Type з трьома допустимими статусами.
type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  console.log("Поточний статус:", status);
}

logStatus("loading");
logStatus("success");
logStatus("error");

export {};

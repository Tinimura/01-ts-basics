import "./style.css";
import "./task-1";
import "./task-2";
import "./task-3";
import "./task-4";
import "./task-5";
import "./task-6";
import "./task-7";
import "./task-8";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <main class="container">
      <span class="eyebrow">Домашнє завдання №1</span>
      <h1>Основи TypeScript</h1>
      <p>Вісім завдань підключено до проєкту Vite.</p>
      <p>Натисни <strong>F12</strong> і відкрий вкладку <strong>Console</strong>, щоб побачити результати виконання.</p>
      <p class="note">Завдання 8 звертається до зовнішнього тестового API. Для його виконання потрібен інтернет.</p>
    </main>
  `;
}

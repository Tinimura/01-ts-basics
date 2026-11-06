// Завдання 8. Типізація HTTP-запиту через Axios.
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // TypeScript знає, що response.data має тип Post[].
      console.log("Завдання 8, перший заголовок:", response.data[0]?.title);
      return response.data;
    });
}

fetchPosts()
  .then((posts) => {
    console.log("Завдання 8, кількість постів:", posts.length);
  })
  .catch((error: unknown) => {
    console.error("Не вдалося отримати пости:", error);
  });

export {};

// TODO: fix typings for arrays

interface Post {
  id: number;
  title: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

export const defaultUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

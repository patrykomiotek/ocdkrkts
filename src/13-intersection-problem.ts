// TODO: use TypeScript to make an intersection

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
interface Posts {
  posts: Post[];
}

type Users = User & Posts;

export const getDefaultUserAndPosts = (): Users => {
  return {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);

import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
// TODO: make it more reusable}
interface Base {
  id: string;
}

interface Base2 {
  // email: string;
  id: string;
}

type AdminUser = {
  id: string;
};

type SuperAdminUser = {
  id: number;
};

type CommonUser = AdminUser | SuperAdminUser;
const user: CommonUser = { id: "dsfsdf" };
// const user: CommonUser = { id: 123 };

interface User extends Base, Base2 {
  // id: number;
  firstName: string;
  lastName: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: number; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: number; title: string; body: string }>>,
  Expect<Equal<Comment, { id: number; comment: string }>>
];

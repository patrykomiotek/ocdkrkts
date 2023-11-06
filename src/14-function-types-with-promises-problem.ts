import { expect, it } from "vitest";

// TODO: fix types for functions
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: Function,
  getUser: (userId: User["id"]) => Promise<User>
): Promise<User> => {
  // const userId: string = await createUser();
  const userId: Awaited<string> = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "John",
      lastName: "Doe",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "John",
    lastName: "Doe",
  });
});

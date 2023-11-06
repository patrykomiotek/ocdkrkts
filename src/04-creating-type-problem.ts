import { expect, it } from "vitest";

// TODO: fix typings for defaultUser

// type Role = "user" | "guest" | "subscriber";
enum Role {
  USER = "user",
  GUEST = "guest",
  SUBSCRIBER = "subscriber",
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  role?: Role;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 1,
  firstName: "jan",
  lastName: "kowalski",
  isAdmin: false,
  role: Role.GUEST,
};

// OPTION 2 - create type based on variable
const adminUser = {
  id: 1,
  firstName: "jan",
  lastName: "kowalski",
  isAdmin: true,
};
type AdminUser = typeof adminUser; // JS typeof adminUser -> "object"

type SuperUser = {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin?: true;
};

const admin: SuperUser = {
  id: 1,
  firstName: "jan",
  lastName: "kowalski",
  isAdmin: true, // error with false value
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});

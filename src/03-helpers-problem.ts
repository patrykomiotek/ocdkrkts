import { expect, it } from "vitest";

// TODO: type params as an object
// export const addTwoNumbers = (params: { first: number; second: number }) => {
type Params = {
  first: number;
  second: number | undefined;
};

type UserDto = {
  id: string;
  first: number;
  second: number;
  firstName: string;
  lastName?: string;
  email: string;
};

/* ts-ignore */
type CreateUserDto = Omit<UserDto, "id" | "firstName">;
type UpdateUserDto = Pick<UserDto, "firstName" | "lastName" | "email">;
// type UpdateUserDto = Required<Pick<UserDto, "firstName" | "lastName" | "email">>;
type UserRequired = Required<UserDto>;
type UserPartial = Partial<UserDto>;

export const addTwoNumbers = ({ first, second = 10 }: Params) => {
  // return params.first + params.second;
  return first + second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 1,
      second: undefined,
    })
  ).toEqual(11);

  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});

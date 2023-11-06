import { expect, it } from "vitest";

// TODO: write body of a function

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "object") {
    return amount.amount;
  }
  return amount; // number
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

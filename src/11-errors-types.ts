import { expect, it } from "vitest";

// TODO: fix typings for catch statement

class HttpError extends Error {}
class ValidationError extends Error {}

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      // throw new HttpError('http fail');
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof HttpError) {
      return e.message;
    } else if (e instanceof ValidationError) {
      return e.message;
    } else if (e instanceof Error) {
      return e.message;
    }
    // return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

import { expect, it } from "vitest";

// TODO: fix typings
type Keys = number | string;
type Cache = Record<Keys, string>;

const createCache = () => {
  const cache: Cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "John");

  expect(cache.cache["123"]).toEqual("John");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "John");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});

import { expect, it } from "vitest";

// TODO: fix typings
type Keys = number | string;
type Cache = Record<Keys, string>;

// JS -> Set (unique values), Map
// TS -> Record
const myMap = new Map<Keys, string>();
myMap.set(123, "hello");
// myMap.keys()

const createCache = () => {
  const cache: Cache = {};

  // cache[null] = "sdfsd"

  const add = (id: string, value: string) => {
    cache[id] = value;
    // cache.kot = '🐈 Cat'
    // cache.add(id, value)
    // Object.keys(cache)
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

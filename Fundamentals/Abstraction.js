const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const result = subtract(7, 3);
const expected = 3;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)  {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toEqual(expected) {},
  }
}

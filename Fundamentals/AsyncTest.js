const sumAsync = (a, b) => new Promise((resolve, _) => {
  resolve(a + b);
});

const substractAsync = (a, b) => new Promise((resolve, _) => {
  resolve(a - b);
});

async function sumTestAsync () {
  const result = await sumAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
}

async function subtractTestAsync() {
  const result = await substractAsync(7, 3);
  const expected = 3;
  expect(result).toBe(expected);
}

test('sum async adds numbers', sumTestAsync);
test('substract async substracts numbers', subtractTestAsync);

async function test(title, callback) {
 try {
    await callback();
    console.log(`✔ ${title}`); 
 } catch (error) {
    console.error(`✘ ${title}`); 
    console.error(error); 
 }
}

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

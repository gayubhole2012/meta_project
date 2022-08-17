//const {default: TestRunner} = require('./testRunner');
const addFive = require('./addFive');

test('returns the number plus 5',()=> {
  expect(addFive(1)).toBe(6);
})
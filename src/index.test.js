const { default: sum } = require('./index');

test('Test function sum', function () {
	expect(sum(1, 2)).toBe(3)
})
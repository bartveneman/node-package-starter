const test = require('ava')
const myStarterModule = require('..')

test('MOCK', t => {
	t.throws(() => myStarterModule())
})

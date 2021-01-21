const assert = require('assert')

// escreva greet abaixo
const greet = (...words) => words.length > 1 ? `${words[1]} ${words[0]}` : `Hi ${words}`

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")
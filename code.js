const capitalizeWord = (word) => 
  word.split('').map((letter, index) =>
    (index === 0) ? letter.toUpperCase() : letter
  ).join('')

const quad = (a, b, c, sign) =>
  (
    (-1 * b) + (
      sign * Math.sqrt(
        Math.pow(b, 2) - (4 * a * c)
      )
    )
  )/(2 * a)

const quadratic = (a, b, c) =>
  [
    quad(a, b, c, 1),
    quad(a, b, c, -1)
  ]

const positiveQuad = (a, b, c) =>
  quadratic(a, b, c).filter(x => x > 0).pop()

// this is an exact solution for phi, but we can use it to test our estimates
const phi = positiveQuad(1, -1, -1)

const checkRange = (ratio) =>
  Math.abs(ratio - phi) < 0.00001 

const gold = (a, b) =>
  Math.sign.apply([a, b]) ?
    checkRange((a+b)/b) ? (a+b)/b : gold(b, a + b)
: undefined

var code = {
    // Returns "Hello World!"
    helloWorld: function() {
      return 'Hello World!'
    },
    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
      return sentence
        .split(' ')
        .map((word, index) => 
            ((index + 1) > offset && index % n === 0) ? capitalizeWord(word) : word   
        ).join(' ')
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
      return (n > 1) && Number.isInteger(n) && new Array(n - 1)
        .fill(n)
        .map((val, index) =>
          val - index)
        .filter(val => 
          (val !== n) && Number.isInteger(n / val)
        ).length === 0
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: gold, 

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
      return new Array(n).fill(0).reduce((fibb, curr, i) => 
        fibb.concat([{
          a: fibb[i].b,
          b: fibb[i].a + fibb[i].b
        }]), [{
          a: 0,
          b: 1
        }]).pop().a
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        throw new Error("Not Implemented");
    }
};
module.exports = code;

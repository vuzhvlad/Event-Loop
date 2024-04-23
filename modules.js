console.log(arguments); // array that we proves that nodejs wraps everything into the function
console.log(require("module").wrapper); // wrapper function itself

// module.exports
const C = require("./test-module-1");

const calc1 = new C(); // creating instance
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2"); // destructirisation
console.log(multiply(2, 5));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

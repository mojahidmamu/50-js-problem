// Generate a Random Number in a Range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(1, 10)); // Random number between 1 and 10
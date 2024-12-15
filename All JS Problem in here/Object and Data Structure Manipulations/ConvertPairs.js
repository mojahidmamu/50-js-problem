// Convert an Object into Key-Value Pairs
function objectToPairs(obj) {
  return Object.entries(obj);
}
console.log(objectToPairs({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

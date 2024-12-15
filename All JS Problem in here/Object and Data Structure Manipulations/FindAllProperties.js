// Sum of All Properties in an Object
function sumProperties(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}
console.log(sumProperties({ a: 1, b: 2, c: 3 })); // 6

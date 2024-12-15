// Compare Two Objects for Equality
function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(isEqual({ a: 1 }, { a: 1 })); // true

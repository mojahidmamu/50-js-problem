// Invert Keys and Values of an Object
function invertObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}
console.log(invertObject({ a: 1, b: 2 })); // { 1: "a", 2: "b" }

// Merge Two Objects with Deep Nesting
function deepMerge(obj1, obj2) {
  for (const key in obj2) {
    if (typeof obj2[key] === "object") {
      obj1[key] = deepMerge(obj1[key] || {}, obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
console.log(deepMerge({ a: { b: 1 } }, { a: { c: 2 } })); // { a: { b: 1, c: 2 } }

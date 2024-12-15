// Sort an Array of Objects by a Specific Key
function sortByKey(arr, key) {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
console.log(sortByKey([{ age: 30 }, { age: 20 }, { age: 40 }], "age"));
// [{ age: 20 }, { age: 30 }, { age: 40 }]

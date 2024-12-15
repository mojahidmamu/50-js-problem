// Check if an Array Contains Duplicate Elements
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(hasDuplicates([1, 2, 3, 2])); // true

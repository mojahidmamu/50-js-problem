// Find All Unique Values Across Multiple Arrays
function uniqueValues(...arrays) {
  return [...new Set(arrays.flat())];
}
console.log(uniqueValues([1, 2], [2, 3], [3, 4])); // [1, 2, 3, 4]

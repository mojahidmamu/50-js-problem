// Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 3])); // [1, 2, 3, 4]
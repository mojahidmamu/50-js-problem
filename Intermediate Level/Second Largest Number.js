// Find the Second Largest Number in an Array
function secondLargest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[1];
}
console.log(secondLargest([10, 20, 20, 30, 40])); // 30

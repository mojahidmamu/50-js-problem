// Find All Pairs in an Array Whose Sum Equals a Target
function findPairs(arr, target) {
  const pairs = [];
  const seen = new Set();
  for (const num of arr) {
      const complement = target - num;
      if (seen.has(complement)) pairs.push([num, complement]);
      seen.add(num);
  }
  return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[3, 3], [4, 2], [5, 1]]
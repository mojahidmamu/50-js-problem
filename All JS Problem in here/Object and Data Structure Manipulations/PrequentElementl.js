// Find the Most Frequent Element in an Array
function mostFrequent(arr) {
  const freq = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});
  return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
}
console.log(mostFrequent([1, 2, 3, 2, 3, 3])); // 3

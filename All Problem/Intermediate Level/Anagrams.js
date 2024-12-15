// Check for Anagrams in Two Strings
function areAnagrams(str1, str2) {
  const format = (str) => str.toLowerCase().split('').sort().join('');
  return format(str1) === format(str2);
}
console.log(areAnagrams("listen", "silent")); // true
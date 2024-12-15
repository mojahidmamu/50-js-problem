// Find the Longest Word in a Sentence
function longestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

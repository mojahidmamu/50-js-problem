// Capitalize the First Letter of Each Word
function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("hello world")); // "Hello World"
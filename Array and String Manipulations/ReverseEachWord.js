// Reverse Each Word in a String
function reverseWords(sentence) {
  return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("Hello World")); // "olleH dlroW"
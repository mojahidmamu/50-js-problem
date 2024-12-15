// Caesar Cipher
function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, char => {
      const base = char < 'a' ? 65 : 97;
      return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
  });
}
console.log(caesarCipher("Hello", 3)); // "Khoor"
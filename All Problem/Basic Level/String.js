// Check if a String is a Palindrome
function isPalindrome(str){
  const reversed = str.split('').reverse().join('')
  return str === reversed;
}
console.log(isPalindrome('maa'))
console.log(isPalindrome('madam'))
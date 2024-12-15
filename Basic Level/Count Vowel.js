// Count Vowels in a String
function countVowel(str) {
  return (str.match(/[aeoiu]/gi) || []).length;
}
console.log(countVowel("Mojahid"));
// 
function count1(string){
  return (string.match(/[aeoiu]/gi) || []).length;
}
console.log('total vowel of ',count1('mahi'))
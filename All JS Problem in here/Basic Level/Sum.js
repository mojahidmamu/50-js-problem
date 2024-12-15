// Calculate the Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));
// option-2
function sum(num){
   return num.reduce((sum, num) => sum + num, 0)
}
console.log('total sum of',sum([1,5,87]))

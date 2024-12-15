// Calculate the Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));
// 
function sum(num){
   return num.reduce((sum, num) => sum + num, 0)
}
console.log('total sum of',sum([1,5,87]))
// function jog(m){
//   return m.reduce((m, sum ) =>  m + sum, 0)
// }
// console.log(jog([1,2]))
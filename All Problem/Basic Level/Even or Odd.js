// Check if a Number is Even or Odd
function isEven(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
console.log(isEven(4))
// Option-2
function isOdd(num){
  if(num % 2 !== 0 ){
    return 'Odd number'
  } else {
   return  'this is a even number'
  }
}
console.log(isOdd(12))